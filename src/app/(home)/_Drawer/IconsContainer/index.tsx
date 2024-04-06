import { Stack } from "@mui/material";
import NavIcon from "./NavIcon";

// Icons Import
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function IconsContainer() {
  return (
    <Stack direction={"row"} spacing={1}>
      <NavIcon
        title="LinkedIn"
        subTitle="Ali Soliman"
        url="https://www.linkedin.com/in/rustedmind"
      >
        <LinkedInIcon />
      </NavIcon>
      <NavIcon
        title="Github"
        subTitle="RustedMiind"
        url="https://github.com/RustedMiind"
      >
        <GitHubIcon />
      </NavIcon>
      <NavIcon
        title="Email"
        subTitle="alisolimanworks@gmail.com"
        url="mailto:alisolimanworks@gmail.com"
        inSamePage
      >
        <EmailIcon />
      </NavIcon>
      <NavIcon
        title="Phone Number"
        subTitle="+20 109 557 4449"
        url="tel:+201095574449"
        inSamePage
      >
        <PhoneIcon />
      </NavIcon>
      <NavIcon
        title="WhatsApp"
        subTitle="+20 109 557 4449"
        url="https://wa.me/+201095574449"
      >
        <WhatsAppIcon />
      </NavIcon>
    </Stack>
  );
}

export default IconsContainer;
