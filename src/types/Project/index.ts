import { Experience } from "../Experience";
import { Tool } from "../Tool";

export interface Project {
  id: string;
  name: string;
  image: string;
  link: string;
  experienceId: string | null;
  experience?: Experience;
  description: string;
  tools?: Tool[];
}
