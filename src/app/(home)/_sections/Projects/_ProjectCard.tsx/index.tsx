import AspectRatio from "@/components/AspectRatio";
import CardStructure from "@/components/CardStructure";
import CustomChip from "@/components/CustomChip";
import ToolsChipsContainer from "@/components/ToolsChipsContainer";
import { Project } from "@/types/Project";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Link from "next/link";

function ProjectCard({ project }: Props) {
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
            src={project.image}
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
            {project.name}
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            {project.description}
          </Typography>
          {project.tools && <ToolsChipsContainer tools={project.tools} />}
        </Stack>
      }
    />
  );
}

type Props = {
  project: Project;
};

export default ProjectCard;
