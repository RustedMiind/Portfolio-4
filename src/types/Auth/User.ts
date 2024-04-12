import { Role } from "./Role";

export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName?: string;
  lastName?: string;
  roleId: string;
  profileImage?: string;
  role?: Role;
}
