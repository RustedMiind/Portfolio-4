import { Typography, TypographyProps } from "@mui/material";

function NavLink({ sectionId, ...props }: Props) {
  return (
    <Typography
      component={"a"}
      variant="caption"
      fontWeight={700}
      textTransform={"uppercase"}
      data-to-scrollspy-id={sectionId}
      href={`#${sectionId}`}
      {...props}
    />
  );
}

interface Props extends TypographyProps {
  sectionId: string;
}

export default NavLink;
