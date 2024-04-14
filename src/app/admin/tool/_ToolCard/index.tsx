import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Tool } from "@/types/Tool";
import Actions from "./Actions";

export default function ToolAdminCard({ tool }: Props) {
  return (
    <Card
      sx={{ width: 1, height: 1, display: "flex", flexDirection: "column" }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight={700} color="secondary.main">
          {tool.name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component={"a"}
          sx={{ textDecoration: "underline" }}
          target="_blank"
          href={tool.link}
        >
          {tool.link}
        </Typography>
      </CardContent>
      <Actions tool={tool} />
    </Card>
  );
}

type Props = {
  tool: Tool;
};
