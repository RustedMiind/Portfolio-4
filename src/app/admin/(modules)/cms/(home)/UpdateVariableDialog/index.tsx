"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { VariablesItem } from "@/types/Variables";
import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { updateVariableValue } from "@/apiMethods/variables";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function UpdateVariableDialog({ onClose, open, variable }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<{ value: string }>();

  const { refresh } = useRouter();

  const onSubmit = handleSubmit(async ({ value }) => {
    if (variable)
      await updateVariableValue(variable?.key, value, defaultClientHeaders());
    onClose();
    refresh();
  });

  useEffect(() => {
    reset({
      value: variable?.value || "",
    });
  }, [open, variable?.value]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Update ({variable?.key.replace("_", " ")}) variable
      </DialogTitle>
      <Stack component="form" onSubmit={onSubmit} noValidate>
        <DialogContent>
          <TextField
            multiline
            fullWidth
            variant="filled"
            label={variable?.key.replace("_", " ")}
            {...register("value")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <LoadingButton
            variant="contained"
            type="submit"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  variable?: VariablesItem;
};

export default UpdateVariableDialog;
