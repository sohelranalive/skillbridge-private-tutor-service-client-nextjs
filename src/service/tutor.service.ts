import { env } from "@/env";
import { AvailabilitySlot, TutorProfile } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

interface getTutorParams {
  search?: string;
  isFeatured?: boolean | null;
  price?: number;
  category?: string;
  ratings?: number;
  page?: number;
  limit?: number;
  skip?: number;
  sortBy?: string;
  sortOrder?: string;
}

interface serviceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const tutorService = {
  getTutor: async function (params?: getTutorParams, options?: serviceOption) {
    try {
      const url = new URL(`${API_URL}/api/v1/tutor/all-tutor`);

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

      const config: RequestInit = {};

      if (options?.cache) {
        config.cache = options.cache;
      }

      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      const res = await fetch(url.toString(), config);

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getTutorById: async function (params?: string) {
    try {
      const res = await fetch(
        `${API_URL}/api/v1/tutor/tutor-profile/${params}`,
      );
      const data = await res.json();
      return { data: data.data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getTutorByUserId: async function (params?: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/v1/tutor/user/${params}`, {
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
  updateTutorById: async function (params: string, payload: TutorProfile) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${API_URL}/api/v1/tutor/tutor-profile/update/${params}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieStore.toString(),
          },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: data.error || "Update failed" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBookingByTutorId: async function (params: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/api/v1/tutor/all-bookings/${params}`,
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
  getReviewsBtTutorId: async function (params?: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/v1/tutor/all-reviews/${params}`, {
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
  getTutorAvailability: async function (params?: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/api/v1/tutor/availability/${params}`,
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
  deleteAvailability: async function (params?: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/api/v1/tutor/delete-availability/${params}`,
        {
          method: "DELETE",
          headers: {
            Cookie: cookieStore.toString(),
          },
        },
      );

      if (res.status === 404) {
        return { data: null, error: { message: "Booking exits" } };
      }

      if (res.status === 204) {
        return { data: "Deleted", error: null };
      }
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  setAvailability: async function (payload: AvailabilitySlot) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/v1/tutor/tutor-availability`, {
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
          error: { message: data.error || "Availability creation failed" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
