"use client";

import { useState } from "react";

export default function TeachingCategory() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Subjects", icon: "📚" },
    { id: "math", name: "Mathematics", icon: "🔢" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "languages", name: "Languages", icon: "🗣️" },
    { id: "arts", name: "Arts", icon: "🎨" },
    { id: "tech", name: "Technology", icon: "💻" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, idx) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 animate-slide-up ${
              selectedCategory === category.id
                ? "bg-linear-to-br from-orange-500 to-rose-600 border-orange-600 text-white shadow-xl shadow-orange-300"
                : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg"
            }`}
            style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <div
              className={`font-semibold text-sm ${
                selectedCategory === category.id
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
