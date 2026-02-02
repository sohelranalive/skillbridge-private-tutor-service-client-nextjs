"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const platformStats = {
    totalUsers: 5247,
    activeTutors: 2543,
    activeStudents: 2704,
    totalSessions: 45678,
    revenue: 234567,
    avgRating: 4.8,
  };

  const recentUsers = [
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma.w@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      role: "student",
      joinDate: "2026-01-30",
      status: "active",
      sessions: 3,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      email: "michael.c@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelC",
      role: "tutor",
      joinDate: "2026-01-28",
      status: "active",
      sessions: 12,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ",
      role: "student",
      joinDate: "2026-01-27",
      status: "active",
      sessions: 7,
    },
    {
      id: 4,
      name: "David Park",
      email: "david.p@email.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidP",
      role: "tutor",
      joinDate: "2026-01-25",
      status: "banned",
      sessions: 0,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      student: "Alex Thompson",
      tutor: "Dr. Sarah Chen",
      subject: "Advanced Calculus",
      date: "2026-02-03",
      time: "14:00",
      status: "confirmed",
      amount: 45,
    },
    {
      id: 2,
      student: "Emma Wilson",
      tutor: "Marcus Johnson",
      subject: "Python Programming",
      date: "2026-02-05",
      time: "10:30",
      status: "pending",
      amount: 50,
    },
    {
      id: 3,
      student: "Michael Brown",
      tutor: "Elena Rodriguez",
      subject: "Spanish Conversation",
      date: "2026-02-04",
      time: "16:00",
      status: "confirmed",
      amount: 40,
    },
  ];

  const categories = [
    { id: 1, name: "Mathematics", tutorCount: 342, color: "blue" },
    { id: 2, name: "Science", tutorCount: 298, color: "green" },
    { id: 3, name: "Languages", tutorCount: 456, color: "purple" },
    { id: 4, name: "Arts", tutorCount: 187, color: "pink" },
    { id: 5, name: "Technology", tutorCount: 523, color: "orange" },
    { id: 6, name: "Business", tutorCount: 234, color: "red" },
  ];

  const chartData = [
    { month: "Jan", sessions: 3200, revenue: 15600 },
    { month: "Feb", sessions: 3800, revenue: 18900 },
    { month: "Mar", sessions: 4200, revenue: 21500 },
    { month: "Apr", sessions: 3900, revenue: 19200 },
    { month: "May", sessions: 4500, revenue: 23400 },
    { month: "Jun", sessions: 5100, revenue: 26800 },
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "banned":
        return "bg-red-100 text-red-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "confirmed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="admin-dashboard min-h-screen bg-linear-to-br from-gray-50 via-slate-50 to-zinc-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 flex flex-col">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              SB
            </div>
            <span className="text-xl font-bold heading-font">SkillBridge</span>
          </div>
          <div className="text-sm text-gray-400 ml-13">Admin Panel</div>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { icon: "📊", label: "Overview", tab: "overview" },
            { icon: "👥", label: "Users", tab: "users" },
            { icon: "📅", label: "Bookings", tab: "bookings" },
            { icon: "🏷️", label: "Categories", tab: "categories" },
            { icon: "💰", label: "Revenue", tab: "revenue" },
            { icon: "⚙️", label: "Settings", tab: "settings" },
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === item.tab
                  ? "bg-white text-gray-900"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex items-center gap-3 px-4 py-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
              alt="Admin"
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <div className="font-semibold text-sm">Admin User</div>
              <div className="text-xs text-gray-400">admin@skillbridge.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="mb-8 animate-slide-down">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 heading-font text-gray-900">
                {activeTab === "overview" && "Dashboard Overview"}
                {activeTab === "users" && "User Management"}
                {activeTab === "bookings" && "Booking Management"}
                {activeTab === "categories" && "Category Management"}
              </h1>
              <p className="text-gray-600">
                {activeTab === "overview" &&
                  "Monitor platform performance and key metrics"}
                {activeTab === "users" && "Manage students and tutors"}
                {activeTab === "bookings" && "View and manage all bookings"}
                {activeTab === "categories" &&
                  "Organize and manage subject categories"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                <svg
                  className="w-5 h-5 text-gray-600"
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
              </button>
              <button className="px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                Export Data
              </button>
            </div>
          </div>
        </header>

        {activeTab === "overview" && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                {
                  label: "Total Users",
                  value: platformStats.totalUsers.toLocaleString(),
                  change: "+12%",
                  icon: "👥",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Total Sessions",
                  value: platformStats.totalSessions.toLocaleString(),
                  change: "+8%",
                  icon: "📚",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  label: "Total Revenue",
                  value: `$${platformStats.revenue.toLocaleString()}`,
                  change: "+15%",
                  icon: "💰",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all animate-fade stagger-${idx + 1}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl`}
                    >
                      {stat.icon}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                {
                  label: "Active Tutors",
                  value: platformStats.activeTutors,
                  icon: "👨‍🏫",
                },
                {
                  label: "Active Students",
                  value: platformStats.activeStudents,
                  icon: "👨‍🎓",
                },
                {
                  label: "Avg Rating",
                  value: platformStats.avgRating,
                  icon: "⭐",
                },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 animate-fade stagger-${idx + 4}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{stat.icon}</span>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts & Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6 heading-font text-gray-900">
                  Revenue Trend
                </h2>
                <div className="space-y-3">
                  {chartData.map((data, idx) => (
                    <div key={data.month} className="flex items-center gap-4">
                      <div className="w-12 text-sm font-semibold text-gray-600">
                        {data.month}
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-blue-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3 text-white text-sm font-semibold"
                          style={{ width: `${(data.revenue / 30000) * 100}%` }}
                        >
                          ${(data.revenue / 1000).toFixed(1)}k
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6 heading-font text-gray-900">
                  Recent Bookings
                </h2>
                <div className="space-y-3">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-900">
                          {booking.subject}
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}
                        >
                          {booking.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {booking.student} → {booking.tutor}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-gray-500">
                          {new Date(booking.date).toLocaleDateString()} at{" "}
                          {booking.time}
                        </div>
                        <div className="font-bold text-gray-900">
                          ${booking.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "users" && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                {["all", "students", "tutors", "banned"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === filter
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800">
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      User
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      Role
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      Join Date
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      Sessions
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-lg"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === "tutor"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4 text-gray-900 font-semibold">
                        {user.sessions}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-all">
                            <svg
                              className="w-4 h-4 text-red-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div
                key={category.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all animate-fade stagger-${idx + 1}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center text-${category.color}-600 font-bold text-xl`}
                  >
                    {category.name.charAt(0)}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.tutorCount} tutors
                </p>
                <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  Manage Category
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
