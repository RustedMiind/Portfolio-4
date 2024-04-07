import { Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackToHomeBtn() {
  return (
    <Typography
      component={Link}
      href={"/"}
      fontWeight={700}
      color="primary.main"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.2,
        ".back-icon": {
          transition: "125ms",
        },
        "&:hover .back-icon": {
          transform: "translateX(-5px)",
        },
      }}
    >
      <ArrowBackIcon className="back-icon" sx={{ fontSize: 18 }} />
      Ali Soliman
    </Typography>
  );
}

export default BackToHomeBtn;
