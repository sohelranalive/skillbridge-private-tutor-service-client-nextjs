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
import { AvailabilitySlot, TutorProfile } from "@/types";

export const getTutorAction = async (
  params?: getTutorParams,
  options?: serviceOption,
) => {
  return await tutorService.getTutor(params, options);
};

export const getTutorByUserIdAction = async (params: string) => {
  return await tutorService.getTutorByUserId(params);
};

export const updateTutorByIdAction = async (
  params: string,
  payload: TutorProfile,
) => {
  return await tutorService.updateTutorById(params, payload);
};

export const deleteAvailabilityAction = async (params: string) => {
  return await tutorService.deleteAvailability(params);
};

export const setAvailabilityAction = async (payload: AvailabilitySlot) => {
  return await tutorService.setAvailability(payload);
};

export const getTutorAvailabilityAction = async (params: string) => {
  return await tutorService.getTutorAvailability(params);
};
