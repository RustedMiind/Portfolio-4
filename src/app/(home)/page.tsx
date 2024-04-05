import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";
import Drawer, { DRAWER_WIDTH } from "./_Drawer";
import AboutSection from "./_sections/About";
import ExperienceSection from "./_sections/Experience";
import ProjectsSection from "./_sections/Projects";

export default function Home() {
  return (
    <Stack pt={12}>
      <Container sx={{ position: "relative" }} maxWidth="lg">
        <Drawer />
        <Stack pl={DRAWER_WIDTH}>
          <Stack spacing={12}>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
