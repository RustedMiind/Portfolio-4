import { checkUser } from "@/apiMethods/auth";
import { userAtom } from "@/jotai/atoms/User";
import HydrateAtoms from "@/jotai/HydrateAtoms";
import { Stack } from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await checkUser();

  return (
    // <HydrateAtoms hydrate={[[userAtom, user]]}>
    <Stack>{children}</Stack>
    // </HydrateAtoms>
  );
}

export default Layout;
