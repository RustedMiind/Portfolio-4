import { Tool } from "@/types/Tool";
import { atom } from "jotai";

export const toolsAtom = atom<Tool[] | undefined>(undefined);
