import { Grid, GridProps } from "@mui/material";

function MainGrid({ first, second, containerProps }: Props) {
  return (
    <Grid container {...containerProps}>
      <Grid item {...first?.props}>
        {first?.children}
      </Grid>
      <Grid item {...second?.props}>
        {second?.children}
      </Grid>
    </Grid>
  );
}

type Props = {
  containerProps: GridProps;
  first?: MainGridItemProps;
  second?: MainGridItemProps;
};

type MainGridItemProps = {
  children?: React.ReactNode;
  props?: GridProps;
};

export default MainGrid;
