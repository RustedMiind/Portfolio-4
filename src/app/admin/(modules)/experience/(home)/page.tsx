import { getProjects } from "@/apiMethods/project";
import { Box, Button, Grid, GridProps, Stack, Typography } from "@mui/material";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { getExperiences } from "@/apiMethods/expoerience";
import ExperienceAdminCard from "./_Experience_Card";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} lg={4} {...props} />
);

async function ExperiencesMainPage() {
  const experiences = await getExperiences(
    {},true
  );

  return (
    <Stack>
      <Stack
        gap={1}
        sx={{ flexDirection: { md: "row" }, alignItems: { md: "end" }, mb: 4 }}
      >
        <Typography variant="h3" fontWeight={700} flexGrow={1}>
          All Experiences
        </Typography>
        <Box>
          <Button
            component={Link}
            href="/admin/experience/create"
            startIcon={<AddIcon />}
            variant="contained"
          >
            Create New Experience
          </Button>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        {experiences?.map((experience) => (
          <GridItem key={experience.id}>
            <ExperienceAdminCard experience={experience} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}

export default ExperiencesMainPage;
