import { Box, Stack, Typography } from "@mui/material";
import Form from "./_Form";

function CreateProjectPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        Create New Project
      </Typography>
      <Box>
        <Form />
      </Box>
    </Stack>
  );
}

export default CreateProjectPage;
