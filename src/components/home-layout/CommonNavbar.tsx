import { cookies, headers } from "next/headers";
import CommonNavbarClient from "./CommonNavbarClient";

// Server component: can read cookies/headers
export default function CommonNavbar() {
  const _h = headers(); // keep for future (e.g., locale, host, etc.)
  const cookieStore = cookies();

  // Example cookie keys (change later to match your real auth)
  const token = "";
  // const avatarUrl = null; // optional
  // const name = null; // optional

  const user = token
    ? {
        isSignedIn: true,
        name: "User",
        avatarUrl:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=SkillBridgeUser",
      }
    : { isSignedIn: false };

  return <CommonNavbarClient brand="SkillBridge" user={user} />;
}
