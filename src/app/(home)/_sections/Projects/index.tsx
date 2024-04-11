import { Stack } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";
import SectionContainer from "@/components/SectionContainer/index";
import ForwardLink from "@/components/Links/ForwardLink";
import { Project } from "@/types/Project/index.js";

function ProjectsSection({ projects }: Props) {
  return (
    <SectionContainer spacing={2} id="projects-section">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <ForwardLink title="View Full Project Archive" href="/archive" />
    </SectionContainer>
  );
}

type Props = {
  projects: Project[];
};
export default ProjectsSection;
