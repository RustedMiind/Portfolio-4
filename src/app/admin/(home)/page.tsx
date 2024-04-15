import { Box, Grid, GridProps, Stack, Typography } from "@mui/material";
import ModuleCard from "./_ModuleCard";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);

function AdminHomePage() {
  return (
    <Stack spacing={1}>
      <Typography variant="h3" fontWeight={700} flexGrow={1}>
        Admin Panel
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <GridItem>
            <ModuleCard href="/admin/project" title="Projects" />
          </GridItem>{" "}
          <GridItem>
            <ModuleCard href="/admin/experience" title="Experiences" />
          </GridItem>
          <GridItem>
            <ModuleCard href="/admin/tool" title="Tools" />
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
}

export default AdminHomePage;
