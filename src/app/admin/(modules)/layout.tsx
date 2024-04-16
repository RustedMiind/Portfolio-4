import { Stack } from "@mui/material";
import React from "react";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import BackButton from "@/components/BackButton";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing={1}>
      <BackButton label="Admin Panel" href="/admin" />
      {children}
    </Stack>
  );
}

export default Layout;
