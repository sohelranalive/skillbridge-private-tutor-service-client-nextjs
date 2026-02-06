import Link from "next/link";

export default function Footer() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-linear-to-br from-orange-500 via-rose-600 to-pink-600 rounded-3xl p-12 md:p-16 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full animate-float" />
          <div
            className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white rounded-full"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10">
          {/* Main Content */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Join Our Learning Community
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Whether you want to learn something new or share your expertise,
              SkillBridge connects passionate people worldwide
            </p>
          </div>

          {/* Two Column CTA */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* For Students */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">👨‍🎓</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Start Learning
              </h3>
              <p className="text-white/80 mb-6">
                Find expert tutors in any subject and achieve your learning
                goals
              </p>
              <Link href="/register">
                <button className="w-full px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:shadow-2xl transition-all transform hover:scale-105">
                  Find a Tutor
                </button>
              </Link>
            </div>

            {/* For Tutors */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Start Teaching
              </h3>
              <p className="text-white/80 mb-6">
                Share your knowledge, set your own schedule, and earn money
              </p>
              <Link href="/register">
                <button className="w-full px-6 py-3 bg-white text-rose-600 rounded-full font-bold hover:shadow-2xl transition-all transform hover:scale-105">
                  Become a Tutor
                </button>
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2,500+</div>
              <div className="text-white/80 text-sm">Expert Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/80 text-sm">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9★</div>
              <div className="text-white/80 text-sm">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
