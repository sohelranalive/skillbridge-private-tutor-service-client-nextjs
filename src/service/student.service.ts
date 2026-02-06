import { env } from "@/env";

const API_URL = env.API_URL;

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
};
