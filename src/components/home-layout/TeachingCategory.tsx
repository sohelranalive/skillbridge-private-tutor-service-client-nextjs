"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeachingCategory({ categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories && categories.length > 0 && selectedCategory === null) {
      setSelectedCategory(categories[0].category_id);
    }
  }, [categories, selectedCategory]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-12 animate-slide-up">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          We have tutors of all fields
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore all out categories and connect with expert tutors
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category: any, idx: any) => (
          <button
            key={category.category_id}
            onClick={() => setSelectedCategory(category.category_id)}
            className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 animate-slide-up overflow-hidden ${
              selectedCategory === category.category_id
                ? "bg-linear-to-br from-orange-500 to-rose-600 border-orange-600 shadow-2xl shadow-orange-300/50 dark:shadow-orange-900/50"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-xl"
            }`}
            style={{ animationDelay: `${idx * 0.05}s`, opacity: 0 }}
          >
            <div
              className={`absolute inset-0 opacity-10 ${
                selectedCategory === category.category_id
                  ? "opacity-20"
                  : "opacity-0 group-hover:opacity-10"
              } transition-opacity`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-orange-400 to-rose-500 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-orange-400 to-rose-500 rounded-full blur-2xl transform -translate-x-6 translate-y-6"></div>
            </div>

            {/* Content */}
            <div className="relative">
              {/* Category Name */}
              <h3
                className={`font-bold text-base md:text-lg mb-2 transition-colors ${
                  selectedCategory === category.category_id
                    ? "text-white"
                    : "text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400"
                }`}
              >
                {category.category_name}
              </h3>

              {/* Tutor Count */}
              <div
                className={`flex items-center gap-1.5 text-sm ${
                  selectedCategory === category.category_id
                    ? "text-orange-100"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">
                  {category._count.tutor} Tutors
                </span>
              </div>

              {/* Selected Indicator */}
              {selectedCategory === category.category_id && (
                <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center animate-scale-in">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* View All Button */}
      <div
        className="text-center mt-12 animate-slide-up"
        style={{ animationDelay: "0.5s", opacity: 0 }}
      >
        <Link href="/tutors">
          <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-300 dark:shadow-orange-900/50 hover:shadow-xl transition-all transform hover:scale-105">
            Browse All Categories →
          </button>
        </Link>
      </div>
    </section>
  );
}
