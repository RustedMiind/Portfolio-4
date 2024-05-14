"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import MainTitle from "./MainTitle";

function MyDetails() {
  const variables = useAtomValue(variablesAtom);

  return (
    <>
      <MainTitle main={variables?.main_heading} />
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
