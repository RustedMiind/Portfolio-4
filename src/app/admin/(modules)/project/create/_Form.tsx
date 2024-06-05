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
import {
  CreateProjectFormType,
  createProjectSchema,
} from "@/apiMethods/project/types";
import { createProject, updateProject } from "@/apiMethods/project";
import { useSnackbar } from "notistack";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { useRouter } from "next/navigation";
import { Project } from "@/types/Project";
import ViewImage from "@/components/ViewImage";
import { Experience } from "@/types/Experience";

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

function Form({ tools = [], project, experiences }: Props) {
  const {
    control,
    register,
    reset,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<CreateProjectFormType>({
    resolver: zodResolver(
      project ? createProjectSchema.partial() : createProjectSchema
    ),
  });
  const { replace } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const experienceOptions = [
    { id: "ind", org_name: "Individual" },
    ...experiences,
  ];

  const submit = handleSubmit(async (data) => {
    try {
      if (!data.experienceId || data.experienceId === "ind") {
        delete data.experienceId;
      }
      console.log(data);
      if (project)
        await updateProject(project.id, data, defaultClientHeaders());
      else await createProject(data, defaultClientHeaders());
      enqueueSnackbar("Project has been saved successfully!");
      replace("/admin/project");
    } catch (error) {
      enqueueSnackbar("Error Saving Project!", { variant: "error" });
    }
  });

  useEffect(() => {
    reset({
      description: project?.description,
      link: project?.link,
      name: project?.name,
      toolsIds: project?.tools?.map((tool) => tool.id),
      experienceId: project?.experienceId || null,
    });
  }, [project?.id]);

  return (
    <Grid container spacing={2} component={"form"} onSubmit={submit}>
      <InputItem
        label={"Project Name"}
        {...register("name")}
        defaultValue={project?.name}
        schemaError={errors.name?.message}
      />
      <InputItem
        label={"Project Link"}
        defaultValue={project?.link}
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
        defaultValue={project?.description}
        {...register("description")}
        schemaError={errors.description?.message}
      />
      <Controller
        name="experienceId"
        control={control}
        render={({ field }) => (
          <InputItem
            label={"Select Experience"}
            defaultValue={project?.experienceId || "ind"}
            select
            {...field}
            schemaError={errors.experienceId?.message}
          >
            {experienceOptions.map((exp) => (
              <MenuItem key={exp.id} value={exp.id}>
                {exp.org_name}
              </MenuItem>
            ))}
          </InputItem>
        )}
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
        {project?.image && (
          <ViewImage
            image={project.image}
            render={({ open }) => (
              <>
                <Typography variant="body1">
                  Consider uploading image will replace the current image,
                  <Button
                    size="small"
                    onClick={open}
                    startIcon={<ImageIcon />}
                    sx={{ display: "inline-flex" }}
                  >
                    View Current Image
                  </Button>
                </Typography>
              </>
            )}
          />
        )}
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
      <GridItem>
        <Controller
          name="featured"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              checked={field.value}
              onChange={(e, checked) => field.onChange(e)}
              control={<Switch />}
              label="Is Featured Project"
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

type Props = { tools?: Tool[]; project?: Project; experiences: Experience[] };

export default Form;
