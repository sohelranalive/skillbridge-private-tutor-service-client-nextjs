"use client";

import {
  getUsersAction,
  updateUserStatusAction,
} from "@/actions/admin.actions";
import { Roles } from "@/constants/roles";
import { Status } from "@/constants/status";
import { authClient } from "@/lib/auth-client";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function StudentPage() {
  const [students, setStudents] = useState([]);
  const [fetchStudent, setFetchStudent] = useState(true);

  useEffect(() => {
    async function fetchAllStudent() {
      const result = await getUsersAction();
      const allStudents = result.data.data.filter(
        (student: any) => student.role === Roles.student,
      );
      setStudents(allStudents);
    }
    fetchAllStudent();
  }, [fetchStudent]);

  const handleActive = async (id: string) => {
    if (confirm("Are you sure you want to active the user?")) {
      const data = {
        status: Status.active,
      };

      const result = await updateUserStatusAction(id, data as User);
      if (!result.error) {
        setFetchStudent((prev) => !prev);
        toast.success("User has been activated");
      }
    }
  };

  const handleBanned = async (id: string) => {
    if (confirm("Are you sure you want to banned the user?")) {
      const data = {
        status: Status.banned,
      };

      const result = await updateUserStatusAction(id, data as User);
      if (!result.error) {
        setFetchStudent((prev) => !prev);
        toast.success("User has been banned");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Name & Id
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Member Since
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {students?.map((student: any) => (
              <tr
                key={student.id}
                className="hover:bg-gray-300 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-6 py-4">
                  {student.name} <br />
                  <br />
                  {student.id}
                </td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.phone ?? "N/A"}</td>
                <td className="px-6 py-4">
                  {new Date(student.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">{student.status}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {student.status === Status.banned ? (
                      <button
                        onClick={() => handleActive(student?.id)}
                        className="px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                      >
                        ACTIVE
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBanned(student?.id)}
                        className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        BAN
                      </button>
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
