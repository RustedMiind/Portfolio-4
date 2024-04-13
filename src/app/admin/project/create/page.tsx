import { Box, Stack, Typography } from "@mui/material";
import Form from "./_Form";
import { getTools } from "@/apiMethods/tool";

async function CreateProjectPage() {
  const tools = await getTools();

  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Create New Project
      </Typography>
      <Box>
        <Form tools={tools} />
      </Box>
    </Stack>
  );
}

export default CreateProjectPage;
