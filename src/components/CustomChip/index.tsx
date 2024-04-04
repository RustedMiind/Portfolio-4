import { Chip, ChipProps } from "@mui/material";

function CustomChip(props: ChipProps) {
  const color = props.color || "primary";

  return (
    <Chip
      variant="filled"
      sx={{
        bgcolor: `${color}.lightest`,
        color: `${color}.main`,
        fontWeight: 500,
        height: 28,
        ...props.sx,
      }}
      {...props}
    />
  );
}

export type MuiMainColors =
  | "success"
  | "error"
  | "warning"
  | "primary"
  | "secondary";

export default CustomChip;
