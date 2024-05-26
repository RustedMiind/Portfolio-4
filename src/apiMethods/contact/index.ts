import axios from "axios";
import { ContactFormType } from "./types";
import api from "@/constants/api";

export const sendContactEmail = async (data: ContactFormType) => {
  const experience = await axios.post<unknown>(api("mailer/send-email"), data);
  return experience;
};
