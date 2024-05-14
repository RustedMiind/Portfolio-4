"use client";

import LoginDialog from "@/components/LoginDialog";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

function MainTitle({ main }: Props) {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Typography
        component={"a"}
        onClick={() => setLoginOpen(true)}
        variant="h3"
        role="button"
        fontWeight={700}
        sx={{ p: 0, textAlign: "start" }}
      >
        {main}
      </Typography>
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

type Props = {
  main?: string;
};

export default MainTitle;
