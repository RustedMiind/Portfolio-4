import {
  Grow,
  IconButton,
  IconButtonProps,
  Slide,
  Stack,
  Tooltip,
  TooltipProps,
  Typography,
} from "@mui/material";

function NavIcon({
  title,
  subTitle,
  toolTipProps,
  url,
  inSamePage,
  ...props
}: Props) {
  return (
    <Tooltip
      arrow
      placement="top"
      slotProps={{
        tooltip: {
          sx: { bgcolor: "background.default" },
        },
        arrow: {
          sx: { color: "background.default" },
        },
      }}
      title={
        <Stack>
          <Typography variant="body2">{title}</Typography>
          {subTitle && (
            <Typography variant="caption" color={"primary.main"}>
              {subTitle}
            </Typography>
          )}
        </Stack>
      }
      {...toolTipProps}
    >
      <IconButton
        color="secondary"
        sx={{ color: "text.primary" }}
        component="a"
        target={inSamePage ? undefined : "_blank"}
        href={url}
        {...props}
      />
    </Tooltip>
  );
}

type Props = {
  title: string;
  url: string;
  subTitle?: string;
  toolTipProps?: TooltipProps;
  inSamePage?: boolean;
} & IconButtonProps;

export default NavIcon;
