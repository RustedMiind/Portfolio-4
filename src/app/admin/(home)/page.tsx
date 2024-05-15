import { Box, Grid, GridProps, Stack, Typography } from "@mui/material";
import ModuleCard from "./_ModuleCard";
import BackToHomeBtn from "@/components/BackToHomeBtn";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);

function AdminHomePage() {
  return (
    <Stack spacing={1}>
      <BackToHomeBtn />
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
          <GridItem>
            <ModuleCard href="/admin/cms" title="Content Variables" />
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
}

export default AdminHomePage;
