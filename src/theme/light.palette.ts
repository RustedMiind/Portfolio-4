import { PaletteOptions } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export const LightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#FF5001",
    lightest: "#FF500122",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#646368",
    lightest: "#64636833",
  },
  background: {
    default: "#EFEFEF",
    paper: "#EFEFEF",
  },
  success: {
    main: green.A400,
  },
  text: {
    primary: "#231F20",
    secondary: "#646368",
    disabled: grey[400],
  },
};
