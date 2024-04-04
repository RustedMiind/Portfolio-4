import { Grid } from "@mui/material";
import HoverableBox from "../HoverableBox";

function CardStructure({ mainContent, mediaContent }: Props) {
  return (
    <HoverableBox sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {mediaContent}
        </Grid>
        <Grid item xs={9}>
          {mainContent}
        </Grid>
      </Grid>
    </HoverableBox>
  );
}

type Props = {
  mainContent?: React.ReactNode;
  mediaContent?: React.ReactNode;
};

export type CardStructureProps = Props;
export default CardStructure;
