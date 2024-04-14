import api from "@/constants/api";
import { Tool } from "@/types/Tool";
import axios from "axios";

export const getTools = async (noCache?: boolean) => {
  const response = await fetch(api("tool"), {
    cache: noCache ? "no-cache" : "default",
  });
  if (response.ok) return (await response.json()) as Tool[];
  return undefined;
};

export const getTool = async (toolId: string, noCache?: boolean) => {
  const response = await fetch(api(`tool/${toolId}`), {
    cache: noCache ? "no-cache" : "default",
  });
  if (response.ok) return (await response.json()) as Tool;
  return undefined;
};

export const deleteTool = async (
  toolId: string,
  headers: Record<string, string>
) => {
  return await axios.delete(api(`tool/${toolId}`), {
    headers,
  });
};
