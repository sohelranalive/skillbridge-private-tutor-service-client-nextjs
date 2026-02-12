"use client";

import {
  deleteCategoryAction,
  getCategoryAction,
  updateUserStatusAction,
} from "@/actions/admin.actions";
import AddCategoryModal from "@/components/layout/modal/AddCategory";
import UpdateCategoryModal from "@/components/layout/modal/UpdateCategory";
import { Status } from "@/constants/status";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [fetchCategory, setFetchCategory] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    async function fetchAllCategory() {
      const result = await getCategoryAction();
      setCategories(result.data.data);
    }
    fetchAllCategory();
  }, [fetchCategory]);

  const handleEditCategory = async (category: any) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const handleDeleteCategory = async (id: string) => {
    if (confirm("Are you sure you want to banned the user?")) {
      const result = await deleteCategoryAction(id);
      if (!result?.error) {
        setFetchCategory((prev) => !prev);
        toast.success("User has been deleted");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Table */}

      <button
        onClick={() => setIsAddModalOpen(true)}
        className="px-4 py-2 border-2 border-gray-200 text-gray-700 hover:border-orange-500 rounded-xl font-medium my-4 mx-4"
      >
        Add New Category
      </button>

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={() => {
          setFetchCategory((prev) => !prev);
          toast.success("Category added successfully!");
        }}
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Category Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Category Id
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories?.map((category: any) => (
              <tr
                key={category.category_id}
                className="hover:bg-gray-300 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-6 py-4">
                  {category.category_name} <br />
                </td>
                <td className="px-6 py-4">{category.category_id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDeleteCategory(category.category_id)}
                      className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      Delete
                    </button>

                    {selectedCategory && (
                      <UpdateCategoryModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        category={selectedCategory}
                        onSuccess={() => {
                          setFetchCategory((prev) => !prev);
                          toast.success("Category info updated successfully!");
                        }}
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
