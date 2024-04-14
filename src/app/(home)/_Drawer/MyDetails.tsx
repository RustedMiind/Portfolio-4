"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";

function MyDetails() {
  const variables = useAtomValue(variablesAtom);

  return (
    <>
      <Typography variant="h3" fontWeight={700}>
        {variables?.main_heading}
      </Typography>
      <Typography variant="h6" fontWeight={700}>
        {variables?.main_subtitle}
      </Typography>
      <Typography variant="body1" color={"text.secondary"}>
        {variables?.my_description}
      </Typography>
    </>
  );
}

export default MyDetails;
