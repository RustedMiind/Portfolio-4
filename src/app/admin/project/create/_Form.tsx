"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormControl,
  Grid,
  GridProps,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FilePond } from "react-filepond";
import { link } from "fs";
import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Tool } from "@/types/Tool";
import {
  CreateProjectFormType,
  createProjectSchema,
} from "@/apiMethods/project/types";
import { createProject } from "@/apiMethods/project";
import { useSnackbar } from "notistack";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { useRouter } from "next/navigation";

const GridItem = (props: GridProps) => <Grid item xs={12} md={6} {...props} />;

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

function Form({ tools }: Props) {
  const {
    control,
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<CreateProjectFormType>({
    resolver: zodResolver(createProjectSchema),
  });
  const { replace } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const submit = handleSubmit(async (data) => {
    try {
      console.log(data);
      await createProject(data, defaultClientHeaders());
      enqueueSnackbar("Project has been saved successfully!");
      replace("/admin/project");
    } catch (error) {
      enqueueSnackbar("Error Saving Project!", { variant: "error" });
    }
  });

  return (
    <Grid container spacing={2} component={"form"} onSubmit={submit}>
      <InputItem
        label={"Project Name"}
        {...register("name")}
        schemaError={errors.name?.message}
      />
      <InputItem
        label={"Project Link"}
        {...register("link")}
        schemaError={errors.link?.message}
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
      <GridItem>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <FilePond
              files={field.value}
              onupdatefiles={(files) => {
                field.onChange(files.map((filepondFile) => filepondFile.file));
              }}
              allowMultiple={false}
              acceptedFileTypes={["image/*"]}
            />
          )}
        />
        <ErrorTypography>{errors.image?.message}</ErrorTypography>
      </GridItem>
      <GridItem>
        <FormControl fullWidth>
          <InputLabel>Tools Used</InputLabel>
          <Controller
            name="toolsIds"
            control={control}
            render={({ field }) => (
              <Select
                multiple
                input={<OutlinedInput label="Tools Used" />}
                {...field}
                value={field.value || []}
              >
                {tools.map((tool) => (
                  <MenuItem key={tool.id} value={tool.id}>
                    {tool.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </GridItem>

      <Grid item xs={12}>
        <LoadingButton
          fullWidth
          type="submit"
          size="large"
          variant="outlined"
          loading={isSubmitting}
        >
          Create
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

type Props = { tools: Tool[] };

export default Form;
