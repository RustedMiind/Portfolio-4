"use client";
import { useHydrateAtoms } from "jotai/utils";
import { Variables } from "@/types/Variables";
import { variablesAtom } from "./atoms/Variables";
import { PrimitiveAtom } from "jotai";

function withHydrateAtom<T>({ atom }: Props<T>) {
  return function ({
    value,
    children,
  }: {
    value: T;
    children: React.ReactNode;
  }) {
    useHydrateAtoms([[atom, value]]);
    return children;
  };
}

type Props<T> = {
  atom: PrimitiveAtom<T>;
};

export default withHydrateAtom;
