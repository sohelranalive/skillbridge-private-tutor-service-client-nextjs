"use client";

import { getCategoryAction } from "@/actions/admin.actions";
import { updateTutorByIdAction } from "@/actions/tutor.actions";
import { TutorProfile } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface EditTutorProfileModalProps {
  isOpenEditTutor: boolean;
  onCloseEditTutor: () => void;
  tutor: TutorProfile;
}

export default function EditTutorProfileModal({
  isOpenEditTutor,
  onCloseEditTutor,
  tutor,
}: EditTutorProfileModalProps) {
  const [formData, setFormData] = useState<TutorProfile>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (tutor) {
      setFormData(tutor);
    }
  }, [tutor]);

  useEffect(() => {
    async function fetchCategory() {
      const result = await getCategoryAction();
      setCategories(result.data.data);
    }
    fetchCategory();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      tutor_category: formData.tutor_category,
      subjects: formData.subjects
        ?.split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      price: formData.price,
      about: formData.about,
      education: formData.education
        ?.split(",")
        .map((e) => e.trim())
        .filter(Boolean),
      language: formData.language
        ?.split(",")
        .map((l) => l.trim())
        .filter(Boolean),
      isVerified: formData.isVerified,
    };

    const result = await updateTutorByIdAction(
      formData.tutor_id as string,
      data as TutorProfile,
    );

    if (!result.error) {
      toast.success("Tutor Information updated");
    }

    setIsSubmitting(false);
    onCloseEditTutor();
  };

  if (!isOpenEditTutor) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6 border border-gray-200 dark:border-gray-700 my-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Update Tutor Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat: any) => (
                <label
                  key={cat.category_id}
                  className={`flex items-center gap-3 p-3 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.tutor_category === cat.category_id
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.category_id}
                    checked={formData.tutor_category === cat.category_id}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tutor_category: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <span
                    className={`text-sm font-medium ${
                      formData.tutor_category === cat.category_id
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {cat.category_name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* Subjects */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Subjects (comma-separated)
            </label>
            <input
              type="text"
              value={formData.subjects}
              onChange={(e) =>
                setFormData({ ...formData, subjects: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="e.g., Calculus, Algebra, Physics"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Price per Hour ($)
            </label>
            <input
              type="number"
              value={formData.price ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, price: parseInt(e.target.value) })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="50"
              min="0"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              About
            </label>
            <textarea
              value={formData.about ?? ""}
              onChange={(e) =>
                setFormData({ ...formData, about: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all resize-none"
              rows={2}
              placeholder="Tell students about yourself..."
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Education (comma-separated)
            </label>
            <input
              type="text"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="e.g., PhD Mathematics MIT, MSc Physics Stanford"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Languages (comma-separated)
            </label>
            <input
              type="text"
              value={formData.language}
              onChange={(e) =>
                setFormData({ ...formData, language: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="e.g., English, Spanish, Mandarin"
            />
          </div>
          {/* Verified */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isVerified}
                onChange={(e) =>
                  setFormData({ ...formData, isVerified: e.target.checked })
                }
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 text-orange-600 focus:ring-orange-500"
              />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Verified Tutor
              </span>
            </label>
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
              onClick={onCloseEditTutor}
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
