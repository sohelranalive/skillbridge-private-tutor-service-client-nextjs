"use client";

import { authClient } from "@/lib/auth-client";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface EditUserProfileModalProps {
  isOpenEditProfile: boolean;
  onCloseEditProfile: () => void;
  user: User;
}

export default function EditUserProfileModal({
  isOpenEditProfile,
  onCloseEditProfile,
  user,
}: EditUserProfileModalProps) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    image: user.image || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your API call
    // console.log("Updating user profile:", {
    //   id: user.id,
    //   ...formData,
    // });

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data, error } = await authClient.updateUser({
      ...formData,
    });

    if (!error) {
      toast.success("User Information Updated successful");
      router.refresh();
    }

    setIsSubmitting(false);
    onCloseEditProfile();
  };

  if (!isOpenEditProfile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* no update */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 space-y-3">
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                Email (Cannot be changed)
              </label>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user.email}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Role
                </label>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.role}
                </p>
              </div>
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Status
                </label>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.status}
                </p>
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                Member Since
              </label>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.createdAt &&
                  new Date(user.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>
            </div>
          </div>

          {/* update Fields */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Profile Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={onCloseEditProfile}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
