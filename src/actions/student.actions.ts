"use server";

import { studentService } from "@/service/student.service";
import { Booking } from "@/types";

interface getBookingParams {
  studentId?: string;
  availabilityId?: string;
}

export const getAllReviewAction = async () => {
  return await studentService.getReview();
};

export const getExistingBookingAction = async (params?: getBookingParams) => {
  return await studentService.getExistingBooking(params);
};

export const createBookingAction = async (payload: Booking) => {
  return await studentService.createBooking(payload);
};
