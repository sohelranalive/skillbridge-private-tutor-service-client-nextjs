import { getSessionAction } from "@/actions/user.actions";
import { tutorService } from "@/service/tutor.service";
import { userService } from "@/service/user.service";

export default async function StudentsPage() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  const tutor = await tutorService.getTutorByUserId(user.id);
  const tutorId = tutor.data.data.tutor_id;

  const allSessions = await tutorService.getBookingByTutorId(tutorId);
  const sessions = allSessions.data?.data;

  const allStudents = Array.from(
    new Map(
      sessions?.map((booking: any) => [booking.student.id, booking.student]),
    ).values(),
  );

  console.log(allStudents);

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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {allStudents?.map((student: any) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
