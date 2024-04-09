import { Stack } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";
import SectionContainer from "@/components/SectionContainer/index";
import ForwardLink from "@/components/Links/ForwardLink";

function ProjectsSection() {
  return (
    <SectionContainer spacing={2} id="projects-section">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ForwardLink title="View Full Project Archive" href="/archive" />
    </SectionContainer>
  );
}

export default ProjectsSection;
