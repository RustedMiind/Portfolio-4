import { getProject } from "@/apiMethods/project";
import { Box, Stack, Typography } from "@mui/material";
import Form from "../../create/_Form";
import { getTools } from "@/apiMethods/tool";

async function UpdateProject({ params: { projectId } }: Props) {
  const project = await getProject(projectId);
  const tools = await getTools();

  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Update Project
      </Typography>
      <Box>
        <Form tools={tools} project={project} />
      </Box>
    </Stack>
  );
}

type Props = {
  params: {
    projectId: string;
  };
};

export default UpdateProject;
