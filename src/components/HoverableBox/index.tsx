import { Box, BoxProps, SxProps, Theme } from "@mui/material";

const styles: SxProps<Theme> = {
  transition: "all 125ms ease-in",
  borderRadius: 1,
  border: "1px solid transparent",
  "&:hover": {
    // transform: "scale(1.01)",
    boxShadow: "-1px -1px 0px  #FFFFFF33",
    bgcolor: "background.medTransparent",
    backdropFilter: "blur(10px)",
  },
};

function HoverableBox(props: BoxProps) {
  return <Box {...props} sx={{ ...styles, ...props.sx } as SxProps<Theme>} />;
}

export default HoverableBox;
