import { Stack, Typography } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";
import SectionContainer from "@/components/SectionContainer/index";
import ForwardLink from "@/components/Links/ForwardLink";
import { Project } from "@/types/Project/index.js";

function ProjectsSection({ projects }: Props) {
  return (
    <SectionContainer id="projects-section">
      <Typography
        gutterBottom
        variant="h4"
        fontWeight={700}
        display={{ md: "none" }}
      >
        Projects
      </Typography>
      <Stack spacing={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
      <ForwardLink title="View Full Project Archive" href="/archive" />
    </SectionContainer>
  );
}

type Props = {
  projects: Project[];
};
export default ProjectsSection;
