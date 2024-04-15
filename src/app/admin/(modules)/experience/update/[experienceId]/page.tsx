import { getProject } from "@/apiMethods/project";
import { Box, Stack, Typography } from "@mui/material";
import Form from "../../create/_Form";
import { getTools } from "@/apiMethods/tool";
import { getExperience } from "@/apiMethods/expoerience";

async function UpdateProject({ params: { experienceId } }: Props) {
  const experience = await getExperience(experienceId, true);
  const tools = await getTools();

  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Update Project
      </Typography>
      <Box>
        <Form tools={tools} experience={experience} />
      </Box>
    </Stack>
  );
}

type Props = {
  params: {
    experienceId: string;
  };
};

export default UpdateProject;
