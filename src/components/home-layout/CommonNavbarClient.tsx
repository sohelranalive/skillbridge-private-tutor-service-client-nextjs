"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export type CommonNavbarUser = {
  isSignedIn: boolean;
  name?: string;
  avatarUrl?: string;
};

type Props = {
  brand?: string;
  user: CommonNavbarUser;
};

export default function CommonNavbarClient({
  brand = "SkillBridge",
  user,
}: Props) {
  return (
    <header className="w-full bg-transparent border-b border-orange-100/60">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo side */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transform -rotate-6">
            SB
          </div>
          <span
            className="text-2xl font-bold bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            {brand}
          </span>
        </Link>

        {/* Menu Side */}
        <div className="flex items-center gap-6">
          <Link
            href="/tutors"
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Find Tutors
          </Link>

          {/* Menu side: Conditional rendering */}
          {!user.isSignedIn ? (
            <>
              <Link
                href="/register"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Become a Member
              </Link>
              <Link
                href="/login"
                className="px-5 py-2.5 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                My Dashboard
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-3 px-3 py-2 bg-white/70 backdrop-blur border border-orange-100 rounded-full hover:bg-white transition"
                title={user.name ? user.name : "Profile"}
              >
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-orange-200">
                  <Image
                    src={
                      user.avatarUrl
                        ? user.avatarUrl
                        : "https://api.dicebear.com/7.x/avataaars/svg?seed=SkillBridgeUser"
                    }
                    alt={user.name ? user.name : "Profile"}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800 hidden sm:block">
                  {user.name ? user.name : "Profile"}
                </span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
