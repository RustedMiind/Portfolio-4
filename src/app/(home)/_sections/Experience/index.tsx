import HoverableBox from "@/components/HoverableBox";
import { Stack, Typography } from "@mui/material";
import ExperienceCard from "./_ExperienceCard";
import SectionContainer from "@/components/SectionContainer";
import { Project } from "@/types/Project";
import { Experience } from "@/types/Experience";

function ExperienceSection({ experiences }: Props) {
  return (
    <SectionContainer spacing={2} id="experience-section">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </SectionContainer>
  );
}

type Props = {
  experiences: Experience[];
};

export default ExperienceSection;
