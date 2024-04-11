import CardStructure from "@/components/CardStructure";
import CustomChip from "@/components/CustomChip";
import { Experience } from "@/types/Experience";
import { Chip, Stack, Typography } from "@mui/material";

function ExperienceCard({ experience }: Props) {
  const startYear = new Date(experience.start_date).getFullYear();
  const endYear = experience.end_date
    ? new Date(experience.end_date).getFullYear()
    : null;

  return (
    <CardStructure
      mediaContent={
        <Stack>
          <Typography variant="body2" color={"text.secondary"}>
            {startYear} - {endYear || "Present"}
          </Typography>
        </Stack>
      }
      mainContent={
        <Stack spacing={0.5}>
          <Typography
            variant="body1"
            className="text-color-effect"
            fontWeight={600}
          >
            {experience.title}
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            {experience.description}
          </Typography>
          <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
            {experience.tools?.map((tool) => (
              <CustomChip key={tool.id} label={tool.name} />
            ))}
          </Stack>
        </Stack>
      }
    />
  );
}

type Props = {
  experience: Experience;
};

export default ExperienceCard;
