"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Typography } from "@mui/material";
import { loginFormSchema, LoginFormType } from "@/apiMethods/auth/types";
import { useSnackbar } from "notistack";
import { login } from "@/apiMethods/auth/login";
import { useSetAtom } from "jotai";
import { userAtom } from "@/jotai/atoms/User";

function LoginDialog({ onClose, open }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const setUserAtom = useSetAtom(userAtom);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormType>({ resolver: zodResolver(loginFormSchema) });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await login(data, setUserAtom);
      enqueueSnackbar(`Welcome back ${res?.user.firstName}`);
      onClose();
    } catch (error) {
      enqueueSnackbar("Email or password is incorrect", { variant: "error" });
    }
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Login</DialogTitle>
      <Stack component={"form"} onSubmit={onSubmit} noValidate>
        <DialogContent>
          <DialogContentText>Is you za reel ali soliman ?</DialogContentText>
          <Stack spacing={2} my={2}>
            <Box>
              <TextField
                autoFocus
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                {...register("email")}
              />
              <Typography variant="body2" color={"error"}>
                {errors.email?.message}
              </Typography>
            </Box>
            <Box>
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                {...register("password")}
              />
              <Typography variant="body2" color={"error"}>
                {errors.password?.message}
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export default LoginDialog;
