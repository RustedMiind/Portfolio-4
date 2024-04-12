"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Grid,
  GridProps,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { link } from "fs";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const GridItem = (props: GridProps) => <Grid item xs={12} md={6} {...props} />;

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
      {schemaError && (
        <Typography variant="caption" color="error">
          {schemaError}
        </Typography>
      )}
    </GridItem>
  );
});
InputItem.displayName = "InputItem (forwardRef)";

const formSchema = z.object({
  name: z.string().min(4).max(20),
  link: z.string().url(),
  image: z.array(z.instanceof(File)).length(1),
  toolsIds: z.array(z.string()),
  description: z.string().min(4).max(100),
});

type FormType = z.infer<typeof formSchema>;

function Form() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormType>({ resolver: zodResolver(formSchema) });
  return (
    <Grid container spacing={2} component={"form"}>
      <InputItem
        label={"Project Name"}
        {...register("name")}
        schemaError={errors.name?.message}
      />
      <InputItem
        label={"Project Link"}
        {...register("link")}
        schemaError={errors.name?.message}
      />
      <InputItem
        gridProps={{
          md: 12,
        }}
        multiline
        minRows={4}
        label={"Description"}
        {...register("description")}
        schemaError={errors.description?.message}
      />
    </Grid>
  );
}

export default Form;
