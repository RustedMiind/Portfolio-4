import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";
import Drawer, { DRAWER_WIDTH } from "./_Drawer";
import AboutSection from "./_sections/About";
import ExperienceSection from "./_sections/Experience";
import ProjectsSection from "./_sections/Projects";
import ScrollSpyContainer from "./ScrollSpyContainer";
import { getExperiences } from "@/api/expoerience";
import { getProjects } from "@/api/project";

export default async function Home() {
  const projects = await getProjects();
  const experiences = await getExperiences();

  return (
    <>
      <Drawer />
      <Stack pl={DRAWER_WIDTH}>
        <Stack spacing={12}>
          <ScrollSpyContainer>
            <AboutSection />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
          </ScrollSpyContainer>
        </Stack>
      </Stack>
    </>
  );
}
