"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import withHydrateAtom from "@/jotai/HydrateAtoms";

export const HydrateVariablesAtom = withHydrateAtom({ atom: variablesAtom });
