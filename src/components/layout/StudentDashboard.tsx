"use client";

import { useState } from "react";

export default function StudentDashboard() {
  const [activeView, setActiveView] = useState("upcoming");

  const student = {
    name: "Alex Thompson",
    email: "alex.thompson@email.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    joinedDate: "January 2024",
    totalSessions: 24,
    totalSpent: 1080,
  };

  const upcomingSessions = [
    {
      id: 1,
      tutor: "Dr. Sarah Chen",
      tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      subject: "Advanced Calculus",
      date: "2026-02-03",
      time: "14:00",
      duration: 60,
      status: "confirmed",
      meetingLink: "https://meet.skillbridge.com/abc123",
    },
    {
      id: 2,
      tutor: "Marcus Johnson",
      tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      subject: "Python Programming",
      date: "2026-02-05",
      time: "10:30",
      duration: 90,
      status: "confirmed",
      meetingLink: "https://meet.skillbridge.com/xyz789",
    },
    {
      id: 3,
      tutor: "Elena Rodriguez",
      tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      subject: "Spanish Conversation",
      date: "2026-02-07",
      time: "16:00",
      duration: 60,
      status: "pending",
      meetingLink: null,
    },
  ];

  const pastSessions = [
    {
      id: 4,
      tutor: "Dr. James Wilson",
      tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      subject: "Physics Mechanics",
      date: "2026-01-28",
      time: "15:00",
      duration: 60,
      status: "completed",
      reviewed: false,
    },
    {
      id: 5,
      tutor: "Dr. Sarah Chen",
      tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      subject: "Linear Algebra",
      date: "2026-01-25",
      time: "14:00",
      duration: 60,
      status: "completed",
      reviewed: true,
    },
  ];

  const recommendedTutors = [
    {
      id: 1,
      name: "Dr. Lisa Park",
      subject: "Chemistry",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rating: 4.9,
      price: 42,
    },
    {
      id: 2,
      name: "Robert Chen",
      subject: "Data Science",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rating: 4.8,
      price: 55,
    },
  ];

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="student-dashboard min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
              SB
            </div>
            <span className="text-2xl font-bold serif-font bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              SkillBridge
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-linear-to-br from-violet-100 to-fuchsia-100 rounded-2xl">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-14 h-14 rounded-xl border-2 border-white"
            />
            <div>
              <div className="font-bold text-gray-900">{student.name}</div>
              <div className="text-sm text-gray-600">Student</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { icon: "📊", label: "Dashboard", active: true },
            { icon: "📅", label: "My Sessions", active: false },
            { icon: "🔍", label: "Find Tutors", active: false },
            { icon: "💬", label: "Messages", active: false },
            { icon: "⭐", label: "Favorites", active: false },
            { icon: "⚙️", label: "Settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                item.active
                  ? "bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-300"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-all">
            <span className="text-xl">🚪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 p-8">
        {/* Header */}
        <header className="mb-8 animate-slide-down">
          <h1 className="text-4xl font-bold mb-2 serif-font text-gray-900">
            Welcome back, {student.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Ready to continue your learning journey?
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Sessions",
              value: student.totalSessions,
              icon: "📚",
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Hours Learned",
              value: "36h",
              icon: "⏱️",
              color: "from-violet-500 to-purple-500",
            },
            {
              label: "Total Spent",
              value: `$${student.totalSpent}`,
              icon: "💰",
              color: "from-orange-500 to-red-500",
            },
            {
              label: "Upcoming",
              value: upcomingSessions.length,
              icon: "📅",
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow animate-pop-in delay-${idx + 1}`}
            >
              <div
                className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sessions Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sessions List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-pop-in delay-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold serif-font text-gray-900">
                  My Sessions
                </h2>
                <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setActiveView("upcoming")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeView === "upcoming"
                        ? "bg-white text-gray-900 shadow-md"
                        : "text-gray-600"
                    }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setActiveView("past")}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeView === "past"
                        ? "bg-white text-gray-900 shadow-md"
                        : "text-gray-600"
                    }`}
                  >
                    Past
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {activeView === "upcoming"
                  ? upcomingSessions.map((session, idx) => (
                      <div
                        key={session.id}
                        className="p-6 bg-linear-to-br from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-200 hover:shadow-lg transition-shadow animate-pop-in"
                        style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={session.tutorAvatar}
                            alt={session.tutor}
                            className="w-16 h-16 rounded-xl border-2 border-white shadow-md"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg text-gray-900">
                                  {session.subject}
                                </h3>
                                <p className="text-gray-600">
                                  with {session.tutor}
                                </p>
                              </div>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  session.status === "confirmed"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {session.status}
                              </span>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
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
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {formatDate(session.date)}
                              </div>
                              <div className="flex items-center gap-2">
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
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {session.time} ({session.duration} min)
                              </div>
                            </div>

                            <div className="flex gap-3">
                              {session.meetingLink && (
                                <button className="px-4 py-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                                  Join Session
                                </button>
                              )}
                              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all text-sm">
                                Reschedule
                              </button>
                              <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all text-sm">
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : pastSessions.map((session, idx) => (
                      <div
                        key={session.id}
                        className="p-6 bg-gray-50 rounded-2xl border border-gray-200 animate-pop-in"
                        style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={session.tutorAvatar}
                            alt={session.tutor}
                            className="w-16 h-16 rounded-xl border-2 border-white"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-bold text-lg text-gray-900">
                                  {session.subject}
                                </h3>
                                <p className="text-gray-600">
                                  with {session.tutor}
                                </p>
                              </div>
                              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                Completed
                              </span>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                              <div>{formatDate(session.date)}</div>
                              <div>
                                {session.time} ({session.duration} min)
                              </div>
                            </div>

                            {!session.reviewed && (
                              <button className="px-4 py-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                                Leave a Review
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-pop-in delay-3">
              <h3 className="font-bold text-lg mb-4 serif-font text-gray-900">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full p-4 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Find Tutors
                </button>
                <button className="w-full p-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  View Calendar
                </button>
              </div>
            </div>

            {/* Recommended Tutors */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 animate-pop-in delay-4">
              <h3 className="font-bold text-lg mb-4 serif-font text-gray-900">
                Recommended for You
              </h3>
              <div className="space-y-4">
                {recommendedTutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={tutor.avatar}
                        alt={tutor.name}
                        className="w-12 h-12 rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {tutor.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {tutor.subject}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {tutor.rating}
                      </div>
                      <div className="font-bold text-violet-600">
                        ${tutor.price}/hr
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-3xl shadow-xl p-6 text-white animate-pop-in delay-4">
              <h3 className="font-bold text-lg mb-4">This Month's Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sessions Goal</span>
                    <span className="font-bold">6/8</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Learning Hours</span>
                    <span className="font-bold">9/12</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: "75%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
