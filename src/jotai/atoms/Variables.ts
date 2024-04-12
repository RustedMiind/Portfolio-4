import { Variables } from "@/types/Variables";
import { atom } from "jotai";

export const variablesAtom = atom<Variables | undefined>(undefined);
