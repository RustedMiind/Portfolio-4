"use client";

import { Stack } from "@mui/material";
import NavIcon from "./NavIcon";

// Icons Import
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useAtomValue } from "jotai";
import { variablesAtom } from "@/jotai/atoms/Variables";

function IconsContainer() {
  const variables = useAtomValue(variablesAtom);

  return (
    <Stack direction={"row"} spacing={1}>
      <NavIcon
        title="LinkedIn"
        subTitle="Ali Soliman"
        url={variables?.linked_in}
      >
        <LinkedInIcon />
      </NavIcon>
      <NavIcon title="Github" subTitle="RustedMiind" url={variables?.github}>
        <GitHubIcon />
      </NavIcon>
      <NavIcon
        title="Email"
        subTitle={variables?.email}
        url={`mailto:${variables?.email}`}
        inSamePage
      >
        <EmailIcon />
      </NavIcon>
      <NavIcon
        title="Phone Number"
        subTitle={variables?.phone}
        url={`tel:${variables?.phone?.trim()}`}
        inSamePage
      >
        <PhoneIcon />
      </NavIcon>
      <NavIcon
        title="WhatsApp"
        subTitle={variables?.whats_app}
        url={`https://wa.me/${variables?.whats_app?.trim()}`}
      >
        <WhatsAppIcon />
      </NavIcon>
    </Stack>
  );
}

export default IconsContainer;
