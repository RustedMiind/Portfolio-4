import { atom } from "jotai";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const themeAtom = atom<Theme>(Theme.DARK);
