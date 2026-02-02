"use client";

import { useState } from "react";

export default function TutorDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [availabilityMode, setAvailabilityMode] = useState("view");

  const tutor = {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@email.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    verified: true,
    rating: 4.9,
    totalReviews: 127,
    totalSessions: 340,
    monthlyEarnings: 3240,
    subjects: ["Advanced Mathematics", "Calculus", "Statistics"],
  };

  const todaySessions = [
    {
      id: 1,
      student: "Alex Thompson",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      subject: "Advanced Calculus",
      time: "14:00",
      duration: 60,
      status: "upcoming",
      meetingLink: "https://meet.skillbridge.com/abc123",
    },
    {
      id: 2,
      student: "Emma Wilson",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      subject: "Linear Algebra",
      time: "16:00",
      duration: 90,
      status: "upcoming",
      meetingLink: "https://meet.skillbridge.com/xyz789",
    },
  ];

  const upcomingSessions = [
    {
      id: 3,
      student: "Michael Brown",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      subject: "Statistics",
      date: "2026-02-03",
      time: "10:00",
      duration: 60,
    },
    {
      id: 4,
      student: "Sophia Davis",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      subject: "Calculus",
      date: "2026-02-04",
      time: "15:00",
      duration: 60,
    },
  ];

  const recentReviews = [
    {
      id: 1,
      student: "Alex Thompson",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      rating: 5,
      comment:
        "Excellent tutor! Explains concepts clearly and is very patient.",
      date: "1 day ago",
    },
    {
      id: 2,
      student: "Emma Wilson",
      studentAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 5,
      comment:
        "Dr. Chen helped me understand linear algebra in ways I never thought possible.",
      date: "3 days ago",
    },
  ];

  const weeklyAvailability = [
    {
      day: "Monday",
      slots: [
        { time: "09:00", booked: true, student: "John Doe" },
        { time: "10:30", booked: false },
        { time: "14:00", booked: true, student: "Jane Smith" },
        { time: "16:00", booked: false },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "09:00", booked: false },
        { time: "11:00", booked: false },
        { time: "15:00", booked: true, student: "Mike Johnson" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "10:00", booked: false },
        { time: "14:00", booked: false },
        { time: "16:30", booked: false },
      ],
    },
  ];

  const stats = [
    {
      label: "This Month",
      value: `$${tutor.monthlyEarnings}`,
      change: "+12%",
      positive: true,
    },
    {
      label: "Total Sessions",
      value: tutor.totalSessions,
      change: "+8",
      positive: true,
    },
    {
      label: "Avg. Rating",
      value: tutor.rating,
      change: "+0.2",
      positive: true,
    },
    { label: "Active Students", value: 45, change: "+5", positive: true },
  ];

  return (
    <div className="tutor-dashboard min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
                SB
              </div>
              <div>
                <div className="font-bold text-gray-900 text-xl display-font">
                  Tutor Dashboard
                </div>
                <div className="text-sm text-gray-500">
                  Manage your teaching sessions
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <img
                  src={tutor.avatar}
                  alt={tutor.name}
                  className="w-10 h-10 rounded-xl"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {tutor.name}
                  </div>
                  <div className="text-xs text-gray-500">Tutor Account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all animate-fade-up delay-${(idx + 1) * 100}`}
            >
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div
                className={`text-sm font-semibold ${stat.positive ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change} this month
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Sessions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Sessions */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-slide-in delay-100">
              <h2 className="text-2xl font-bold mb-6 display-font text-gray-900">
                Today's Sessions
              </h2>

              {todaySessions.length > 0 ? (
                <div className="space-y-4">
                  {todaySessions.map((session) => (
                    <div
                      key={session.id}
                      className="p-5 bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={session.studentAvatar}
                          alt={session.student}
                          className="w-14 h-14 rounded-xl border-2 border-white shadow-md"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">
                                {session.subject}
                              </h3>
                              <p className="text-gray-600">
                                with {session.student}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-xl text-emerald-600">
                                {session.time}
                              </div>
                              <div className="text-sm text-gray-600">
                                {session.duration} min
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-3 mt-4">
                            <button className="px-5 py-2.5 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                              Start Session
                            </button>
                            <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>No sessions scheduled for today</p>
                </div>
              )}
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-slide-in delay-200">
              <h2 className="text-2xl font-bold mb-6 display-font text-gray-900">
                Upcoming Sessions
              </h2>

              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={session.studentAvatar}
                        alt={session.student}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {session.subject}
                        </div>
                        <div className="text-sm text-gray-600">
                          {session.student}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        {new Date(session.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-gray-600">
                        {session.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Management */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-slide-in delay-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold display-font text-gray-900">
                  Weekly Availability
                </h2>
                <button
                  onClick={() =>
                    setAvailabilityMode(
                      availabilityMode === "view" ? "edit" : "view",
                    )
                  }
                  className="px-4 py-2 bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  {availabilityMode === "view"
                    ? "Edit Schedule"
                    : "Save Changes"}
                </button>
              </div>

              <div className="space-y-4">
                {weeklyAvailability.map((day) => (
                  <div
                    key={day.day}
                    className="border border-gray-200 rounded-xl p-4"
                  >
                    <div className="font-bold text-gray-900 mb-3">
                      {day.day}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {day.slots.map((slot, idx) => (
                        <div
                          key={idx}
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            slot.booked
                              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                              : availabilityMode === "edit"
                                ? "bg-emerald-100 text-emerald-700 cursor-pointer hover:bg-emerald-200"
                                : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          {slot.time}
                          {slot.booked && (
                            <span className="ml-2">• Booked</span>
                          )}
                        </div>
                      ))}
                      {availabilityMode === "edit" && (
                        <button className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all">
                          + Add Slot
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Reviews */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-xl p-6 text-white animate-fade-up delay-100">
              <h3 className="text-xl font-bold mb-6 display-font">
                Your Performance
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-white/80">Average Rating</span>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-xl">{tutor.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="text-white/80">Total Reviews</span>
                  <span className="font-bold text-xl">
                    {tutor.totalReviews}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/80">Response Rate</span>
                  <span className="font-bold text-xl">98%</span>
                </div>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-fade-up delay-200">
              <h3 className="text-xl font-bold mb-4 display-font text-gray-900">
                Recent Reviews
              </h3>

              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <div key={review.id} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={review.studentAvatar}
                        alt={review.student}
                        className="w-10 h-10 rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {review.student}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
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
                          <span className="text-xs text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                View All Reviews
              </button>
            </div>

            {/* Profile Status */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-fade-up delay-300">
              <h3 className="text-xl font-bold mb-4 display-font text-gray-900">
                Profile Status
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Profile Completion</span>
                  <span className="font-bold text-emerald-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-full h-2"
                    style={{ width: "95%" }}
                  />
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">Verified Tutor</span>
                </div>

                <button className="w-full mt-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
