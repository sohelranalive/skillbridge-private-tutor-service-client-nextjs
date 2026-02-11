"use server";

import { studentService } from "@/service/student.service";
import { Booking, Reviews } from "@/types";

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

export const getStudentReviewsAction = async (params: string) => {
  return await studentService.getStudentReviews(params);
};

export const deleteReviewAction = async (params: string) => {
  return await studentService.deleteReview(params);
};

export const updateReviewAction = async (params: string, payload: Reviews) => {
  return await studentService.updateReview(params, payload);
};

export const writeReviewAction = async (payload: Reviews) => {
  return await studentService.writeReview(payload);
};
