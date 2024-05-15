import { getVariablesAsArray } from "@/apiMethods/variables";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import VariablesList from "./VariablesList";

async function CmsPage() {
  const { variables } = await getVariablesAsArray();

  return (
    <Stack py={2}>
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        color="primary.main"
      >
        Content Variables
      </Typography>
      <Stack spacing={1}>
        <VariablesList variables={variables} />
      </Stack>
    </Stack>
  );
}

export default CmsPage;
