import { getTools } from "@/apiMethods/tool";
import { Box, Button, Grid, GridProps, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ToolAdminCard from "./_ToolCard";
import CreateToolButton from "./_CreateToolButton";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);

async function ToolsMainPage() {
  const tools = await getTools(true);

  return (
    <Stack>
      <Stack
        gap={1}
        sx={{
          flexDirection: { md: "row" },
          alignItems: { md: "end" },
          mb: 4,
        }}
      >
        <Typography variant="h3" fontWeight={700} flexGrow={1}>
          All Tools
        </Typography>
        <Box>
          <CreateToolButton />
        </Box>
      </Stack>
      <Grid container spacing={2}>
        {tools?.map((tool) => (
          <GridItem key={tool.id}>
            <ToolAdminCard tool={tool} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default ToolsMainPage;
