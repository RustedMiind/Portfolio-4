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

let systemMode: ThemeMode = ThemeMode.LIGHT;
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  systemMode = ThemeMode.DARK;
}

const localStorageModeString = localStorage.getItem("theme");
let localStorageMode: ThemeMode | undefined;
switch (localStorageModeString) {
  case ThemeMode.DARK:
    localStorageMode = ThemeMode.DARK;
    break;

  case ThemeMode.LIGHT:
    localStorageMode = ThemeMode.LIGHT;
    break;

  default:
    break;
}

// Create the MUI theme

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  let defaultTheme: ThemeMode;
  if (localStorageMode) {
    defaultTheme = localStorageMode;
  } else {
    defaultTheme = systemMode;
  }
  const [mode, setModeState] = useState<ThemeMode>(defaultTheme);
  const setMode = (mode: ThemeMode) => {
    localStorage.setItem("theme", mode);
    setModeState(mode);
  };
  const toggleMode: CustomThemeContextType["toggleMode"] = (theme) => {
    if (theme) setMode(theme);
    else setMode(mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
  };
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
