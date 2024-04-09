import CustomChip from "@/components/CustomChip";
import {
  TableRow as MuiTableRow,
  Stack,
  TableCell,
  TableCellProps,
  Typography,
  TypographyProps,
} from "@mui/material";

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

function TableRow() {
  return (
    <MuiTableRow>
      <SecondaryTableCell>2023</SecondaryTableCell>
      <MainTableCell tableCellProps={{ colSpan: 3 }}>Hello There</MainTableCell>
      <SecondaryTableCell
        tableCellProps={{
          colSpan: 2,
          sx: { display: { xs: "none", lg: "table-cell" } },
        }}
      >
        Vision Dimensions
      </SecondaryTableCell>
      <TableCell colSpan={4} sx={{ display: { xs: "none", sm: "table-cell" } }}>
        <Stack direction="row" gap={1} flexWrap={"wrap"}>
          <CustomChip label="React" />
          <CustomChip label="Next" />
          <CustomChip label="Bootstrap" />
          <CustomChip label="Tailwind" />
          <CustomChip label="Material UI" />
          <CustomChip label="Nestjs" />
          <CustomChip label="Laravel" />
        </Stack>
      </TableCell>
      <SecondaryTableCell
        tableCellProps={{
          colSpan: 3,
          sx: { display: { xs: "none", md: "table-cell" } },
        }}
      >
        2023
      </SecondaryTableCell>
    </MuiTableRow>
  );
}

export default TableRow;
