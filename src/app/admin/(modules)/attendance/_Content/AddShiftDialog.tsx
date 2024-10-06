"use client";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Box, Grid, GridProps } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateShiftFormType,
  createShiftSchema,
} from "@/apiMethods/attendance/types";
import { DateTimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { createShift } from "@/apiMethods/attendance";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import ErrorTypography from "@/components/ErrorTypography";
import LoadingButton from "@mui/lab/LoadingButton";

const GridItem = (props: GridProps) => <Grid item xs={12} md={6} {...props} />;

function AddShiftDialog({ onClose, open, refresh }: Props) {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreateShiftFormType>({
    resolver: zodResolver(createShiftSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await createShift(data, defaultClientHeaders());
      onClose();
      refresh();
      return res;
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <Box component={"form"} onSubmit={onSubmit}>
        <DialogTitle>Add Shift</DialogTitle>
        <DialogContent>
          <Grid sx={{ my: 2 }} container spacing={2}>
            <GridItem>
              <Controller
                control={control}
                name="start"
                render={({ field }) => (
                  <DateTimePicker
                    orientation="portrait"
                    slotProps={{ textField: { fullWidth: true } }}
                    defaultValue={null}
                    label={"Start Date"}
                    value={field.value ? moment(field.value) : null}
                    onChange={(value) => field.onChange(value?.toISOString())}
                  />
                )}
              />
              <ErrorTypography>{errors.start?.message}</ErrorTypography>
            </GridItem>
            <GridItem>
              <Controller
                control={control}
                name="end"
                render={({ field }) => (
                  <DateTimePicker
                    orientation="portrait"
                    slotProps={{ textField: { fullWidth: true } }}
                    defaultValue={null}
                    label={"End Date"}
                    value={field.value ? moment(field.value) : null}
                    onChange={(value) => field.onChange(value?.toISOString())}
                  />
                )}
              />
              <ErrorTypography>{errors.end?.message}</ErrorTypography>
            </GridItem>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
  refresh: () => void;
};

export default AddShiftDialog;
