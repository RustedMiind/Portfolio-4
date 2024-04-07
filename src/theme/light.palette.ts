import { PaletteOptions } from "@mui/material";
import { green } from "@mui/material/colors";

export const LightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#FB2E86",
    lightest: "#FB2E8633",
  },
  secondary: {
    main: "#2F1AC4 ",
    lightest: "#2F1AC433 ",
  },
  background: {
    default: "#FFF",
    paper: "#FFF",
  },
  success: {
    main: green.A400,
  },
  text: {
    primary: "#151875",
    secondary: "#A1ABCC",
    disabled: "#8A8FB9",
  },
};
