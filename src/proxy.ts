import { NextRequest, NextResponse } from "next/server";
import { userService } from "./service/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let userRole = null;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticated = true;
    userRole = data.user.role;
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
    "/profile",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/tutor-dashboard",
    "/tutor-dashboard/:path*",
    "/student-dashboard",
    "/student-dashboard/:path*",
  ],
};
