"use client";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useState } from "react";
import SetToolDialog from "./_ToolCard/SetDialog";

function CreateToolButton() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const handleOpenCreateDialog = () => setCreateDialogOpen(true);
  const handleCloseCreateDialog = () => setCreateDialogOpen(false);

  return (
    <>
      <SetToolDialog
        open={createDialogOpen}
        onClose={handleCloseCreateDialog}
      />
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleOpenCreateDialog}
      >
        Create New Tool
      </Button>
    </>
  );
}

export default CreateToolButton;
