import api from "@/constants/api";
import { Experience } from "@/types/Experience";
import { Project } from "@/types/Project";
import { CreateExperienceFormType } from "./types";
import axios from "axios";
import { serialize } from "object-to-formdata";

export const getExperiences = async () => {
  const response = await fetch(api("experience"));
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
