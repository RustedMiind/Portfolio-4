"use client";
import {
  Shadows,
  SimplePaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { LightPalette } from "./light.palette";
import { DarkPalette } from "./dark.palette";
import { useEffect, useMemo, useState } from "react";
import { ThemeMode } from "./ThemeMode.enum";
import {
  CustomThemeContext,
  CustomThemeContextType,
} from "./CustomThemeContext";
import { getLocalStorageMode } from "./localStorageMode";
import { getSystemMode } from "./systemMode";

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

export default function CustomThemeProvider({
  children,
}: CustomThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(ThemeMode.DARK);
  const setMode = (mode: ThemeMode) => {
    localStorage.setItem("theme", mode);
    setModeState(mode);
  };
  const toggleMode: CustomThemeContextType["toggleMode"] = (theme) => {
    if (theme) setMode(theme);
    else setMode(mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };

  useEffect(() => {
    let defaultTheme: ThemeMode;
    const localStorageMode = getLocalStorageMode();
    const systemMode = getSystemMode();
    if (localStorageMode) {
      defaultTheme = localStorageMode;
    } else {
      defaultTheme = systemMode;
    }
    setModeState(defaultTheme);
  }, []);

  const theme = useMemo(() => {
    return createTheme({
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
    });
  }, [mode]);

  return (
    <CustomThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
type CustomThemeProviderProps = {
  children: React.ReactNode;
};
