import api from "@/constants/api";
import { Project } from "@/types/Project";

export const getProjects = async () => {
  const response = await fetch(api("project"));
  const data = (await response.json()) as Project[];
  return data;
};

export const getProject = async (projectId: string) => {
  const response = await fetch(api(`project/${projectId}`));
  const data = (await response.json()) as Project;
  return data;
};
