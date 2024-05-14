"use client";

import { variablesAtom } from "@/jotai/atoms/Variables";
import { Button, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import MainTitle from "./MainTitle";
import { userAtom } from "@/jotai/atoms/User";
import Link from "next/link";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function MyDetails() {
  const variables = useAtomValue(variablesAtom);
  const user = useAtomValue(userAtom);

  return (
    <>
      <MainTitle main={variables?.main_heading} />
      <Typography variant="h6" fontWeight={700}>
        {variables?.main_subtitle}
      </Typography>
      <Typography variant="body1" color={"text.secondary"}>
        {variables?.my_description}
      </Typography>
      {user && (
        <Button
          component={Link}
          href="/admin"
          startIcon={<AdminPanelSettingsIcon />}
          variant="outlined"
        >
          Admin Pannel
        </Button>
      )}
    </>
  );
}

export default MyDetails;
