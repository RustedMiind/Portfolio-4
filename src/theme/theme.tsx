"use client";
import {
  Shadows,
  SimplePaletteColorOptions,
  createTheme,
} from "@mui/material/styles";
import { LightPalette } from "./light.palette";
import { DarkPalette } from "./dark.palette";

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
  palette: LightPalette,
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
