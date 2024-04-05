import HoverableBox from "@/components/HoverableBox";
import { Stack, Typography } from "@mui/material";
import ExperienceCard from "./_ExperienceCard";
import SectionContainer from "@/components/SectionContainer";

function ExperienceSection() {
  return (
    <SectionContainer spacing={2} id="experience-section">
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </SectionContainer>
  );
}

export default ExperienceSection;
