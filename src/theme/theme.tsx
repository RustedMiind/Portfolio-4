"use client";
import {
  Shadows,
  SimplePaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { LightPalette } from "./light.palette";
import { DarkPalette } from "./dark.palette";
import { useMemo, useState } from "react";
import { ThemeMode } from "./ThemeMode.enum";
import {
  CustomThemeContext,
  CustomThemeContextType,
} from "./CustomThemeContext";

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
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.DARK);
  const toggleMode: CustomThemeContextType["toggleMode"] = (theme) => {
    if (theme) setMode(theme);
    else setMode(mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: mode === ThemeMode.DARK ? DarkPalette : LightPalette,
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
    [mode]
  );

  return (
    <CustomThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
type CustomThemeProviderProps = {
  children: React.ReactNode;
};
