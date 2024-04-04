"use client";
import { green } from "@mui/material/colors";
import { Shadows, createTheme } from "@mui/material/styles";

// Extend the TypeBackground and PaletteColorOptions interfaces
// declare module "@mui/material/styles" {
//   interface TypeBackground {
//     med: string;
//   }

//   interface SimplePaletteColorOptions {
//     lightest?: string;
//   }

//   interface TypeText {
//     solid?: string;
//   }
// }

// Create the MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#50e1ce",
    },
    secondary: {
      main: "#FB2E86",
    },
    background: {
      default: "#0f1729",
      paper: "#161f30",
    },
    success: {
      main: green.A400,
    },
    text: {
      primary: "rgb(229, 231, 235)",
      secondary: "#7c8fb0",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    // Must be removed
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
    },
  },
});

export default theme;
