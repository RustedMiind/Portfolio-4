import { Stack, Typography } from "@mui/material";
import ProjectsTable from "./_Projects/Table";
import BackToHomeBtn from "@/components/BackToHomeBtn";

function ArchivePage() {
  return (
    <Stack>
      <BackToHomeBtn />
      <Typography variant={"h3"} fontWeight={700} gutterBottom>
        All Projects
      </Typography>
      <ProjectsTable />
    </Stack>
  );
}

export default ArchivePage;
