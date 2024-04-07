import { PaletteOptions } from "@mui/material";
import { green } from "@mui/material/colors";

export const DarkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "rgb(94, 234, 212)",
    lightest: "#50e1ce33",
  },
  secondary: {
    main: "#FB2E86",
    lightest: "#FB2E8655",
  },
  background: {
    default: "#0f1729",
    paper: "#161f30",
    medTransparent: "rgba(30, 41, 59, 0.5)",
  },
  success: {
    main: green.A400,
  },
  text: {
    primary: "rgb(229, 231, 235)",
    secondary: "#7c8fb0",
  },
};
