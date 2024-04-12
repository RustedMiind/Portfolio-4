import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { Project } from "@/types/Project";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import ToolsChipsContainer from "@/components/ToolsChipsContainer";

export default function ProjectAdminCard({ project }: Props) {
  return (
    <Card sx={{ width: 1 }}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt="project"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box pt={2}></Box>
        {project.tools && <ToolsChipsContainer tools={project.tools} />}
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          href={`admin/project/${project.id}`}
          color="secondary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          color="primary"
          component={Link}
          href={project.link}
          startIcon={<LinkIcon />}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}

type Props = {
  project: Project;
};
