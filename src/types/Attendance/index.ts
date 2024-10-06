import { Paginate } from "../Paginate";
import { Shift } from "./Shift";

export interface GetAttendanceShiftsRoot {
  data: Paginate<Shift>;
  statistics: Statistics;
}

export interface Statistics {
  totalWorkHours: number;
  totalPay: number;
}
