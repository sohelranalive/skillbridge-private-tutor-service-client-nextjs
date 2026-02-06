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

            {/* Stats hard coated, I will update it later, inshaallah */}
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
