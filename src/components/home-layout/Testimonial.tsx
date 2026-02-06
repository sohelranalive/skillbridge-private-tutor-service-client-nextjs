"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TestimonialPage({ reviews }: any) {
  //   const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data - replace with your API data later
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Computer Science Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      text: "SkillBridge transformed my understanding of calculus. My tutor was patient, knowledgeable, and made complex concepts easy to grasp. I went from struggling with derivatives to acing my finals!",
      subject: "Mathematics",
      sessionsCompleted: 24,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "High School Senior",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      text: "Learning Spanish has never been this fun! My tutor incorporates real-world conversations and cultural insights. I'm now confident speaking with native speakers.",
      subject: "Spanish",
      sessionsCompleted: 36,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "College Freshman",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      text: "The chemistry tutor I found here is amazing! They explain everything with practical examples and make sure I understand before moving forward. My grades improved significantly.",
      subject: "Chemistry",
      sessionsCompleted: 18,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Career Switcher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      text: "Switching to web development seemed impossible until I found my coding tutor on SkillBridge. Now I'm building full-stack applications and landed my dream job!",
      subject: "Web Development",
      sessionsCompleted: 42,
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Marketing Professional",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      text: "Business Analytics was always intimidating, but my tutor made it accessible and practical. I now use data to drive decisions in my marketing campaigns.",
      subject: "Business Analytics",
      sessionsCompleted: 20,
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Music Enthusiast",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 5,
      text: "My piano tutor is incredibly talented and patient. I've learned more in 3 months than I did in years of trying to teach myself. Highly recommend!",
      subject: "Piano",
      sessionsCompleted: 28,
    },
  ];

  //   // Auto-rotate carousel every 5 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   // Get 3 testimonials to display (current + next 2, with wrap-around)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative max-w-7xl mx-auto px-6 my-12">
      {/* Section Header */}
      <div className="text-center mb-16 animate-slide-up">
        {/* <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
              STUDENT SUCCESS STORIES
            </span>
          </div> */}
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Hear From Our Students
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Join thousands of students who've achieved their learning goals with
          expert tutors
        </p>
      </div>

      {/* Stats Bar */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up"
        style={{ animationDelay: "0.1s", opacity: 0 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            4.9/5
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Average Rating
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            10K+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Happy Students
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            50K+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Sessions Completed
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            98%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Success Rate
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((testimonial: any, idx: any) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(testimonial.ratings) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <svg
                  className="absolute -top-2 -left-2 w-8 h-8 text-orange-200 dark:text-orange-900/50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                  "{testimonial.reviewText}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <img
                  src={testimonial.student.image}
                  alt={testimonial.student.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-200 dark:border-orange-800"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.student.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.student.role}
                  </p>
                </div>
              </div>

              {/* Subject Badge */}
              {/* <div className="mt-4 flex items-center justify-between">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-xs font-semibold">
                  {testimonial.subject}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.sessionsCompleted} sessions
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div
        className="text-center mt-12 animate-slide-up"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      >
        <Link href="/reviews">
          <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-300 dark:shadow-orange-900/50 hover:shadow-xl transition-all transform hover:scale-105">
            Read All Success Story →
          </button>
        </Link>
      </div>
    </div>
  );
}
