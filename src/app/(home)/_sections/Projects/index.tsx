import { Stack } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";
import SectionContainer from "@/components/SectionContainer/index.tsx";

function ProjectsSection() {
  return (
    <SectionContainer spacing={2} id="projects-section">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </SectionContainer>
  );
}

export default ProjectsSection;
