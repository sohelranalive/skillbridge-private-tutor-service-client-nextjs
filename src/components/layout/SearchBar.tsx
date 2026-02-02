"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative animate-slide-up stagger-3">
      <div className="bg-white rounded-2xl shadow-2xl shadow-orange-200/50 p-3 border-2 border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 px-4">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for tutors, subjects, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <button className="px-8 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
