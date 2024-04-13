"use client";
import { Grow, Slide } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";

import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidate from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidate
);

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
