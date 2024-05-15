"use client";

import { VariablesItem } from "@/types/Variables";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import UpdateVariableDialog from "./UpdateVariableDialog";

function VariablesList({ variables }: Props) {
  const [selectedVariable, setSelectedVariable] = useState<
    VariablesItem | undefined
  >(undefined);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpen = (variable: VariablesItem) => {
    setSelectedVariable(variable);
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedVariable(undefined), 300);
  };

  return (
    <>
      {variables.map((variable) => (
        <Card key={variable.key} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {variable.key.replace("_", " ").toUpperCase()}
            </Typography>

            <Typography variant="body2">{variable.value}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleOpen(variable)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
      <UpdateVariableDialog
        onClose={handleClose}
        open={dialogOpen}
        variable={selectedVariable}
      />
    </>
  );
}

type Props = {
  variables: VariablesItem[];
};

export default VariablesList;
