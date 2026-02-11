"use server";

import { adminService } from "@/service/admin.service";
import { Category, User } from "@/types";

export const getCategoryAction = async () => {
  return await adminService.getCategory();
};

export const getUsersAction = async () => {
  return await adminService.getUser();
};

export const updateUserStatusAction = async (params: string, payload: User) => {
  return await adminService.updateUserStatus(params, payload);
};

export const addCategoryAction = async (payload: Category) => {
  return await adminService.addCategory(payload);
};

export const deleteCategoryAction = async (params: string) => {
  return await adminService.deleteCategory(params);
};

export const updateCategoryAction = async (
  params: string,
  payload: Category,
) => {
  return await adminService.updateCategory(params, payload);
};
