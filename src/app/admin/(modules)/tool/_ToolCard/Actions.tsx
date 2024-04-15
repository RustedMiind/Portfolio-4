"use client";
import { Button, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import SetToolDialog from "./SetDialog";
import { Tool } from "@/types/Tool";
import DeleteDialog from "./DeleteDialog";

function Actions({ tool }: Props) {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const handleOpenCreateDialog = () => setCreateDialogOpen(true);
  const handleCloseCreateDialog = () => setCreateDialogOpen(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleOpenDeleteDialog = () => setDeleteDialogOpen(true);
  const handleCloseDeleteDialog = () => setDeleteDialogOpen(false);

  return (
    <>
      <SetToolDialog
        tool={tool}
        open={createDialogOpen}
        onClose={handleCloseCreateDialog}
      />
      <DeleteDialog
        tool={tool}
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
      />
      <CardActions>
        <Button
          onClick={handleOpenCreateDialog}
          color="secondary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleOpenDeleteDialog}
        >
          Delete
        </Button>
      </CardActions>
    </>
  );
}

type Props = {
  tool: Tool;
};

export default Actions;
