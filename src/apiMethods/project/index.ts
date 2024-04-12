import api from "@/constants/api";
import { Project } from "@/types/Project";

export const getProjects = async () => {
  const response = await fetch(api("project"));
  if (response.ok) {
    const data = (await response.json()) as Project[];
    return data;
  } else return undefined;
};

export const getProject = async (projectId: string) => {
  const response = await fetch(api(`project/${projectId}`));
  const data = (await response.json()) as Project;
  return data;
};
