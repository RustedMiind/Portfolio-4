import AspectRatio from "@/components/AspectRatio";
import CardStructure from "@/components/CardStructure";
import CustomChip from "@/components/CustomChip";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

function ProjectCard() {
  return (
    <CardStructure
      sx={{
        "&:hover .card-structure-media": {
          borderColor: "primary.dark",
        },
      }}
      mediaContent={
        <AspectRatio
          ratio={16 / 9}
          boxProps={{
            sx: {
              border: "2px solid transparent",
              borderColor: grey[900],
            },
            className: "card-structure-media",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src="https://picsum.photos/id/237/200/300"
            alt="project"
          />
        </AspectRatio>
      }
      mainContent={
        <Stack spacing={0.5}>
          <Typography
            variant="body1"
            className="text-color-effect"
            fontWeight={600}
          >
            ERP Dashboard
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            sapiente ipsum eveniet eligendi praesentium reprehenderit sequi
            atque ullam, incidunt corporis? Corporis doloremque fuga sapiente
          </Typography>
          <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
            <CustomChip color="primary" label="TypeScript" />
            <CustomChip color="primary" label="React" />
            <CustomChip color="primary" label="MUI" />
          </Stack>
        </Stack>
      }
    />
  );
}

export default ProjectCard;
