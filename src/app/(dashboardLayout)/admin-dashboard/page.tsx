import { userService } from "@/service/user.service";
import Link from "next/link";

export default async function AdminDashboardHome() {
  const isUserSignedIn = await userService.getSession();
  const user = isUserSignedIn?.data?.user;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {/* {upcomingSessions.map((session, idx) => (
                    <div
                      key={session.id}
                      className="p-6 bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-200 hover:shadow-lg transition-shadow animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={session.tutorAvatar}
                          alt={session.tutor}
                          className="w-16 h-16 rounded-xl border-2 border-white shadow-md"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-gray-900">{session.subject}</h3>
                              <p className="text-gray-600">with {session.tutor}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              session.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {session.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(session.date)}
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {session.time} ({session.duration} min)
                            </div>
                          </div>

                          <div className="flex gap-3">
                            {session.meetingLink && (
                              <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                                Join Session
                              </button>
                            )}
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all text-sm">
                              Reschedule
                            </button>
                            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all text-sm">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
      )
    } */}
      <h1>Session will be mapped here</h1>
    </div>
  );
}
