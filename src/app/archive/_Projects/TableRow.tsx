import CustomChip from "@/components/CustomChip";
import BaseLink from "@/components/Links/Base";
import { Project } from "@/types/Project";
import {
  TableRow as MuiTableRow,
  Stack,
  TableCell,
  TableCellProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import Link from "next/link";

const SecondaryTableCell = ({
  tableCellProps,
  ...props
}: SecondaryTableCellProps) => (
  <TableCell {...tableCellProps}>
    <Typography variant="body2" color="text.secondary" {...props}></Typography>
  </TableCell>
);
type SecondaryTableCellProps = TypographyProps & {
  tableCellProps?: TableCellProps;
};

const MainTableCell = ({ tableCellProps, ...props }: MainTableCellProps) => (
  <TableCell {...tableCellProps}>
    <Typography
      variant="body2"
      color="text.primary"
      fontWeight={700}
      {...props}
    ></Typography>
  </TableCell>
);
type MainTableCellProps = TypographyProps & {
  tableCellProps?: TableCellProps;
};

function TableRow({ project }: Props) {
  return (
    <MuiTableRow>
      <SecondaryTableCell>2023</SecondaryTableCell>
      <MainTableCell tableCellProps={{ colSpan: 3 }}>
        {project.name}
      </MainTableCell>
      <SecondaryTableCell
        tableCellProps={{
          colSpan: 2,
          sx: { display: { xs: "none", lg: "table-cell" } },
        }}
      >
        {project.experience?.org_name}
      </SecondaryTableCell>
      <TableCell colSpan={4} sx={{ display: { xs: "none", sm: "table-cell" } }}>
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          {project.tools?.map((tool) => (
            <CustomChip
              key={tool.id}
              label={tool.name}
              component={"a"}
              target="_blank"
              href={tool.link}
            />
          ))}
        </Stack>
      </TableCell>
      <SecondaryTableCell
        tableCellProps={{
          colSpan: 3,
          sx: { display: { xs: "none", md: "table-cell" } },
        }}
      >
        <Typography
          variant="body2"
          component={"a"}
          href={project.link}
          target="_blank"
        >
          Explore
        </Typography>
      </SecondaryTableCell>
    </MuiTableRow>
  );
}

type Props = {
  project: Project;
};

export default TableRow;
