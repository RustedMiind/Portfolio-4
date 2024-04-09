"use client";
import {
  Shadows,
  SimplePaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { LightPalette } from "./light.palette";
import { DarkPalette } from "./dark.palette";
import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { Theme, themeAtom } from "./theme.atom";

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

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const themeMode = useAtomValue(themeAtom);

  const theme = useMemo(
    () =>
      createTheme({
        palette: themeMode === Theme.LIGHT ? LightPalette : DarkPalette,
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
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

type CustomThemeProviderProps = {
  children: React.ReactNode;
};
