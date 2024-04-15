import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

function ModuleCard({ href, title, description }: Props) {
  return (
    <Card sx={{ width: 1, height: 1 }}>
      <CardActionArea component={Link} href={href}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

type Props = {
  href: string;
  title: string;
  description?: string;
};

export default ModuleCard;
