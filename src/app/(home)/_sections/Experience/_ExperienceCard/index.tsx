import CardStructure from "@/components/CardStructure";
import CustomChip from "@/components/CustomChip";
import { Chip, Stack, Typography } from "@mui/material";

function ExperienceCard() {
  return (
    <CardStructure
      mediaContent={
        <Stack>
          <Typography variant="body2" color={"text.secondary"}>
            2024 - Present
          </Typography>
        </Stack>
      }
      mainContent={
        <Stack spacing={1}>
          <Typography
            variant="body1"
            className="text-color-effect"
            fontWeight={600}
            gutterBottom
          >
            I am currently working as a Senior Software Engineer at Klaviyo.
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            sapiente ipsum eveniet eligendi praesentium reprehenderit sequi
            atque ullam, incidunt corporis? Corporis doloremque fuga sapiente
            optio ullam pariatur adipisci mollitia. Consectetur itaque hic
            doloribus in neque molestias reiciendis eaque similique accusamus!
          </Typography>
          <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
            <CustomChip color="primary" label="JavaScript" />
            <CustomChip color="primary" label="TypeScript" />
            <CustomChip color="primary" label="React" />
            <CustomChip color="primary" label="Next" />
            <CustomChip color="primary" label="MUI" />
            <CustomChip color="primary" label="Nest JS" />
            <CustomChip color="primary" label="SQL" />
          </Stack>
        </Stack>
      }
    />
  );
}

export default ExperienceCard;
