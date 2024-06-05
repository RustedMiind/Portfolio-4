import api from "@/constants/api";
import { Experience } from "@/types/Experience";
import { Project } from "@/types/Project";
import { CreateExperienceFormType } from "./types";
import axios from "axios";
import queryString from "query-string";

type ParamsT = { limit?: number; featured?: boolean };
export const getExperiences = async (params?: ParamsT, noChache?: boolean) => {
  const response = await fetch(
    api(`experience?${queryString.stringify(params || {})}`),
    {
      cache: noChache ? "no-cache" : "default",
    }
  );
  if (response.ok) {
    return (await response.json()) as Experience[];
  }
  return undefined;
};

export const getExperience = async (
  experienceId: string,
  noChache?: boolean
) => {
  const response = await fetch(api(`experience/${experienceId}`), {
    cache: noChache ? "no-cache" : "default",
  });
  if (response.ok) {
    return (await response.json()) as Experience;
  }
  return undefined;
};

export const createExperience = async (
  data: CreateExperienceFormType,
  authHeaders: Record<string, string>
) => {
  const experience = await axios.post<Project>(api("experience"), data, {
    headers: authHeaders,
  });
  return experience;
};

export const updateExperience = async (
  experienceId: string,
  data: CreateExperienceFormType,
  authHeaders: Record<string, string>
) => {
  const experience = await axios.patch<Project>(
    api(`experience/${experienceId}`),
    data,
    {
      headers: authHeaders,
    }
  );
  return experience;
};
