import api from "@/constants/api";
import { Project } from "@/types/Project";
import { CreateProjectFormType } from "./types";
import axios from "axios";
import { serialize } from "object-to-formdata";

export const getProjects = async (noChache?: boolean) => {
  const response = await fetch(api("project"), {
    cache: noChache ? "no-cache" : "default",
  });
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

export const createProject = async (
  data: CreateProjectFormType,
  authHeaders: Record<string, string>
) => {
  const project = await axios.post<Project>(api("project"), serialize(data), {
    headers: authHeaders,
  });
  return project;
};
