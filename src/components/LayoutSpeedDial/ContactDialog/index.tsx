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
  TextField,
  TextFieldProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";

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
  name: z.string().min(2).max(20),
  email: z.string().email(),
  organization: z.string().optional(),
  subject: z.string().min(8).max(30),
  message: z.string().min(8),
});
type FormType = z.infer<typeof formSchema>;

function ContactDialog(props: DialogProps & { onClose: () => void }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(formSchema) });

  const submit = handleSubmit(console.log);

  return (
    <Dialog fullWidth maxWidth="md" fullScreen={fullScreen} {...props}>
      <DialogTitle>
        <Typography variant="h6" fontWeight={700}>
          Contact With Ali Soliman
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box py={2} component={"form"} onSubmit={submit} noValidate>
          <Grid container spacing={2}>
            <InputItem
              label="Your Name"
              {...register("name")}
              schemaError={errors.name?.message}
            />
            <InputItem
              label="Your Email"
              type="email"
              {...register("email")}
              schemaError={errors.email?.message}
            />
            <InputItem
              label="Organization Name"
              {...register("organization")}
              schemaError={errors.organization?.message}
            />
            <InputItem
              label="Subject"
              {...register("subject")}
              schemaError={errors.subject?.message}
              gridProps={{ md: 12 }}
            />
            <InputItem
              label="Message"
              {...register("message")}
              schemaError={errors.message?.message}
              multiline
              rows={4}
              gridProps={{ md: 12 }}
            />
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactDialog;
