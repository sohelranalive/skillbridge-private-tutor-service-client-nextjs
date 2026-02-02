"use client";

import { useState } from "react";

export default function TutorProfile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState("about");

  const tutor = {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Advanced Mathematics Expert",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 4.9,
    totalReviews: 127,
    totalSessions: 340,
    hourlyRate: 45,
    responseTime: "< 2 hours",
    verified: true,
    expertise: [
      "Calculus",
      "Linear Algebra",
      "Statistics",
      "Differential Equations",
      "Probability Theory",
    ],
    languages: ["English", "Mandarin"],
    education: [
      {
        degree: "PhD in Mathematics",
        institution: "Stanford University",
        year: "2015",
      },
      { degree: "MS in Applied Mathematics", institution: "MIT", year: "2010" },
    ],
    experience: "10+ years teaching experience",
    about: `I'm passionate about making complex mathematical concepts accessible and enjoyable. My teaching philosophy centers on building strong foundations and fostering critical thinking skills. Whether you're struggling with basic algebra or diving into advanced calculus, I tailor my approach to your learning style and goals.`,
    teachingStyle: "Interactive problem-solving with real-world applications",
    availability: [
      { day: "Monday", slots: ["09:00", "10:30", "14:00", "16:00"] },
      { day: "Tuesday", slots: ["09:00", "11:00", "15:00"] },
      { day: "Wednesday", slots: ["10:00", "14:00", "16:30"] },
      { day: "Thursday", slots: ["09:00", "10:30", "14:00", "15:30"] },
      { day: "Friday", slots: ["09:00", "13:00", "15:00"] },
    ],
  };

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

  return (
    <div className="tutor-profile min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-32 h-32 rounded-2xl border-4 border-indigo-100"
                  />
                  {tutor.verified && (
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
                        {tutor.name}
                      </h1>
                      <p className="text-lg text-gray-600">{tutor.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-indigo-600">
                        ${tutor.hourlyRate}
                      </div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(tutor.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">
                        {tutor.rating}
                      </span>
                      <span className="text-gray-500">
                        ({tutor.totalReviews} reviews)
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-600">
                      {tutor.totalSessions} sessions completed
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tutor.expertise.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {tutor.expertise.length > 4 && (
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        +{tutor.expertise.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 animate-fade-in stagger-1">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 animate-fade-in stagger-2">
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-8 pt-6">
                  {["about", "reviews", "availability"].map((tab) => (
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
                      <p className="text-gray-700 leading-relaxed">
                        {tutor.about}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Education
                      </h3>
                      <div className="space-y-3">
                        {tutor.education.map((edu, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2" />
                            <div>
                              <div className="font-semibold text-gray-900">
                                {edu.degree}
                              </div>
                              <div className="text-sm text-gray-600">
                                {edu.institution} • {edu.year}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Teaching Style
                      </h3>
                      <p className="text-gray-700">{tutor.teachingStyle}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Languages
                      </h3>
                      <div className="flex gap-2">
                        {tutor.languages.map((lang) => (
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
                    {reviews.map((review, idx) => (
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
                    ))}
                  </div>
                )}

                {activeTab === "availability" && (
                  <div className="space-y-4 animate-slide-in">
                    {tutor.availability.map((day, idx) => (
                      <div
                        key={day.day}
                        className="animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                      >
                        <div className="font-semibold text-gray-900 mb-3">
                          {day.day}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {/* {day.slots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                selectedTime === slot
                                  ? "bg-indigo-600 text-white shadow-lg"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                            >
                              {slot}
                            </button>
                          ))} */}
                        </div>
                      </div>
                    ))}
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
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Duration
                  </label>
                  <div className="space-y-2">
                    {[30, 60, 90].map((duration) => (
                      <button
                        key={duration}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-900">
                            {duration} minutes
                          </span>
                          <span className="text-indigo-600 font-bold">
                            ${((tutor.hourlyRate * duration) / 60).toFixed(0)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Session fee</span>
                    <span className="font-semibold text-gray-900">
                      ${tutor.hourlyRate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Platform fee</span>
                    <span className="font-semibold text-gray-900">$5</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-2xl text-indigo-600">
                      ${tutor.hourlyRate + 5}
                    </span>
                  </div>
                </div>

                <button className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Book Now
                </button>

                <button className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Send Message
                </button>

                <div className="pt-4 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500">
                    💬 Average response time: {tutor.responseTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
