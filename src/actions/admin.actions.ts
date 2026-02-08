"use server";

import { adminService } from "@/service/admin.service";

export const getCategoryAction = async () => {
  return await adminService.getCategory();
};
