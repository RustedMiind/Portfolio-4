import { getProjects } from "@/apiMethods/project";
import { Box, Button, Grid, GridProps, Stack, Typography } from "@mui/material";
import ProjectAdminCard from "./_ProjectCard";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);

async function ProjectsHomePage() {
  const projects = await getProjects();

  return (
    <Stack>
      <Stack
        gap={1}
        sx={{ flexDirection: { md: "row" }, alignItems: { md: "end" }, mb: 4 }}
      >
        <Typography variant="h3" fontWeight={700} flexGrow={1}>
          All Projects
        </Typography>
        <Box>
          <Button
            component={Link}
            href="admin/project/create"
            startIcon={<AddIcon />}
            variant="contained"
          >
            Create New Project
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        {projects?.map((project) => (
          <GridItem key={project.id}>
            <ProjectAdminCard project={project} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default ProjectsHomePage;
