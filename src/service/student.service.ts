import { env } from "@/env";
import { Booking } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

interface getBookingParams {
  studentId?: string;
  availabilityId?: string;
}

interface serviceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const studentService = {
  getReview: async function () {
    try {
      const res = await fetch(`${API_URL}/api/v1/student/all-review`);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getExistingBooking: async function (params?: getBookingParams) {
    try {
      const cookieStore = await cookies();

      const url = new URL(`${API_URL}/api/v1/student/booking`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (
            value !== undefined &&
            value !== null &&
            value !== "" &&
            value !== 0
          ) {
            url.searchParams.append(key, value);
          }
        });
      }

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
      });

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  createBooking: async function (payload: Booking) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/v1/student/create-booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: data.error || "Post creation failed" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBookingByStudentId: async function (params: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/api/v1/student/all-booking/${params}`,
        {
          method: "GET",
          headers: {
            Cookie: cookieStore.toString(),
          },
        },
      );

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
