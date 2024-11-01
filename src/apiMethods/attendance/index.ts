import api from "@/constants/api";
import { Experience } from "@/types/Experience";
import { Project } from "@/types/Project";
import axios from "axios";
import queryString from "query-string";
import { GetAttendanceShiftsRoot } from "@/types/Attendance";
import { CreateShiftFormType } from "./types";

type ParamsT = { limit?: number; featured?: boolean };
export const getExperiences = async (params?: ParamsT, noChache?: boolean) => {
  const response = await fetch(
    api(`experience?${queryString.stringify(params || {})}`),
    {
      cache: noChache ? "no-cache" : "default",
    }
  );
  console.log(response);
  if (response.ok) {
    return (await response.json()) as Experience[];
  }
  return undefined;
};

export const getAttendance = async (
  params: { page?: number; limit?: number },
  authHeaders: Record<string, string>
) => {
  const response = await axios.get<GetAttendanceShiftsRoot>(api(`attendance`), {
    params,
    headers: authHeaders,
  });

  return response.data;
};

export const createShift = async (
  data: CreateShiftFormType,
  authHeaders: Record<string, string>
) => {
  const shift = await axios.post(api("attendance/set-shift"), data, {
    headers: authHeaders,
  });
  return shift;
};

export const deleteShift = async (
  shiftId: string | number,
  authHeaders: Record<string, string>
) => {
  const experience = await axios.delete<Project>(api(`attendance/${shiftId}`), {
    headers: authHeaders,
  });
  return experience;
};
