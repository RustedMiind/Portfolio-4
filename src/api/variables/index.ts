import api from "@/constants/api";
import { Variables } from "@/types/Variables";

export const getVariables = async () => {
  const response = await fetch(api("variables"), { cache: "no-cache" });
  const data = (await response.json()) as Variables;
  return data;
};
