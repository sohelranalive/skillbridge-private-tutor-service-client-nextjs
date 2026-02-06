"use client";

import { Roles } from "@/constants/roles";
import Link from "next/link";
import { useState } from "react";

export default function TutorProfile({ tutor }: any) {
  const [activeTab, setActiveTab] = useState("about");

  const ratingsssss = 4.7;

  const reviews = [
    {
      id: 1,
      student: "Michael Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Dr. Chen is an exceptional tutor! She helped me go from struggling with calculus to acing my final exam. Her explanations are crystal clear and she's incredibly patient.",
    },
    {
      id: 2,
      student: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      date: "1 month ago",
      comment:
        "Outstanding teacher. Made linear algebra actually enjoyable! Her real-world examples really helped concepts click.",
    },
    {
      id: 3,
      student: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great tutor with deep knowledge. Sometimes moves a bit fast, but always willing to slow down and re-explain when needed.",
    },
  ];

  const stats = [
    { label: "Total Sessions", value: tutor.totalSessions },
    { label: "Response Time", value: tutor.responseTime },
    { label: "Completion Rate", value: "98%" },
    { label: "Repeat Students", value: "85%" },
  ];

  interface AvailabilitySlot {
    id: string;
    start_time: string;
    end_time: string;
  }

  const availability: AvailabilitySlot[] = [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      start_time: "2024-02-10T09:00:00.000Z",
      end_time: "2024-02-10T10:00:00.000Z",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      start_time: "2024-02-10T10:30:00.000Z",
      end_time: "2024-02-10T11:30:00.000Z",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      start_time: "2024-02-11T13:00:00.000Z",
      end_time: "2024-02-11T14:00:00.000Z",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440004",
      start_time: "2024-02-12T16:00:00.000Z",
      end_time: "2024-02-12T17:00:00.000Z",
    },
  ];

  // Fix state type
  const [selectedDate, setSelectedDate] = useState<AvailabilitySlot | null>(
    null,
  );
  return (
    <div className="tutor-profile min-h-screen">
      {/* Header back to search button */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/tutors">
            <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Search
            </button>
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              className="w-6 h-6 text-gray-600"
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
      </header>

      {/* Main Content starts from here*/}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={tutor?.tutor?.image}
                    alt={tutor?.tutor?.name}
                    className="w-32 h-32 rounded-2xl border-4 border-indigo-100"
                  />
                  {tutor.isVerified && (
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
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
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 heading-font mb-1">
                        {tutor.tutor.name}
                      </h1>
                      <p className="text-lg text-gray-600">
                        {tutor.category.category_name}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-indigo-600">
                        ${tutor.price}
                      </div>
                      <div className="text-sm text-gray-500">per session</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(ratingsssss) ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {tutor.ratings}
                      </span>
                      <span className="text-gray-500">
                        10 reviews
                        {/* ({tutor.totalReviews} reviews) */}
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600">
                      10 sessions completed
                      {/* {tutor.totalSessions} sessions completed */}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 animate-fade-in stagger-2">
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-8 pt-6">
                  {["about", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 px-2 font-semibold transition-all relative ${
                        activeTab === tab
                          ? "text-indigo-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8">
                {activeTab === "about" && (
                  <div className="space-y-6 animate-slide-in">
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        About Me
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {tutor.about}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Education
                      </h3>
                      <div className="space-y-3">
                        {tutor.education.map((degree: string) => (
                          <span
                            key={degree}
                            className="px-3 py-1.5 mx-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                          >
                            {degree}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Languages
                      </h3>
                      <div className="flex gap-2">
                        {tutor.language.map((lang: string) => (
                          <span
                            key={lang}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-6 animate-slide-in">
                    {/* {reviews.map((review, idx) => (
                      <div
                        key={review.id}
                        className="p-6 bg-gray-50 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.student}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {review.student}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {review.date}
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))} */}
                    from review table
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 sticky top-6 animate-fade-in stagger-3">
              <h3 className="font-bold text-xl mb-6 heading-font">
                Book a Session
              </h3>

              <div className="space-y-6">
                <div className="space-y-3">
                  {availability.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedDate(slot)}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                        selectedDate?.id === slot.id
                          ? "bg-linear-to-r from-indigo-600 to-purple-600 border-indigo-600 shadow-lg shadow-indigo-300 dark:shadow-indigo-900/50"
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {/* Date */}
                        <div
                          className={`text-sm font-medium ${
                            selectedDate?.id === slot.id
                              ? "text-indigo-100"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {new Date(slot.start_time).toLocaleDateString(
                            "en-US",
                            {
                              month: "numeric",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </div>

                        {/* Time */}
                        <div
                          className={`text-lg font-bold ${
                            selectedDate?.id === slot.id
                              ? "text-white"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {new Date(slot.start_time).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                          {" - "}
                          {new Date(slot.end_time).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>

                        {/* Checkmark */}
                        {selectedDate?.id === slot.id && (
                          <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-indigo-600"
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

                <button className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
