import HoverableBox from "@/components/HoverableBox";
import { Stack, Typography } from "@mui/material";
import ExperienceCard from "./_ExperienceCard";

function ExperienceSection() {
  return (
    <Stack spacing={2}>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </Stack>
  );
}

export default ExperienceSection;
