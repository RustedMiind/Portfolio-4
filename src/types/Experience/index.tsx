import { Tool } from "../Tool";

export interface Experience {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: any;
  org_name: string;
  tools?: Tool[];
}
