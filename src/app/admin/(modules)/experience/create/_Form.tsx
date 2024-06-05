"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  GridProps,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { FilePond } from "react-filepond";
import { link } from "fs";
import { forwardRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Tool } from "@/types/Tool";
import ImageIcon from "@mui/icons-material/Image";
import { createProject, updateProject } from "@/apiMethods/project";
import { useSnackbar } from "notistack";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { useRouter } from "next/navigation";
import { Project } from "@/types/Project";
import ViewImage from "@/components/ViewImage";
import {
  CreateExperienceFormType,
  createExperienceSchema,
} from "@/apiMethods/expoerience/types";
import { Experience } from "@/types/Experience";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { createExperience, updateExperience } from "@/apiMethods/expoerience";

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

function Form({ tools = [], experience }: Props) {
  const {
    control,
    register,
    reset,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<CreateExperienceFormType>({
    resolver: zodResolver(
      experience ? createExperienceSchema.partial() : createExperienceSchema
    ),
  });
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const submit = handleSubmit(async (data) => {
    console.log(data);
    try {
      console.log(data);
      if (experience)
        await updateExperience(experience.id, data, defaultClientHeaders());
      else await createExperience(data, defaultClientHeaders());
      enqueueSnackbar("Experience has been saved successfully!");
      push("/admin/experience");
    } catch (error) {
      enqueueSnackbar("Error Saving Experience!", { variant: "error" });
    }
  });

  useEffect(() => {
    reset({
      description: experience?.description,
      title: experience?.title,
      toolsIds: experience?.tools?.map((tool) => tool.id),
      end_date: experience?.end_date,
      start_date: experience?.start_date,
      featured: experience?.featured,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [experience?.id]);

  return (
    <Grid container spacing={2} component={"form"} onSubmit={submit}>
      <InputItem
        label={"Experience Title"}
        {...register("title")}
        defaultValue={experience?.title}
        schemaError={errors.title?.message}
      />
      <InputItem
        label={"Organization Name"}
        {...register("org_name")}
        defaultValue={experience?.org_name}
        schemaError={errors.org_name?.message}
      />
      <InputItem
        gridProps={{
          md: 12,
        }}
        multiline
        minRows={4}
        label={"Description"}
        defaultValue={experience?.description}
        {...register("description")}
        schemaError={errors.description?.message}
      />
      <GridItem>
        <Controller
          control={control}
          name="start_date"
          render={({ field }) => (
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              defaultValue={null}
              label={"Start Date"}
              value={field.value ? moment(field.value) : null}
              onChange={(value) => field.onChange(value?.toISOString())}
              views={["month", "year"]}
            />
          )}
        />

        {errors?.start_date?.message && (
          <ErrorTypography>{errors.start_date.message}</ErrorTypography>
        )}
      </GridItem>
      <GridItem>
        <Controller
          control={control}
          name="end_date"
          render={({ field }) => (
            <DatePicker
              slotProps={{ textField: { fullWidth: true } }}
              defaultValue={null}
              label={"End Date"}
              value={field.value ? moment(field.value) : null}
              onChange={(value) => field.onChange(value?.toISOString())}
              views={["month", "year"]}
            />
          )}
        />{" "}
        {errors?.end_date?.message && (
          <ErrorTypography>{errors.end_date.message}</ErrorTypography>
        )}
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

      <GridItem>
        <Controller
          name="featured"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              checked={field.value}
              onChange={(e, checked) => field.onChange(e)}
              control={<Switch />}
              label="Is Featured Experience"
            />
          )}
        />
      </GridItem>
      <Grid item xs={12}>
        <LoadingButton
          fullWidth
          type="submit"
          size="large"
          variant="outlined"
          loading={isSubmitting}
        >
          Save
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

type Props = { tools?: Tool[]; experience?: Experience };

export default Form;
