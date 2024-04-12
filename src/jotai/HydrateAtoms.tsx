"use client";
import { useHydrateAtoms } from "jotai/utils";
import { Variables } from "@/types/Variables";
import { variablesAtom } from "./atoms/Variables";

function HydrateAtoms({
  variablesFromServer,
  children,
}: {
  variablesFromServer: Variables | undefined;
  children: React.ReactNode;
}) {
  useHydrateAtoms([[variablesAtom, variablesFromServer]]);
  return children;
}

export default HydrateAtoms;
