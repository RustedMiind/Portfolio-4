import api from "@/constants/api";
import { Tool } from "@/types/Tool";

export const getTools = async () => {
  const response = await fetch(api("tool"));
  const data = (await response.json()) as Tool[];
  return data;
};

export const getTool = async (toolId: string) => {
  const response = await fetch(api(`tool/${toolId}`));
  const data = (await response.json()) as Tool;
  return data;
};
