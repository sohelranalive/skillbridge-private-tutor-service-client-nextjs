"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState("all");

  // Sample reviews data - replace with your API data
  const reviews = [
    {
      id: 1,
      studentName: "Sarah Johnson",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      tutorName: "Dr. Michael Chen",
      subject: "Mathematics",
      rating: 5,
      comment:
        "Dr. Chen is an amazing tutor! He explains complex calculus concepts in a way that's easy to understand. My grades improved significantly.",
      date: "2024-02-05",
    },
    {
      id: 2,
      studentName: "Alex Martinez",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      tutorName: "Emma Thompson",
      subject: "English Literature",
      rating: 5,
      comment:
        "Emma's teaching style is engaging and thorough. She helped me develop critical thinking skills and improved my essay writing tremendously.",
      date: "2024-02-04",
    },
    {
      id: 3,
      studentName: "David Kim",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      tutorName: "Prof. Lisa Anderson",
      subject: "Chemistry",
      rating: 4,
      comment:
        "Great tutor with deep knowledge. Sometimes moves a bit fast, but always willing to slow down and re-explain concepts.",
      date: "2024-02-03",
    },
    {
      id: 4,
      studentName: "Emily Rodriguez",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      tutorName: "James Wilson",
      subject: "Python Programming",
      rating: 5,
      comment:
        "James is patient and explains coding concepts clearly. I went from beginner to building my first app in just 2 months!",
      date: "2024-02-02",
    },
    {
      id: 5,
      studentName: "Michael Brown",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      tutorName: "Dr. Rachel Green",
      subject: "Biology",
      rating: 5,
      comment:
        "Dr. Green makes biology fascinating! Her real-world examples and interactive teaching style made learning enjoyable.",
      date: "2024-02-01",
    },
    {
      id: 6,
      studentName: "Sophia Lee",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      tutorName: "Carlos Ramirez",
      subject: "Spanish",
      rating: 4,
      comment:
        "Carlos is a native speaker and brings authentic cultural insights to every lesson. My conversational Spanish has improved a lot.",
      date: "2024-01-31",
    },
  ];

  const filteredReviews =
    filterRating === "all"
      ? reviews
      : reviews.filter((r) => r.rating === parseInt(filterRating));

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-orange-950/20 dark:to-rose-950/20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Student Reviews
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from our learning community
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              4.9
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Rating
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              1,247
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Reviews
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              98%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Satisfaction
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              892
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              5-Star Reviews
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Filter by rating:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRating("all")}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  filterRating === "all"
                    ? "bg-linear-to-r from-orange-500 to-rose-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilterRating(rating.toString())}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filterRating === rating.toString()
                      ? "bg-linear-to-r from-orange-500 to-rose-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {rating}★
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.studentAvatar}
                  alt={review.studentName}
                  className="w-12 h-12 rounded-full border-2 border-orange-200 dark:border-orange-800"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {review.studentName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {/* Rating */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Tutor & Subject */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tutor:
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {review.tutorName}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-xs font-semibold">
                  {review.subject}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all transform hover:scale-105">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
