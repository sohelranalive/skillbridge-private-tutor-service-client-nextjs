"use server";

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

import { tutorService } from "@/service/tutor.service";

export const getTutors = async (
  params?: getTutorParams,
  options?: serviceOption,
) => {
  return await tutorService.getTutors(params, options);
};
