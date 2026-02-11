import { UserRole, UserStatus } from "./role.type";

export type User = {
  id?: string;
  name?: string;
  email?: string;
  emailVerified?: boolean;
  image?: string;
  phone?: string;
  role?: UserRole;
  status?: UserStatus;
  createdAt?: Date;
  updatedAt?: Date;
};
