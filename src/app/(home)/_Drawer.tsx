import MainGrid from "@/components/MainGrid";
import { Container, Stack, Typography } from "@mui/material";

function Drawer() {
  return (
    <Container
      sx={{
        position: { xs: undefined, md: "fixed" },
      }}
      maxWidth="lg"
    >
      <MainGrid
        containerProps={{}}
        first={{
          children: (
            <Stack>
              <Stack spacing={1}>
                <Typography variant="h3" fontWeight={700}>
                  Ali Soliman
                </Typography>
                <Typography variant="h5">Web Development Engineer</Typography>
                <Typography variant="body1" color={"text.secondary"}>
                  I specialize in crafting flawless digital experiences that
                  captivate users with pixel-perfect design, ensuring
                  accessibility and engagement at every step.
                </Typography>
              </Stack>
            </Stack>
          ),
        }}
        second={{
          children: <div></div>,
          props: {
            sx: { pointerEvents: "none" },
          },
        }}
      />
    </Container>
  );
}

export default Drawer;
