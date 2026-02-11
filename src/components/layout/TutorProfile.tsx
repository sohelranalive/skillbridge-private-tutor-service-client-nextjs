"use client";

import {
  createBookingAction,
  getExistingBookingAction,
} from "@/actions/student.actions";
import { getSessionAction } from "@/actions/user.actions";
import { Roles } from "@/constants/roles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { AvailabilitySlot } from "@/types";
import { studentService } from "@/service/student.service";
import WriteReviewModal from "./modal/WriteTutorReview";
import { Status } from "@/constants/status";

export default function TutorProfile({ tutor }: any) {
  const {
    about,
    availability,
    category,
    education,
    isFeatured,
    isVerified,
    language,
    price,
    reviews,
    subjects,
    tutor_category,
    tutor_id,
    user,
  } = tutor;

  const avgRating =
    reviews.reduce((sum: any, review: any) => sum + review.ratings, 0) /
    tutor?.reviews.length;

  const [activeTab, setActiveTab] = useState("about");
  const [studentId, setStudentId] = useState("");

  const [selectedDate, setSelectedDate] = useState<AvailabilitySlot | null>(
    null,
  );

  const router = useRouter();

  const handleOnBooked = async () => {
    const { data, error } = await getSessionAction();
    if (!data) {
      return router.push("/login");
    }
    if (!(data.user.role === Roles.student)) {
      return toast.info("Only student is allowed to book sessions");
    }

    if (!(data.user.status === Status.active)) {
      return toast.info("You're Banned ! try to contract to our helpline");
    }

    const isAlreadyBooked = await getExistingBookingAction({
      studentId: data?.user?.id,
      availabilityId: selectedDate?.id,
    });

    if (isAlreadyBooked.data.data) {
      toast.info("You have already booked this session");
      return router.push("/student-dashboard");
    }

    const bookingData = {
      start_time: selectedDate?.start_time,
      end_time: selectedDate?.end_time,
      student_id: data?.user?.id,
      tutor_id: tutor_id,
      availability_id: selectedDate?.id,
    };

    const bookingCreation = await createBookingAction(bookingData);

    if (bookingCreation.data.message === "Data creation successfully") {
      toast.success("You have booked the session successfully");
      return router.push("/student-dashboard");
    }

    toast.dismiss("Something went wrong");
    return router.push("/");
  };

  const [openReviewModal, setOpenReviewModal] = useState(false);

  const handleWriteReview = async () => {
    const { data, error } = await getSessionAction();
    if (!data) {
      toast.info("Need to sign in to write review");
      return router.push("/login");
    }
    if (!(data.user.role === Roles.student)) {
      return toast.info("Only student is allowed to book sessions");
    }
    setStudentId(data?.user?.id);
    return setOpenReviewModal(true);
  };

  return (
    <div className="tutor-profile min-h-screen">
      {/* Header back to search button */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/tutors">
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              ← Back to Search
            </button>
          </Link>
          <button
            onClick={() => handleWriteReview()}
            className="px-4 py-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-orange-500 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 rounded-xl font-medium transition-all"
          >
            Write Review
          </button>
        </div>
      </header>

      <WriteReviewModal
        isOpen={openReviewModal}
        onClose={() => setOpenReviewModal(false)}
        tutorId={tutor_id}
        tutorName={user.name}
        studentId={studentId}
      />

      {/* Main Content starts from here*/}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={user?.image}
                    alt={user?.name}
                    className="w-32 h-32 rounded-2xl border-4 border-indigo-100"
                  />
                  {isVerified && (
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
                        {user?.name}
                      </h1>
                      <p className="text-lg text-gray-600">
                        {category?.category_name}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-indigo-600">
                        ${price}
                      </div>
                      <div className="text-sm text-gray-500">per session</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(avgRating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {subjects?.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 animate-fade-in stagger-2">
              <div className="border-b border-gray-200">
                <div className="flex gap-8 px-8 pt-6">
                  {["about", "reviews"].map((tab) => (
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
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {about}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Education
                      </h3>
                      <div className="space-y-3">
                        {education?.map((degree: string) => (
                          <span
                            key={degree}
                            className="px-3 py-1.5 mx-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                          >
                            {degree}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">
                        Languages
                      </h3>
                      <div className="flex gap-2">
                        {language?.map((lang: string) => (
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
                    {reviews?.map((review: any, idx: any) => (
                      <div
                        key={review.id}
                        className="p-6 bg-gray-50 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.student.image}
                            alt={review.student.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-gray-900">
                                  {review.student.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {new Date(
                                    review.createdAt,
                                  ).toLocaleDateString("en-US", {
                                    month: "numeric",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < review.ratings ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {review.reviewText}
                            </p>
                          </div>
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

              {availability.length && user.status === Status.active ? (
                <div className="space-y-6">
                  <div className="space-y-3">
                    {availability?.map((slot: any) => (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedDate(slot)}
                        className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${
                          selectedDate?.id === slot.id
                            ? "bg-linear-to-r from-indigo-600 to-purple-600 border-indigo-600 shadow-lg shadow-indigo-300 dark:shadow-indigo-900/50"
                            : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div>{slot.subject}</div>
                          {/* Date */}
                          <div
                            className={`text-sm font-medium ${
                              selectedDate?.id === slot.id
                                ? "text-indigo-100"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {new Date(slot.start_time).toLocaleDateString(
                              "en-US",
                              {
                                month: "numeric",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </div>

                          {/* Time */}
                          <div
                            className={`text-lg font-bold ${
                              selectedDate?.id === slot.id
                                ? "text-white"
                                : "text-gray-900 dark:text-white"
                            }`}
                          >
                            {new Date(slot.start_time).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                            {" - "}
                            {new Date(slot.end_time).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </div>

                          {/* Checkmark */}
                          {selectedDate?.id === slot.id && (
                            <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-indigo-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={selectedDate === null}
                    onClick={() => handleOnBooked()}
                    className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3>Tutor is either banned or has no session currently</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
