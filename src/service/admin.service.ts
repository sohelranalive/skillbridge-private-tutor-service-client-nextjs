import { env } from "@/env";

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
};
