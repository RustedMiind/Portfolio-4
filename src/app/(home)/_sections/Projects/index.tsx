import { Stack } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";

function ProjectsSection() {
  return (
    <Stack spacing={2}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Stack>
  );
}

export default ProjectsSection;
