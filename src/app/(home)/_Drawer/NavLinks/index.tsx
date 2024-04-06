import { Stack } from "@mui/material";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <Stack
      spacing={2.5}
      pt={6}
      sx={{
        ".MuiTypography-root": {
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "text.secondary",
          "&::before": {
            content: "''",
            width: "35px",
            height: "1px",
            bgcolor: "text.secondary",
            borderRadius: 1,
            transition: "200ms cubic-bezier(.4,0,.2,1)",
            mr: 1,
          },
          "&.active, &:hover": {
            color: "text.primary",
            "&::before": {
              mr: 2,
              bgcolor: "text.primary",
              width: "60px",
            },
          },
        },
      }}
    >
      <NavLink sectionId="about-section">About</NavLink>
      <NavLink sectionId="experience-section">Experience</NavLink>
      <NavLink sectionId="projects-section">Projects</NavLink>
    </Stack>
  );
}

export default NavLinks;
