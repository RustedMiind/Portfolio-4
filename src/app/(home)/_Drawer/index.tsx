import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";
import NavLinks from "./NavLinks";

export const DRAWER_WIDTH = {
  xs: undefined,
  md: "420px",
  lg: "480px",
} as const;

function Drawer() {
  return (
    <Container disableGutters maxWidth="lg">
      <Stack
        width={DRAWER_WIDTH}
        sx={{
          pr: {
            xs: undefined,
            md: 6,
          },
          height: {
            xs: "100vw",
            md: "100vw",
          },
          top: 0,
          py: {
            xs: 0,
            md: 12,
          },
          justifyContent: {
            xs: "center",
            md: "start",
          },
          mb: { xs: 4, md: 0 },
          overflowY: "auto",
          position: { xs: undefined, md: "fixed" },
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h3" fontWeight={700}>
            Ali Soliman
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            Web Development Engineer
          </Typography>
          <Typography variant="body1" color={"text.secondary"}>
            I specialize in crafting flawless digital experiences that captivate
            users with pixel-perfect design, ensuring accessibility and
            engagement at every step.
          </Typography>
          <NavLinks />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Drawer;
