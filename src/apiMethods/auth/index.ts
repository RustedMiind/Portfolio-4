import api from "@/constants/api";
import { defaultHeaders } from "@/constants/defaultHeaders";
import { User } from "@/types/Auth";
import axios from "axios";
import Cookies from "js-cookie";
import { LoginFormType } from "./types";

export const checkUser = async () => {
  try {
    const { data } = await axios.get<User>(api("auth/user"), {
      headers: defaultHeaders(),
    });
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
