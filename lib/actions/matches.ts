"use server";

import { UserProfile } from "@/app/profile/page";
import { createClient } from "../supabase/server";

// Haversine formula for distance between two lat/lng points in miles
function getDistanceFromLatLonInMiles(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3958.8; // Radius of the earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in miles
}

// Helper to calculate age from birthdate
function getAge(birthdate: string): number {
  const dob = new Date(birthdate);
  const diff = Date.now() - dob.getTime();
  return new Date(diff).getUTCFullYear() - 1970;
}

export async function getPotentialMatches(): Promise<UserProfile[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated.");
  }

  // Fetch all possible users except current one
  const { data: potentialMatches, error } = await supabase
    .from("users")
    .select("*")
    .neq("id", user.id)
    .limit(100);

  if (error) {
    throw new Error("Failed to fetch potential matches");
  }

  // Fetch current user's preferences
  const { data: userPrefs, error: prefsError } = await supabase
    .from("users")
    .select("preferences, location_lat, location_lng")
    .eq("id", user.id)
    .single();

  if (prefsError) {
    throw new Error("Failed to get user preferences");
  }

  const prefs = userPrefs.preferences as {
    distance: number;
    age_range: { min: number; max: number };
    gender_preference: string[];
  };

  const minAge = prefs?.age_range?.min ?? 18;
  const maxAge = prefs?.age_range?.max ?? 99;
  const maxDistance = prefs?.distance ?? null;
  const genderPreference = prefs?.gender_preference ?? [];

  const userLat = userPrefs.location_lat;
  const userLng = userPrefs.location_lng;

  const filteredMatches =
    potentialMatches
      .filter((match) => {
        // Gender filter
        if (
          genderPreference.length > 0 &&
          !genderPreference.includes(match.gender)
        ) {
          return false;
        }

        // Age filter
        if (match.birthdate) {
          const age = getAge(match.birthdate);
          if (age < minAge || age > maxAge) {
            return false;
          }
        }

        // Distance filter
        if (
          maxDistance &&
          userLat != null &&
          userLng != null &&
          match.location_lat != null &&
          match.location_lng != null
        ) {
          const distance = getDistanceFromLatLonInMiles(
            userLat,
            userLng,
            match.location_lat,
            match.location_lng
          );
          if (distance > maxDistance) {
            return false;
          }
        }

        return true;
      })
      .map((match) => ({
        id: match.id,
        full_name: match.full_name,
        username: match.username,
        email: "",
        gender: match.gender,
        birthdate: match.birthdate,
        bio: match.bio,
        avatar_url: match.avatar_url,
        preferences: match.preferences,
        location_lat: match.location_lat,
        location_lng: match.location_lng,
        last_active: new Date().toISOString(),
        is_verified: true,
        is_online: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })) || [];

  return filteredMatches;
}

export async function likeUser(toUserId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated.");
  }

  const { error: likeError } = await supabase.from("likes").insert({
    from_user_id: user.id,
    to_user_id: toUserId,
  });

  if (likeError) {
    throw new Error("Failed to create like");
  }

  const { data: existingLike, error: checkError } = await supabase
    .from("likes")
    .select("*")
    .eq("from_user_id", toUserId)
    .eq("to_user_id", user.id)
    .single();

  if (checkError && checkError.code !== "PGRST116") {
    throw new Error("Failed to check for match");
  }

  if (existingLike) {
    const { data: matchedUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", toUserId)
      .single();

    if (userError) {
      throw new Error("Failed to fetch matched user");
    }

    return {
      success: true,
      isMatch: true,
      matchedUser: matchedUser as UserProfile,
    };
  }

  return { success: true, isMatch: false };
}

export async function getUserMatches() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated.");
  }

  const { data: matches, error } = await supabase
    .from("matches")
    .select("*")
    .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`)
    .eq("is_active", true);

  if (error) {
    throw new Error("Failed to fetch matches");
  }

  const matchedUsers: UserProfile[] = [];

  for (const match of matches || []) {
    const otherUserId =
      match.user1_id === user.id ? match.user2_id : match.user1_id;

    const { data: otherUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", otherUserId)
      .single();

    if (userError) {
      continue;
    }

    matchedUsers.push({
      id: otherUser.id,
      full_name: otherUser.full_name,
      username: otherUser.username,
      email: otherUser.email,
      gender: otherUser.gender,
      birthdate: otherUser.birthdate,
      bio: otherUser.bio,
      avatar_url: otherUser.avatar_url,
      preferences: otherUser.preferences,
      location_lat: undefined,
      location_lng: undefined,
      last_active: new Date().toISOString(),
      is_verified: true,
      is_online: false,
      created_at: match.created_at,
      updated_at: match.created_at,
    });
  }

  return matchedUsers;
}
