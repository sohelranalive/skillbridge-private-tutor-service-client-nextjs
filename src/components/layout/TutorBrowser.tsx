"use client";

import Link from "next/link";
import { useState } from "react";

export default function TutorBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("rating");

  const categories = [
    { id: "all", name: "All", count: 2543 },
    { id: "math", name: "Mathematics", count: 342 },
    { id: "science", name: "Science", count: 298 },
    { id: "languages", name: "Languages", count: 456 },
    { id: "arts", name: "Arts", count: 187 },
    { id: "tech", name: "Technology", count: 523 },
    { id: "business", name: "Business", count: 234 },
  ];

  const tutors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      title: "Advanced Mathematics Expert",
      rating: 4.9,
      reviews: 127,
      price: 45,
      sessions: 340,
      verified: true,
      subjects: ["Calculus", "Linear Algebra", "Statistics"],
      responseTime: "< 1 hour",
      available: true,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      title: "Full-Stack Developer & CS Educator",
      rating: 4.8,
      reviews: 89,
      price: 50,
      sessions: 215,
      verified: true,
      subjects: ["Python", "React", "Node.js"],
      responseTime: "< 2 hours",
      available: true,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      title: "Spanish Language & Literature",
      rating: 5.0,
      reviews: 156,
      price: 40,
      sessions: 428,
      verified: true,
      subjects: ["Spanish", "Literature", "Conversation"],
      responseTime: "< 1 hour",
      available: false,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      title: "Physics Professor",
      rating: 4.7,
      reviews: 94,
      price: 48,
      sessions: 267,
      verified: true,
      subjects: ["Physics", "Mechanics", "Quantum"],
      responseTime: "< 3 hours",
      available: true,
    },
    {
      id: 5,
      name: "Sophia Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      title: "Digital Art & Design Specialist",
      rating: 4.9,
      reviews: 112,
      price: 42,
      sessions: 189,
      verified: false,
      subjects: ["Photoshop", "Illustrator", "UI/UX"],
      responseTime: "< 2 hours",
      available: true,
    },
    {
      id: 6,
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      title: "Business Strategy Consultant",
      rating: 4.8,
      reviews: 76,
      price: 60,
      sessions: 145,
      verified: true,
      subjects: ["Marketing", "Strategy", "Leadership"],
      responseTime: "< 4 hours",
      available: true,
    },
  ];

  return (
    <div className="tutor-profile min-h-screen">
      {/* Header */}

      {/* Search Bar */}
      <section className="bg-gradient-to-r from-rose-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3 animate-slide-down">
            Find Your Perfect Tutor
          </h1>
          <p className="text-rose-100 mb-6 animate-slide-down stagger-1">
            Browse {tutors.length} expert tutors ready to help you succeed
          </p>

          <div className="bg-white rounded-2xl p-3 shadow-2xl shadow-rose-900/20 animate-slide-down stagger-2">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 text-gray-400 ml-3"
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
                placeholder="Search by subject, tutor name, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 py-3"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span
                      className={`text-sm ${
                        selectedCategory === category.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade stagger-1">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Price Range
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">${priceRange[0]}</span>
                  <span className="text-gray-700">${priceRange[1]}+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex gap-2">
                  {[20, 40, 60, 80].map((price) => (
                    <button
                      key={price}
                      onClick={() => setPriceRange([0, price])}
                      className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all"
                    >
                      ${price}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade stagger-2">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Minimum Rating
              </h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      selectedRating === rating
                        ? "bg-rose-50 border-2 border-rose-600"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 font-medium">& up</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 animate-fade stagger-3">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Availability
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-gray-700">Available Now</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-gray-700">Verified Tutors</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                  />
                  <span className="text-gray-700">Fast Response</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Tutors Grid */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 animate-fade">
              <div className="text-gray-700">
                <span className="font-bold">{tutors.length}</span> tutors found
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="sessions">Most Sessions</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Tutors List */}
            <div className="space-y-6">
              {tutors.map((tutor, idx) => (
                <div
                  key={tutor.id}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-rose-300 transition-all cursor-pointer animate-fade stagger-${(idx % 6) + 1}`}
                >
                  <div className="flex gap-6">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={tutor.avatar}
                        alt={tutor.name}
                        className="w-24 h-24 rounded-2xl border-2 border-rose-200"
                      />
                      {tutor.verified && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-rose-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                      {tutor.available && (
                        <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {tutor.name}
                          </h3>
                          <p className="text-gray-600">{tutor.title}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-rose-600">
                            ${tutor.price}
                          </div>
                          <div className="text-sm text-gray-500">per hour</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-bold text-gray-900">
                            {tutor.rating}
                          </span>
                          <span className="text-gray-500">
                            ({tutor.reviews} reviews)
                          </span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600">
                          {tutor.sessions} sessions
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600">
                          {tutor.responseTime} response
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tutor.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1.5 bg-rose-50 text-rose-700 text-sm font-medium rounded-lg"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                          Book Session
                        </button>
                        <Link href="/tutors/abc">
                          <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                            View Profile
                          </button>
                        </Link>
                        <button className="p-2.5 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8 animate-fade stagger-6">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    page === 1
                      ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
