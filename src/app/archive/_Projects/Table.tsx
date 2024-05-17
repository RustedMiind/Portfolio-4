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
import { Project } from "@/types/Project";

const TableHeadCell = (props: TableCellProps) => (
  <TableCell variant="head" {...props} sx={{ fontWeight: 700, ...props.sx }} />
);

function ProjectsTable({ projects }: Props) {
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
            <TableHeadCell
              sx={{ display: { xs: "none", lg: "table-cell" } }}
              colSpan={2}
            >
              Made at
            </TableHeadCell>
            <TableHeadCell
              sx={{ display: { xs: "none", sm: "table-cell" } }}
              colSpan={4}
            >
              Built with
            </TableHeadCell>
            <TableHeadCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              colSpan={3}
            >
              Link
            </TableHeadCell>
          </MuiTableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type Props = {
  projects: Project[];
};
export default ProjectsTable;
