import { env } from "@/env";

const APU_URL = process.env.API_URL;

interface getTutorParams {
  isFeatured?: boolean;
  search: string;
  subject: string;
  ratings: number;
  price: number;
  category: string;
}

interface serviceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const tutorService = {
  getTutors: async function (params?: getTutorParams, options?: serviceOption) {
    try {
      const url = new URL(`${APU_URL}/api/v1/tutor/all-tutors`);

      // console.log("first ", params);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
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

      // console.log("second", url);

      const res = await fetch(url.toString(), config);

      // console.log(res);

      const data = await res.json();

      // example
      //   if(data.success){
      //     return
      //   }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  getTutorById: async function (params?: string) {
    try {
      const res = await fetch(
        `${APU_URL}/api/v1/tutor/tutor-profile/${params}`,
      );
      const data = await res.json();
      return { data: data.data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },

  getCategory: async function () {
    try {
      const res = await fetch(`${APU_URL}/api/v1/user/all-category`);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
