"use client";

import { useEffect, useState } from "react";
import { getAllReviewAction } from "@/actions/student.actions";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReview() {
      const result = await getAllReviewAction();
      setReviews(result.data.data);
    }
    fetchReview();
  }, []);

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
        {/* <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
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
        </div> */}

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review: any) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.student.image}
                  alt={review.student.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-200 dark:border-orange-800"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {review.student.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {/* Rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(review.ratings) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "{review.reviewText}"
              </p>

              {/* Tutor & Subject */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tutor:
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {review.tutor.user.name}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-xs font-semibold">
                  {review.tutor.category.category_name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 transition-all transform hover:scale-105">
            Load More Reviews
          </button>
        </div> */}
      </div>
    </div>
  );
}
