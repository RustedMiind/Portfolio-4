"use client";
import { green } from "@mui/material/colors";
import {
  Shadows,
  SimplePaletteColorOptions,
  createTheme,
} from "@mui/material/styles";

// Extend the TypeBackground and PaletteColorOptions interfaces
declare module "@mui/material/styles" {
  interface TypeBackground {
    medTransparent: string;
  }
  interface PaletteColorOptions extends SimplePaletteColorOptions {
    lightest?: string;
  }
}

// Create the MUI theme
const theme = createTheme({
  palette: {
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
    MuiTable: {
      styleOverrides: {
        root: {
          "table-layout": "fixed",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          verticalAlign: "top",
        },
      },
    },
  },
});

export default theme;
