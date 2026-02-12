import { env } from "@/env";
import { Category, User } from "@/types";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export const adminService = {
  getCategory: async function () {
    try {
      const res = await fetch(`${API_URL}/api/v1/admin/all-category`);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  getBooking: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/v1/admin/all-bookings`, {
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
  getUser: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/api/v1/admin/all-users`, {
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
  updateUserStatus: async function (params: string, payload: User) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/v1/admin/user-update/${params}`, {
        method: "PATCH",
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
          error: { message: data.error || "Update failed" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  addCategory: async function (payload: Category) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${API_URL}/api/v1/admin/add-category`, {
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
          error: { message: data.error || "Category creation failed" },
        };
      }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  deleteCategory: async function (params?: string) {
    try {
      const cookieStore = await cookies();

      const res = await fetch(
        `${API_URL}/api/v1/admin/delete-category/${params}`,
        {
          method: "DELETE",
          headers: {
            Cookie: cookieStore.toString(),
          },
        },
      );

      if (res.status === 204) {
        return { data: "Deleted", error: null };
      }
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
  updateCategory: async function (params: string, payload: Category) {
    try {
      const cookieStore = await cookies();
      const res = await fetch(
        `${API_URL}/api/v1/admin/update-category/${params}`,
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
};
