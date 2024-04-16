import { Tool } from "@/types/Tool";
import { Stack } from "@mui/material";
import CustomChip from "../CustomChip";
import Link from "next/link";

function ToolsChipsContainer({ tools }: Props) {
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
      {tools?.map((tool) => (
        <CustomChip
          key={tool.id}
          label={tool.name}
          component={Link}
          href={tool.link}
          target="_blank"
          sx={{ cursor: "pointer" }}
        />
      ))}
    </Stack>
  );
}

type Props = {
  tools: Tool[];
};

export default ToolsChipsContainer;
