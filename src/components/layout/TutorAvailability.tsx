"use client";

import {
  deleteAvailabilityAction,
  getTutorAvailabilityAction,
  setAvailabilityAction,
} from "@/actions/tutor.actions";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TutorAvailabilityPage({ tutorId }: any) {
  const [refetch, setReFetch] = useState(false);
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    async function fetchTutorAvailability() {
      const result = await getTutorAvailabilityAction(tutorId);
      setAvailability(result.data.data);
    }
    fetchTutorAvailability();
  }, [refetch, tutorId]);

  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    start_time: "",
    end_time: "",
    subject: "",
  });

  const handleAdd = () => {
    setFormData({ date: "", start_time: "", end_time: "", subject: "" });
    setIsAddModalOpen(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const start_time = `${formData.date}T${formData.start_time}:00.000Z`;
    const end_time = `${formData.date}T${formData.end_time}:00.000Z`;

    const availabilityData = {
      tutor_id: tutorId,
      start_time,
      end_time,
      subject: formData.subject,
    };

    const result = await setAvailabilityAction(availabilityData);

    if (result.error === null) {
      toast.success("You have successfully set your availability");
      setIsAddModalOpen(false);
    }

    setFormData({ date: "", start_time: "", end_time: "", subject: "" });

    setReFetch((prev) => !prev);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this availability slot?")) {
      const result = await deleteAvailabilityAction(id);
      if (result?.data === null) {
        toast.info(
          "Availability has active booking, can't delete or something went wrong",
        );
      } else {
        toast.success("Availability deleted");
      }
    }
    setReFetch((prev) => !prev);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Availability
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your teaching schedule and availability slots
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          + Add Slot
        </button>
      </div>

      {/* Availability Slots */}
      {availability?.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No availability slots added yet
          </p>
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold"
          >
            Add Your First Slot
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {availability?.map((slot: any) => (
            <div
              key={slot.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
                      {slot.subject}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {new Date(slot.start_time).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                    <span className="font-semibold">
                      {formatDateTime(slot.start_time)}
                    </span>
                    <span>→</span>
                    <span className="font-semibold">
                      {formatDateTime(slot.end_time)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(slot.id!)}
                    className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-medium transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Add Availability"
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
                  required
                ></input>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Time Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Start Time
                  </label>
                  <input
                    type="time"
                    value={formData.start_time}
                    onChange={(e) =>
                      setFormData({ ...formData, start_time: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    End Time
                  </label>
                  <input
                    type="time"
                    value={formData.end_time}
                    onChange={(e) =>
                      setFormData({ ...formData, end_time: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-linear-to-r from-orange-500 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Add Slot
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setFormData({
                      date: "",
                      start_time: "",
                      end_time: "",
                      subject: "",
                    });
                  }}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
