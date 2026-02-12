import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = process.env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      if (!res.ok) {
        return { data: null, error: { message: "Failed to fetch session" } };
      }

      const session = await res.json();

      if (session === null || !session) {
        return { data: null, error: { message: "Session is missing" } };
      }

      return { data: session, error: null };
    } catch (error) {
      console.error("getSession error:", error);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
