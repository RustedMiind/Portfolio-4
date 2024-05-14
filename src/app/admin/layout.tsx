"use client";

import { checkUser } from "@/apiMethods/auth";
import { userAtom } from "@/jotai/atoms/User";
import HydrateAtoms from "@/jotai/HydrateAtoms";
import { Stack } from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";
import { HydrateUserAtom } from "./_HydrateUserAtom";
import Unauthorized from "@/components/Unauthorized";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import { useAtomValue } from "jotai";

function Layout({ children }: { children: React.ReactNode }) {
  const user = useAtomValue(userAtom);

  if (user) return <Stack spacing={1}>{children}</Stack>;
  else return <Unauthorized />;
}

export default Layout;
