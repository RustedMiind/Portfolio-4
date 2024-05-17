import { Stack, Typography } from "@mui/material";
import ProjectsTable from "./_Projects/Table";
import BackToHomeBtn from "@/components/BackToHomeBtn";
import { getProject, getProjects } from "@/apiMethods/project";

async function ArchivePage() {
  const projects = await getProjects(true);

  return (
    <Stack>
      <BackToHomeBtn />
      <Typography variant={"h3"} fontWeight={700} gutterBottom>
        All Projects
      </Typography>
      {projects && <ProjectsTable projects={projects} />}
    </Stack>
  );
}

export default ArchivePage;
