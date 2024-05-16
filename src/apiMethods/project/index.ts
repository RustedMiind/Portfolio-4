import api from "@/constants/api";
import { Project } from "@/types/Project";
import { CreateProjectFormType } from "./types";
import axios from "axios";
import { serialize } from "object-to-formdata";
import queryString from "query-string";

type ParamsT = { limit?: number };
export const getProjects = async (noChache?: boolean, params?: ParamsT) => {
  const response = await fetch(
    api(`project?:${queryString.stringify(params || {})}`),
    {
      cache: noChache ? "no-cache" : "default",
    }
  );
  console.log(api(`project?${queryString.stringify(params || {})}`));
  if (response.ok) {
    const data = (await response.json()) as Project[];
    return data;
  } else return undefined;
};

export const getProject = async (projectId: string, noChache?: boolean) => {
  const response = await fetch(api(`project/${projectId}`), {
    cache: noChache ? "no-cache" : "default",
  });
  if (response.ok) {
    const data = (await response.json()) as Project;
    return data;
  } else return undefined;
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

export const updateProject = async (
  projectId: string,
  data: CreateProjectFormType,
  authHeaders: Record<string, string>
) => {
  const project = await axios.patch<Project>(
    api(`project/${projectId}`),
    serialize(data),
    {
      headers: authHeaders,
    }
  );
  return project;
};
