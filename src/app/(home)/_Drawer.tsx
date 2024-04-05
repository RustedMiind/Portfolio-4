import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";

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
          <Stack
            sx={{
              ".active": {
                color: "red",
              },
            }}
            spacing={1}
          >
            <Typography data-to-scrollspy-id="about-section" variant="body1">
              About
            </Typography>
            <Typography
              data-to-scrollspy-id="experience-section"
              variant="body1"
            >
              About
            </Typography>
            <Typography data-to-scrollspy-id="projects-section" variant="body1">
              About
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Drawer;
