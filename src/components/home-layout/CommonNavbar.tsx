import { cookies, headers } from "next/headers";
import CommonNavbarClient from "./CommonNavbarClient";
import { userService } from "@/service/user.service";
import { getSessionAction } from "@/actions/user.actions";

export default async function CommonNavbar() {
  let userInfo = null;

  try {
    const isUserSignedIn = await getSessionAction();
    userInfo = isUserSignedIn?.data?.user || null;
  } catch (error) {
    console.error("Failed to get session:", error);
  }

  const details = {
    name: "SkillBridge",
  };

  const user = userInfo
    ? {
        isSignedIn: true,
        name: userInfo.name,
        avatarUrl: userInfo.image,
        role: userInfo.role,
      }
    : { isSignedIn: false };

  return <CommonNavbarClient brand={details} user={user} />;
}
