import { cookies, headers } from "next/headers";
import CommonNavbarClient from "./CommonNavbarClient";
import { userService } from "@/service/user.service";

export default async function CommonNavbar() {
  const isUserSignedIn = await userService.getSession();
  const userInfo = isUserSignedIn?.data?.user;
  const user = userInfo
    ? {
        isSignedIn: true,
        name: userInfo.name,
        avatarUrl: userInfo.image,
      }
    : { isSignedIn: false };

  return <CommonNavbarClient brand="SkillBridge" user={user} />;
}
