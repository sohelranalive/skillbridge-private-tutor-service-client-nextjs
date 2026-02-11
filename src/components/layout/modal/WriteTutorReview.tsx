"use client";

import { writeReviewAction } from "@/actions/student.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorId: string;
  tutorName: string;
  studentId: string;
}

export default function WriteReviewModal({
  isOpen,
  onClose,
  tutorId,
  tutorName,
  studentId,
}: WriteReviewModalProps) {
  const router = useRouter();

  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reviewData = {
      tutor_id: tutorId,
      student_id: studentId,
      reviewText: reviewText,
      ratings: rating,
    };

    const reviewCreation = await writeReviewAction(reviewData);

    if (reviewCreation.data.message === "Data creation successfully") {
      toast.success("Your feedback saved successfully");

      setIsSubmitting(false);
      setReviewText("");
      setRating(5);
      onClose();

      return router.push("/student-dashboard");
    }

    toast.dismiss("Something went wrong");
    return router.push("/");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Write a Review
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Share your experience with{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {tutorName}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl transition-colors ${
                    star <= rating
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Your Review
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none transition-all resize-none"
              rows={5}
              placeholder="Share your experience with this tutor..."
              required
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !reviewText.trim()}
              className="flex-1 px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
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
