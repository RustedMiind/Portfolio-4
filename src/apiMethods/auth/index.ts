import api from "@/constants/api";
import { User } from "@/types/Auth";

export const checkUser = async () => {
  const response = await fetch(api("auth/user"));
  const data = (await response.json()) as User;
  return data;
};
