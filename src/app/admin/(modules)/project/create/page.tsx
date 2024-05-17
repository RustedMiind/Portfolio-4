import { Box, Stack, Typography } from "@mui/material";
import Form from "./_Form";
import { getTools } from "@/apiMethods/tool";
import { getExperiences } from "@/apiMethods/expoerience";

async function CreateProjectPage() {
  const tools = await getTools();
  const experiences = await getExperiences();
  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Create New Project
      </Typography>
      <Box>
        {experiences && <Form tools={tools} experiences={experiences} />}
      </Box>
    </Stack>
  );
}

export default CreateProjectPage;
