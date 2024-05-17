import { getProject } from "@/apiMethods/project";
import { Box, Stack, Typography } from "@mui/material";
import Form from "../../create/_Form";
import { getTools } from "@/apiMethods/tool";
import { getExperiences } from "@/apiMethods/expoerience";

async function UpdateProject({ params: { projectId } }: Props) {
  const project = await getProject(projectId, true);
  const tools = await getTools();
  const experiences = await getExperiences();

  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Update Project
      </Typography>
      <Box>
        {experiences && (
          <Form tools={tools} project={project} experiences={experiences} />
        )}
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
