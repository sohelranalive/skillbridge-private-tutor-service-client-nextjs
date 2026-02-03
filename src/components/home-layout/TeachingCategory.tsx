"use client";

import { Category } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

// interface CategoryProps {
//   categories: Category;
//   map: any;
//   idx: any;
// }

//{ categories }: any

export default function TeachingCategory({ categories }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Start with null instead of "all"

  // When you receive categories from props, set the first one as selected

  // const categories = [
  //   { id: "all", name: "All Subjects", count: "500+" },
  //   { id: "math", name: "Mathematics", count: "120" },
  //   { id: "science", name: "Science", count: "95" },
  //   { id: "languages", name: "Languages", count: "150" },
  //   { id: "arts", name: "Arts & Design", count: "80" },
  //   { id: "tech", name: "Technology", count: "110" },
  //   { id: "business", name: "Business", count: "75" },
  //   { id: "music", name: "Music", count: "60" },
  // ];

  useEffect(() => {
    if (categories && categories.length > 0 && selectedCategory === null) {
      setSelectedCategory(categories[0].category_id); // Auto-select first category
    }
  }, [categories, selectedCategory]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12 animate-slide-up">
        {/* <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
          <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
            EXPLORE CATEGORIES
          </span>
        </div> */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Find Your Perfect Subject
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Browse through our curated categories and connect with expert tutors
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
            {/* Decorative Background Pattern */}
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

              {/* Hover Arrow */}
              <div
                className={`absolute bottom-2 right-2 transform transition-all duration-300 ${
                  selectedCategory === category.category_id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                <svg
                  className={`w-5 h-5 ${selectedCategory === category.category_id ? "text-white" : "text-orange-600"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
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
          <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Browse All Categories →
          </button>
        </Link>
      </div>
    </section>
  );
}
