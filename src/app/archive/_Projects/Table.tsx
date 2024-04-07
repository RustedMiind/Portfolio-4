import {
  Container,
  Stack,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow as MuiTableRow,
  TableCellProps,
} from "@mui/material";
import TableRow from "./TableRow";

const TableHeadCell = (props: TableCellProps) => (
  <TableCell variant="head" sx={{ fontWeight: 700 }} {...props} />
);

function ProjectsTable() {
  return (
    <TableContainer>
      <Table
        aria-label="projects-table"
        // size="small"
        sx={{
          ".MuiTableCell-root": {
            pl: 0,
          },
        }}
      >
        <TableHead>
          <MuiTableRow>
            <TableHeadCell>Year</TableHeadCell>
            <TableHeadCell colSpan={3}>Project</TableHeadCell>
            <TableHeadCell colSpan={2}>Made at</TableHeadCell>
            <TableHeadCell colSpan={4}>Built with</TableHeadCell>
            <TableHeadCell colSpan={3}>Link</TableHeadCell>
          </MuiTableRow>
        </TableHead>
        <TableBody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectsTable;
