import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider as JotaiProvider, Provider } from "jotai";
import { SnackbarProvider } from "notistack";
import { Grow, Stack, ThemeProvider, Container } from "@mui/material";
import NotiStackProvider from "./SnackbarProvider";
import MouseEffect from "./_MouseEffect";
import LayoutSpeedDial from "@/components/LayoutSpeedDial";
import CustomThemeProvider from "@/theme/theme";
import HydrateAtoms from "@/jotai/HydrateAtoms";
import { getVariables } from "@/apiMethods/variables";
import withHydrateAtom from "@/jotai/HydrateAtoms";
import { variablesAtom } from "@/jotai/atoms/Variables";
import { HydrateVariablesAtom } from "./_HydrateVariablesAtom";
import { checkUser } from "@/apiMethods/auth";
import { HydrateUserAtom } from "./admin/_HydrateUserAtom";

export const metadata: Metadata = {
  title: "Ali Soliman",
  description: "Portfolio of Ali Soliman, a full stack developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variables = await getVariables();

  const user = await checkUser();
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <CustomThemeProvider>
          <NotiStackProvider>
            <Provider>
              <HydrateUserAtom value={user}>
                <HydrateVariablesAtom value={variables}>
                  <Stack
                    component={"body"}
                    bgcolor={"background.default"}
                    sx={{
                      ".MuiTableCell-root": {
                        borderBottom: "1px solid transparent",
                        borderBottomColor: "background.paper",
                      },
                      transition: "background-color 500ms ease-out",
                      ".filepond--panel-root": {
                        bgcolor: "background.paper",
                      },
                      ".filepond--drop-label": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <Stack py={12}>
                      <Container maxWidth="lg">{children}</Container>
                    </Stack>
                    <div
                      id="mouseEffectContainer"
                      className="mouse-effect-container"
                    ></div>
                    <MouseEffect />
                    <LayoutSpeedDial />
                  </Stack>
                </HydrateVariablesAtom>
              </HydrateUserAtom>
            </Provider>
          </NotiStackProvider>
        </CustomThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
