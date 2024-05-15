import api from "@/constants/api";
import { Variables, VariablesItem } from "@/types/Variables";
import axios from "axios";
import { headers } from "next/headers";

export const getVariables = async () => {
  const response = await fetch(api("variables"), { cache: "no-cache" });
  const data = (await response.json()) as Variables;
  return data;
};

export const getVariablesAsArray = async () => {
  const response = await fetch(api("variables/default"), { cache: "no-cache" });
  const data = (await response.json()) as { variables: VariablesItem[] };
  return data;
};

export const updateVariableValue = async (
  key: keyof Variables,
  value: string,
  headers?: Record<string, string>
) => {
  return await axios.post(
    api("variables"),
    {
      key,
      value,
    },
    { headers }
  );
};
