"use client";

import { getTutorByUserIdAction } from "@/actions/tutor.actions";
import { Roles } from "@/constants/roles";
import { authClient } from "@/lib/auth-client";
import { TutorProfile } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import EditUserProfileModal from "./modal/EditUserProfile";
import EditTutorProfileModal from "./modal/EditTutorProfile";

export default function UserProfile({ user }: any) {
  const [isTutor, setIsTutor] = useState(false);
  const [tutor, setTutor] = useState<TutorProfile>({});

  useEffect(() => {
    if (user.role !== Roles.tutor) {
      return;
    }
    async function fetchUser() {
      const result = await getTutorByUserIdAction(user?.id as string);
      setTutor(result.data?.data);
      setIsTutor(true);
    }
    fetchUser();
  }, [user.role]);

  // console.log(tutor);
  // console.log(isTutor);
  const handleLogout = async () => {
    const toastId = toast.loading("Logging Out");
    const { data, error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isTutorEditModalOpen, setIsTutorEditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-gray-900 dark:via-orange-950/20 dark:to-rose-950/20">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-32 bg-linear-to-r from-orange-500 via-rose-600 to-pink-600">
            <div className="absolute -bottom-16 left-8">
              <img
                src={user?.image}
                alt={user?.name}
                className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 bg-white shadow-xl"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {user?.name}
                </h1>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
                    {user?.role}
                  </span>
                  {isTutor && (
                    <span className="px-3 py-1 bg-blue-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
                      {tutor.isVerified
                        ? "Happy Teaching"
                        : "Verify Yourself & Complete your profile !"}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Edit Profile
                </button>

                <EditUserProfileModal
                  isOpenEditProfile={isEditModalOpen}
                  onCloseEditProfile={() => setIsEditModalOpen(false)}
                  user={user}
                />

                {isTutor && (
                  <button
                    onClick={() => setIsTutorEditModalOpen(true)}
                    className="px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Update Tutor Profile
                  </button>
                )}

                <EditTutorProfileModal
                  isOpenEditTutor={isTutorEditModalOpen}
                  onCloseEditTutor={() => setIsTutorEditModalOpen(false)}
                  tutor={tutor}
                />

                {/* <Link href="/student-dashboard">
                  <button className="px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all">
                    Dashboard
                  </button>
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-white dark:bg-gray-700 border-2 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Profile Info Grid */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Basic Information
              </h2>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                  Email Address
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {user?.email}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                  Phone
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {user?.phone ? user.phone : "N/A"}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                  Member Since
                </label>
                <p className="text-gray-900 dark:text-white font-medium">
                  {new Date(user?.createdAt).toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
