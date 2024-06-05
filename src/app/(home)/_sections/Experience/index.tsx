import HoverableBox from "@/components/HoverableBox";
import { Stack, Typography } from "@mui/material";
import ExperienceCard from "./_ExperienceCard";
import SectionContainer from "@/components/SectionContainer";
import { Project } from "@/types/Project";
import { Experience } from "@/types/Experience";

function ExperienceSection({ experiences }: Props) {
  return (
    <SectionContainer id="experience-section">
      <Typography
        gutterBottom
        variant="h4"
        fontWeight={700}
        display={{ md: "none" }}
      >
        Work Experience
      </Typography>
      <Stack spacing={2}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Stack>
    </SectionContainer>
  );
}

type Props = {
  experiences: Experience[];
};

export default ExperienceSection;
