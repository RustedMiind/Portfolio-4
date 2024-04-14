import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";
import Drawer, { DRAWER_WIDTH } from "./_Drawer";
import AboutSection from "./_sections/About";
import ExperienceSection from "./_sections/Experience";
import ProjectsSection from "./_sections/Projects";
import ScrollSpyContainer from "./ScrollSpyContainer";
import { getExperiences } from "@/apiMethods/expoerience";
import { getProjects } from "@/apiMethods/project";

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
            {experiences && <ExperienceSection experiences={experiences} />}
            {projects && <ProjectsSection projects={projects} />}
          </ScrollSpyContainer>
        </Stack>
      </Stack>
    </>
  );
}
