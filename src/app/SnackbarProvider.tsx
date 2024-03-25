"use client";
import { Grow, Slide } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";

function NotiStackProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      TransitionComponent={Slide}
      variant="success"
      autoHideDuration={10000}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotiStackProvider;
