"use client";

import { updateCategoryAction } from "@/actions/admin.actions";
import { useState } from "react";
import { toast } from "sonner";

interface Category {
  category_id: string;
  category_name: string;
}

interface UpdateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category;
  onSuccess?: () => void;
}

export default function UpdateCategoryModal({
  isOpen,
  onClose,
  category,
  onSuccess,
}: UpdateCategoryModalProps) {
  const [categoryName, setCategoryName] = useState(category.category_name);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      category_name: categoryName,
    };

    const result = await updateCategoryAction(
      category.category_id as string,
      data,
    );

    if (!result.error) {
      setIsSubmitting(false);
      onSuccess?.();
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Update Category
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Category ID (Non-editable) */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Category ID
            </label>
            <div className="px-4 py-3 bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                {category.category_id}
              </p>
            </div>
          </div>

          {/* Category Name (Editable) */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
              placeholder="e.g., Mathematics, Science, Arts"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting || !categoryName.trim()}
              className="flex-1 px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Updating..." : "Update Category"}
            </button>
            <button
              type="button"
              onClick={onClose}
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
