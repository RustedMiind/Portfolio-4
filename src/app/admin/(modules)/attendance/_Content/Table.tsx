import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Shift } from "@/types/Attendance/Shift";
import moment from "moment";
import { IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { deleteShift } from "@/apiMethods/attendance";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
function AttendanceTable({ shifts, refresh }: Props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Shift No.</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Work Hours</TableCell>
            <TableCell>Pay</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shifts.map((shift) => {
            const start = moment(shift.start),
              end = moment(shift.end);

            return (
              <TableRow key={shift.id}>
                <TableCell> {shift.id} </TableCell>
                <TableCell> {start.format("DD-MM-YYYY")} </TableCell>
                <TableCell> {start.format("HH:MM:SS")} </TableCell>
                <TableCell> {end.format("DD-MM-YYYY")} </TableCell>
                <TableCell> {end.format("HH:MM:SS")} </TableCell>
                <TableCell> {shift.totalHours.toFixed(2)} </TableCell>
                <TableCell> {shift.pay.toFixed(2)} EGP</TableCell>
                <TableCell
                  onClick={async () => {
                    await deleteShift(shift.id, defaultClientHeaders());
                    refresh();
                    return;
                  }}
                >
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type Props = {
  shifts: Shift[];
  refresh: () => void;
};

export default AttendanceTable;
