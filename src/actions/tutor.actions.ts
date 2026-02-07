"use server";

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

import { tutorService } from "@/service/tutor.service";

export const getTutors = async (
  params?: getTutorParams,
  options?: serviceOption,
) => {
  return await tutorService.getTutor(params, options);
};
