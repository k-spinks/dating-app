"use client";

import PhotoUpload from "@/components/PhotoUpload";
import {
  getCurrentUserProfile,
  updateUserProfile,
} from "@/lib/actions/profile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "preferences">("info");
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    bio: "",
    gender: "male" as "male" | "female" | "other",
    birthdate: "",
    avatar_url: "",
    preferences: {
      distance: 50,
      age_range: { min: 25, max: 35 },
      gender_preference: ["female"] as string[],
    },
  });

  useEffect(() => {
    async function loadProfile() {
      try {
        const profileData = await getCurrentUserProfile();
        if (profileData) {
          setFormData({
            full_name: profileData.full_name || "",
            username: profileData.username || "",
            bio: profileData.bio || "",
            gender: profileData.gender || "male",
            birthdate: profileData.birthdate || "",
            avatar_url: profileData.avatar_url || "",
            preferences: profileData.preferences || {
              distance: 50,
              age_range: { min: 25, max: 35 },
              gender_preference: ["female"],
            },
          });
        }
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    if (name.startsWith("pref_")) {
      const key = name.replace("pref_", "");
      setFormData((prev) => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [key]: key === "distance" ? Number(value) : value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleAgeRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        age_range: { ...prev.preferences.age_range, [name]: Number(value) },
      },
    }));
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const result = await updateUserProfile({
        ...formData,
        preferences: {
          ...formData.preferences,
          gender_preference: formData.preferences.gender_preference as (
            | "male"
            | "female"
            | "other"
          )[],
        },
      });
      if (result.success) {
        router.push("/profile");
      } else {
        setError(result.error || "Failed to update profile.");
      }
    } catch {
      setError("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Update your profile information
          </p>
        </header>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200 dark:border-gray-700">
            <button
              className={`px-4 py-2 font-medium hover:cursor-pointer ${
                activeTab === "info"
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("info")}
            >
              User Info
            </button>
            <button
              className={`ml-4 px-4 py-2 font-medium hover:cursor-pointer ${
                activeTab === "preferences"
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </button>
          </div>

          <form onSubmit={handleFormSubmit}>
            {activeTab === "info" && (
              <>
                {/* Profile Picture */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Profile Picture
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img
                          src={formData.avatar_url || "/default-avatar.png"}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <PhotoUpload
                        onPhotoUploaded={(url) =>
                          setFormData((prev) => ({ ...prev, avatar_url: url }))
                        }
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        Upload a new profile picture
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        JPG, PNG or GIF. Max 5MB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Basic info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Username *
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Birthday *
                    </label>
                    <input
                      type="date"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    About Me *
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Tell others about yourself..."
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formData.bio.length}/500 characters
                  </p>
                </div>
              </>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6">
                {/* Gender Preference Multi-select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gender Preference
                  </label>
                  <div className="flex space-x-2 ">
                    {["male", "female", "other"].map((gender) => {
                      const selected =
                        formData.preferences.gender_preference.includes(gender);
                      return (
                        <button
                          key={gender}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => {
                              const current =
                                prev.preferences.gender_preference;
                              if (selected) {
                                // Remove if already selected
                                return {
                                  ...prev,
                                  preferences: {
                                    ...prev.preferences,
                                    gender_preference: current.filter(
                                      (g) => g !== gender
                                    ),
                                  },
                                };
                              } else {
                                // Add if not selected
                                return {
                                  ...prev,
                                  preferences: {
                                    ...prev.preferences,
                                    gender_preference: [...current, gender],
                                  },
                                };
                              }
                            })
                          }
                          className={`px-4 py-2 rounded-lg border focus:outline-none transition-colors duration-200 text-sm font-medium hover:cursor-pointer ${
                            selected
                              ? "bg-pink-500 border-pink-500 text-white"
                              : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                          }`}
                        >
                          {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Age Range */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Age Min
                    </label>
                    <input
                      type="number"
                      name="min"
                      value={formData.preferences.age_range.min}
                      min={18}
                      max={100}
                      onChange={handleAgeRangeChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Age Max
                    </label>
                    <input
                      type="number"
                      name="max"
                      value={formData.preferences.age_range.max}
                      min={18}
                      max={100}
                      onChange={handleAgeRangeChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Max Distance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Distance (miles)
                  </label>
                  <input
                    type="number"
                    name="pref_distance"
                    value={formData.preferences.distance}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:cursor-pointer"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
