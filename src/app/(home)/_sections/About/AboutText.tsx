"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";

function AboutText() {
  const variables = useAtomValue(variablesAtom);
  return (
    <Typography variant="body1" color={"text.secondary"}>
      {variables?.about_me}
    </Typography>
  );
}

export default AboutText;
