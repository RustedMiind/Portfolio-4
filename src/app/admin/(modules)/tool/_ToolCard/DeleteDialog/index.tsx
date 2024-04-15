import { deleteTool } from "@/apiMethods/tool";
import { defaultClientHeaders } from "@/constants/defaultClientHeaders";
import { Tool } from "@/types/Tool";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  DialogProps,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

function DeleteDialog({ tool, ...props }: Props) {
  const { refresh } = useRouter();
  const onDelete = async () => {
    await deleteTool(tool.id, defaultClientHeaders());
    props.onClose?.();
    refresh();
  };

  return (
    <Dialog {...props}>
      <DialogTitle
        sx={{
          span: {
            color: "primary.main",
          },
        }}
      >
        Are you sure you want to delete <span> {tool.name} </span>
      </DialogTitle>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  onClose?: () => void;
  tool: Tool;
} & DialogProps;

export default DeleteDialog;
