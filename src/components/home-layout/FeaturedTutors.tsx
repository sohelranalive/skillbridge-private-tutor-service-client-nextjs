"use client";

import Link from "next/link";

export default function FeaturedTutors({ tutors }: any) {
  return (
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
        <Link href="/tutors">
          <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all">
            View All Tutors →
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tutors.map((tutor: any, idx: any) => (
          <div
            key={tutor.tutor_id}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/50 transition-all transform hover:-translate-y-2 cursor-pointer animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
          >
            <div className="relative mb-4">
              <img
                src={tutor.user?.image}
                alt={tutor.user?.name}
                className="w-20 h-20 rounded-2xl border-2 border-orange-200"
              />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-linear-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                {/* {tutor.ratings}★ */}
                10 ★
              </div>
            </div>

            <h3 className="font-bold text-lg text-gray-900 mb-1">
              {tutor.user?.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {tutor.category?.category_name}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {tutor.subjects?.map((subject: any) => (
                <span
                  key={subject}
                  className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-lg"
                >
                  {subject}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <div className="text-xs text-gray-500">
                  {/* {tutor.reviews} reviews */}
                  <h5>Reviewed By: {`5`} Students</h5>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  ${tutor.price}
                </div>
                <div className="text-xs text-gray-500">per hour</div>
              </div>
            </div>

            <Link href={`/tutors/${tutor.tutor_id}`}>
              <button className="w-full mt-4 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
