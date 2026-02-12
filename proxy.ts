import { Roles } from "@/constants/roles";
import { userService } from "@/service/user.service";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for verify-email route
  if (pathname.startsWith("/verify-email")) {
    return NextResponse.next();
  }

  // Check for session token in cookies
  const sessionToken = request.cookies.get("better-auth.session_token");

  //* User is not authenticated at all
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let isAuthenticated = false;
  let userRole = null;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticated = true;
    userRole = data.user.role;
  }

  if (pathname === "/login" || pathname === "/register") {
    if (isAuthenticated) {
      if (userRole === Roles.admin) {
        return NextResponse.redirect(new URL("/admin-dashboard", request.url));
      }
      if (userRole === Roles.student) {
        return NextResponse.redirect(
          new URL("/student-dashboard", request.url),
        );
      }
      if (userRole === Roles.tutor) {
        return NextResponse.redirect(new URL("/tutor-dashboard", request.url));
      }
    }
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    userRole === Roles.admin &&
    (pathname.startsWith("/student-dashboard") ||
      pathname.startsWith("/tutor-dashboard"))
  ) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (
    userRole === Roles.student &&
    (pathname.startsWith("/tutor-dashboard") ||
      pathname.startsWith("/admin-dashboard"))
  ) {
    return NextResponse.redirect(new URL("/student-dashboard", request.url));
  }

  if (
    userRole === Roles.tutor &&
    (pathname.startsWith("/student-dashboard") ||
      pathname.startsWith("/admin-dashboard"))
  ) {
    return NextResponse.redirect(new URL("/tutor-dashboard", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/tutor-dashboard",
    "/tutor-dashboard/:path*",
    "/student-dashboard",
    "/student-dashboard/:path*",
  ],
};
