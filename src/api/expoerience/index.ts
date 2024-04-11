import api from "@/constants/api";
import { Experience } from "@/types/Experience";
import { Project } from "@/types/Project";

export const getExperiences = async () => {
  const response = await fetch(api("experience"));
  const data = (await response.json()) as Experience[];
  return data;
};

export const getExperience = async (experienceId: string) => {
  const response = await fetch(api(`experience/${experienceId}`));
  const data = (await response.json()) as Experience;
  return data;
};
