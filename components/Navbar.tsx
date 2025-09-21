"use client";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { signOut, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-slate-900 border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              StreamMatch
            </span>
          </Link>

          {/* Desktop links */}
          {user && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/matches"
                className="text-gray-300 hover:text-pink-400"
              >
                Discover
              </Link>
              <Link
                href="/matches/list"
                className="text-gray-300 hover:text-blue-400"
              >
                Matches
              </Link>
              <Link href="/chat" className="text-gray-300 hover:text-green-400">
                Messages
              </Link>
              <Link
                href="/profile"
                className="text-gray-300 hover:text-purple-400"
              >
                Profile
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          {user && (
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* Auth button (desktop only) */}
          {user ? (
            <button
              onClick={signOut}
              className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {user && (
        <div
          className={`fixed inset-0 z-50 transition ${
            mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              mobileOpen ? "opacity-50" : "opacity-0"
            }`}
          />

          {/* Drawer panel */}
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-slate-800 shadow-lg flex flex-col p-6 space-y-4 transform transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Nav links (close drawer on click) */}
            <Link
              href="/matches"
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-pink-400"
            >
              Discover
            </Link>
            <Link
              href="/matches/list"
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-blue-400"
            >
              Matches
            </Link>
            <Link
              href="/chat"
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-green-400"
            >
              Messages
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-purple-400"
            >
              Profile
            </Link>

            {/* Sign out inside drawer */}
            <button
              onClick={() => {
                setMobileOpen(false);
                signOut();
              }}
              className="mt-auto px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
