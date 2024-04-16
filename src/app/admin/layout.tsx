import { checkUser } from "@/apiMethods/auth";
import { userAtom } from "@/jotai/atoms/User";
import HydrateAtoms from "@/jotai/HydrateAtoms";
import { Stack } from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";
import { HydrateUserAtom } from "./_HydrateUserAtom";
import Unauthorized from "@/components/Unauthorized";
import BackToHomeBtn from "@/components/BackToHomeBtn";

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await checkUser();

  if (user)
    return (
      <HydrateUserAtom value={user}>
        <Stack spacing={1}>{children}</Stack>
      </HydrateUserAtom>
    );
  else return <Unauthorized />;
}

export default Layout;
