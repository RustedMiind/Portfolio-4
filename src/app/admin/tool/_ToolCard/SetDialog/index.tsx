"use client";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Tool } from "@/types/Tool";
import {
  Box,
  Grid,
  GridProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateToolFormType, createToolSchema } from "@/apiMethods/tool/types";
import axios from "axios";
import api from "@/constants/api";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { getTools } from "@/apiMethods/tool";
import LoadingButton from "@mui/lab/LoadingButton";
import { atom, useAtom, useSetAtom } from "jotai";
import { toolsAtom } from "@/jotai/atoms/Tools";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

const GridItem = (props: GridProps) => <Grid item xs={12} {...props} />;

const ErrorTypography = (props: TypographyProps) => (
  <Typography variant="caption" color="error" {...props} />
);

const InputItem = forwardRef<
  HTMLInputElement,
  TextFieldProps & {
    label?: string;
    gridProps?: GridProps;
    schemaError?: string;
  }
>(({ gridProps, schemaError, ...props }, ref) => {
  return (
    <GridItem {...gridProps}>
      <TextField fullWidth placeholder={props.label} ref={ref} {...props} />
      {schemaError && <ErrorTypography>{schemaError}</ErrorTypography>}
    </GridItem>
  );
});
InputItem.displayName = "InputItem (forwardRef)";

function SetToolDialog({ tool, ...props }: Props) {
  const { refresh } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateToolFormType>({
    resolver: zodResolver(tool ? createToolSchema.partial() : createToolSchema),
  });
  const submit = handleSubmit(async (data) => {
    try {
      await axios.request({
        data,
        headers: defaultClientHeaders(),
        ...(tool
          ? {
              method: "PATCH",
              url: api(`tool/${tool.id}`),
            }
          : {
              method: "POST",
              url: api("tool"),
            }),
      });
      const tools = await getTools(true);
      props.onClose?.();
      enqueueSnackbar("Tool saved successfully!");
      refresh();
    } catch (error) {
      enqueueSnackbar("Error saving tool!", { variant: "error" });
    }
  });

  useEffect(() => {
    if (tool) reset({ link: tool.link, name: tool.name });
    else reset({ link: "", name: "" });
  }, [props.open]);

  return (
    <Dialog
      component="form"
      onSubmit={submit}
      maxWidth="sm"
      fullWidth
      {...props}
    >
      <DialogTitle>
        {tool ? `Update '${tool.name}' tool` : "Create new tool"}
      </DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Grid container spacing={2}>
            <InputItem
              label="Name"
              {...register("name")}
              schemaError={errors.name?.message}
            />
            <InputItem
              label="Blog Url"
              {...register("link")}
              schemaError={errors.link?.message}
            />
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <LoadingButton type="submit" loading={isSubmitting} variant="contained">
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  onClose?: () => void;
  tool?: Tool;
} & DialogProps;

export default SetToolDialog;
