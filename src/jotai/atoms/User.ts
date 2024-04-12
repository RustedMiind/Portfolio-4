import { User } from "@/types/Auth";
import { atom } from "jotai";

export const userAtom = atom<User | undefined>(undefined);
