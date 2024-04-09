import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme/theme";
import { Provider as JotaiProvider } from "jotai";
import { SnackbarProvider } from "notistack";
import { Grow, Stack, ThemeProvider, Container } from "@mui/material";
import NotiStackProvider from "./SnackbarProvider";
import MouseEffect from "./_MouseEffect";
import LayoutSpeedDial from "@/components/LayoutSpeedDial";

export const metadata: Metadata = {
  title: "Ali Soliman",
  description: "Portfolio of Ali Soliman, a full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <NotiStackProvider>
            <JotaiProvider>
              <Stack
                component={"body"}
                bgcolor={"background.default"}
                sx={{
                  ".MuiTableCell-root": {
                    borderBottom: "1px solid transparent",
                    borderBottomColor: "background.paper",
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
            </JotaiProvider>
          </NotiStackProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
