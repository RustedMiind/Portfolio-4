"use client";

import { userAtom } from "@/jotai/atoms/User";
import withHydrateAtom from "@/jotai/HydrateAtoms";

export const HydrateUserAtom = withHydrateAtom({ atom: userAtom });
