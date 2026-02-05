export default function Banner() {
  return (
    <header className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-linear-to-br from-orange-300/20 to-rose-300/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 right-20 w-80 h-80 bg-linear-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Navigation */}
        {/* <nav className="flex items-center justify-between mb-20 animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
                    SB
                  </div>
                  <span
                    className="text-2xl font-bold bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent"
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
              </nav> */}

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              className="text-7xl font-bold leading-tight animate-slide-up stagger-1"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Learn from the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
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
            {/* <div className="relative animate-slide-up stagger-3">
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
                        <button className="px-8 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
                          Search
                        </button>
                      </div>
                    </div>
                  </div> */}
            {/* <SearchBar /> */}

            {/* Stats */}
            <div className="flex items-center gap-8 animate-slide-up stagger-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">Expert Tutors</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-600">Sessions Completed</div>
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
            <div className="relative z-10 bg-linear-to-br from-orange-100 to-rose-100 rounded-3xl p-8 border-2 border-orange-200">
              <img
                src="https://api.dicebear.com/7.x/shapes/svg?seed=learning&backgroundColor=fff7ed"
                alt="Learning illustration"
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-linear-to-br from-orange-300 to-rose-300 rounded-3xl -Z-0" />
          </div>
        </div>
      </div>
    </header>
  );
}
