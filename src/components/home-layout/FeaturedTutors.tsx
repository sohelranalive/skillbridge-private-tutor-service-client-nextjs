import { getTutors } from "@/actions/tutor.actions";
import { tutorService } from "@/service/tutor.service";
import { TutorProfile } from "@/types";
import Link from "next/link";

interface FeaturedTutorsProps {
  tutors: TutorProfile;
}

export default function FeaturedTutors({ tutors }: FeaturedTutorsProps) {
  // const { data } = await tutorService.getTutors(
  //   {
  //     isFeatured: false,
  //     search: "",
  //     subject: "",
  //     ratings: 0,
  //     price: 0,
  //     category: "",
  //   },
  //   {
  //     cache: "no-store",
  //   },
  // );

  //   const data = getTutors(
  //     {
  //       isFeatured: false,
  //       search: "",
  //       subject: "",
  //       ratings: 0,
  //       price: 0,
  //       category: "",
  //     },
  //     {
  //       cache: "no-store",
  //     },
  //   );

  // console.log("Inside Featured Tutors:", tutors);

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
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-linear-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-xs font-bold">
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

            <button className="w-full mt-4 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-300 transition-all transform hover:scale-105">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
