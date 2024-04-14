import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Box } from "@mui/material";
import { Project } from "@/types/Project";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import ToolsChipsContainer from "@/components/ToolsChipsContainer";
import { Experience } from "@/types/Experience";
import moment from "moment";

export default function ExperienceAdminCard({ experience }: Props) {
  const startDate = moment(experience.start_date).format("YYYY-MM");
  const endDate = experience.end_date
    ? moment(experience.end_date).format("YYYY-MM")
    : null;

  return (
    <Card
      sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" fontWeight={700} color="secondary.main">
          {experience.org_name}
        </Typography>
        <Typography gutterBottom variant="h5">
          {experience.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {experience.description}
        </Typography>

        <Typography variant="body2" color="primary.light">
          {startDate} - {endDate || "Present"}
        </Typography>
        <Box pt={2}></Box>
        {experience.tools && <ToolsChipsContainer tools={experience.tools} />}
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          href={`/admin/experience/update/${experience.id}`}
          color="secondary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

type Props = {
  experience: Experience;
};
