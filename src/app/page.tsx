"use client";
import { useState } from "react";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Subjects", icon: "📚" },
    { id: "math", name: "Mathematics", icon: "🔢" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "languages", name: "Languages", icon: "🗣️" },
    { id: "arts", name: "Arts", icon: "🎨" },
    { id: "tech", name: "Technology", icon: "💻" },
  ];

  const featuredTutors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      subject: "Advanced Mathematics",
      rating: 4.9,
      reviews: 127,
      price: 45,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      sessions: 340,
      expertise: ["Calculus", "Linear Algebra", "Statistics"],
    },
    {
      id: 2,
      name: "Marcus Johnson",
      subject: "Computer Science",
      rating: 4.8,
      reviews: 89,
      price: 50,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      sessions: 215,
      expertise: ["Python", "Web Dev", "Algorithms"],
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      subject: "Spanish Literature",
      rating: 5.0,
      reviews: 156,
      price: 40,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      sessions: 428,
      expertise: ["Conversation", "Grammar", "Literature"],
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      subject: "Physics",
      rating: 4.7,
      reviews: 94,
      price: 48,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      sessions: 267,
      expertise: ["Mechanics", "Quantum", "Thermodynamics"],
    },
  ];

  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-rose-300/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-20 animate-slide-up">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
                SB
              </div>
              <span
                className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                SkillBridge
              </span>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Find Tutors
              </button>
              <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Become a Tutor
              </button>
              <button className="px-5 py-2.5 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105">
                Sign In
              </button>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1
                className="text-7xl font-bold leading-tight animate-slide-up stagger-1"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Learn from the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    world's best
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C100 2 200 2 298 10"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                tutors
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed animate-slide-up stagger-2">
                Connect with expert educators who transform learning into an
                inspiring journey. From mathematics to music, coding to creative
                writing.
              </p>

              {/* Search Bar */}
              <div className="relative animate-slide-up stagger-3">
                <div className="bg-white rounded-2xl shadow-2xl shadow-orange-200/50 p-3 border-2 border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 px-4">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                      <input
                        type="text"
                        placeholder="Search for tutors, subjects, or skills..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                      />
                    </div>
                    <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 animate-slide-up stagger-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">Expert Tutors</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    50,000+
                  </div>
                  <div className="text-sm text-gray-600">
                    Sessions Completed
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-scale-in stagger-2">
              <div className="relative z-10 bg-gradient-to-br from-orange-100 to-rose-100 rounded-3xl p-8 border-2 border-orange-200">
                <img
                  src="https://api.dicebear.com/7.x/shapes/svg?seed=learning&backgroundColor=fff7ed"
                  alt="Learning illustration"
                  className="w-full h-96 object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-orange-300 to-rose-300 rounded-3xl -z-0" />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
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
                  ? "bg-gradient-to-br from-orange-500 to-rose-600 border-orange-600 text-white shadow-xl shadow-orange-300"
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

      {/* Featured Tutors */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Featured Tutors
            </h2>
            <p className="text-gray-600">
              Top-rated educators handpicked for you
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all">
            View All Tutors →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTutors.map((tutor, idx) => (
            <div
              key={tutor.id}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/50 transition-all transform hover:-translate-y-2 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <div className="relative mb-4">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-20 h-20 rounded-2xl border-2 border-orange-200"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                  {tutor.rating}★
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-1">
                {tutor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{tutor.subject}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {tutor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <div className="text-xs text-gray-500">
                    {tutor.reviews} reviews
                  </div>
                  <div className="text-xs text-gray-500">
                    {tutor.sessions} sessions
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${tutor.price}
                  </div>
                  <div className="text-xs text-gray-500">per hour</div>
                </div>
              </div>

              <button className="w-full mt-4 py-3 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-orange-500 via-rose-600 to-pink-600 rounded-3xl p-16 text-center text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Ready to start teaching?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Share your expertise with thousands of eager learners. Set your
              own schedule, rates, and make a real impact.
            </p>
            <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
              Become a Tutor Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
