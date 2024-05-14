import { User } from "@/types/Auth";
import { LoginFormType } from "./types";
import axios from "axios";
import api from "@/constants/api";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { userAtom } from "@/jotai/atoms/User";

export const login = async (
  dto: LoginFormType,
  dispatchUser: (user: User) => void
) => {
  const { data } = await axios.post<{ user: User; token: string }>(
    api("auth/login"),
    dto
  );
  Cookies.set("token", data.token, { expires: 1000 * 60 * 60 * 24 * 7 });
  dispatchUser(data.user);
  return data;
};
