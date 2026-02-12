export const dynamic = "force-dynamic";

import { getSessionAction } from "@/actions/user.actions";
import LogoutButton from "@/components/authentications/LogoutButton";
import { authClient } from "@/lib/auth-client";
import { userService } from "@/service/user.service";
import Link from "next/link";
import { toast } from "sonner";

export default async function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserSignedIn = await getSessionAction();
  const user = isUserSignedIn?.data?.user;

  return (
    <div className="student-dashboard min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
              SB
            </div>
            <span className="text-2xl font-bold serif-font bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              <Link href="/">SkillBridge</Link>
            </span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-linear-to-br from-violet-100 to-fuchsia-100 rounded-2xl">
            <img
              src={user?.image}
              alt={user?.name}
              className="w-14 h-14 rounded-xl border-2 border-white"
            />
            <div>
              <div className="font-bold text-gray-900">{user?.name}</div>
              <div className="text-sm text-gray-600">{user?.role}</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/student-dashboard"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-gray-600 hover:bg-gray-300"
          >
            <span className="text-xl">📅</span>
            My Session
          </Link>
          <Link
            href="/student-dashboard/review"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-gray-600 hover:bg-gray-300"
          >
            <span className="text-xl">📝</span>
            My Reviews
          </Link>
          <Link
            href="/tutors"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-gray-600 hover:bg-gray-300"
          >
            <span className="text-xl">🔍</span>
            Find Tutor
          </Link>
          <Link
            href="/profile"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-gray-600 hover:bg-gray-300"
          >
            <span className="text-xl">👤</span>
            My Profile
          </Link>
        </nav>
        <LogoutButton />
        {/*  */}
      </aside>
      <main className="ml-72 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 serif-font text-gray-900">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Ready to continue your learning journey?
          </p>
        </header>
        <div className="grid">{children}</div>
      </main>
    </div>
  );
}
