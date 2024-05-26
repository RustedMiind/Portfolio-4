import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Grid,
  GridProps,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ContactFormSchema, ContactFormType } from "@/apiMethods/contact/types";
import { sendContactEmail } from "@/apiMethods/contact";
import { useSnackbar } from "notistack";

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

function ContactDialog(props: DialogProps & { onClose: () => void }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) });

  useEffect(() => {
    reset();
  }, [props.open]);

  const submit = handleSubmit(async (data) => {
    try {
      const res = await sendContactEmail(data);
      enqueueSnackbar("Your Message Sent Successfully");
      props.onClose();
    } catch (error) {
      enqueueSnackbar("Error Sending Your Message", { variant: "error" });
    }
    return;
  });

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      fullScreen={fullScreen}
      {...props}
      component={"form"}
      onSubmit={submit}
    >
      <DialogTitle>
        <Typography variant="h6" fontWeight={700}>
          Contact With Ali Soliman
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box py={2}>
          <Grid container spacing={2}>
            <InputItem
              label="Your Name"
              {...register("sender_name")}
              schemaError={errors.sender_name?.message}
            />
            <InputItem
              label="Your Email"
              type="email"
              {...register("sender_email")}
              schemaError={errors.sender_email?.message}
            />
            <InputItem
              label="Organization Name"
              {...register("org_name")}
              schemaError={errors.org_name?.message}
            />
            <InputItem
              label="Subject"
              {...register("subject")}
              schemaError={errors.subject?.message}
              gridProps={{ md: 12 }}
            />
            <InputItem
              label="Message"
              {...register("body")}
              schemaError={errors.body?.message}
              multiline
              rows={4}
              gridProps={{ md: 12 }}
            />
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column" }}>
        <Stack width={1} spacing={1}>
          <Button type="submit" fullWidth variant="contained" size="large">
            Send
          </Button>
          <Button
            onClick={props.onClose}
            fullWidth
            color="primary"
            variant="outlined"
            type="button"
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            Cancel
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

export default ContactDialog;
