import { getSessionAction } from "@/actions/user.actions";
import { studentService } from "@/service/student.service";
import { userService } from "@/service/user.service";

export default async function StudentDashboardHome() {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  const allSessions = await studentService.getBookingByStudentId(user.id);
  const sessions = allSessions.data?.data;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getDuration = (a: any, b: any) => {
    const start: any = new Date(a);
    const end: any = new Date(b);

    const diffMs = Math.abs(end - start);

    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} Hours, ${minutes || 0} Minutes`;
  };

  const sessionStatus = (date: any) => {
    const inputDate = new Date(date);
    const now = new Date();
    return inputDate < now ? "past" : "upcoming";
  };

  return (
    <div className="space-y-4">
      {sessions?.map((session: any, idx: any) => (
        <div
          key={session.booking_id}
          className="p-6 bg-linear-to-br from-violet-50 to-yellow-100 rounded-2xl border border-violet-200 hover:shadow-lg transition-shadow animate-pop-in"
          style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
        >
          <div className="flex items-start gap-4">
            <img
              src={session.tutor.user.image}
              alt={session.tutor.user.name}
              className="w-16 h-16 rounded-xl border-2 border-white shadow-md"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Subject: {session?.availability?.subject}
                  </h3>
                  <p className="text-gray-600">
                    with {session.tutor.user.name}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    session.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {sessionStatus(session.start_time)}
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(session.start_time)}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {getDuration(session.start_time, session.end_time)}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                  <a
                    href="https://meet.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    Join Session
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
