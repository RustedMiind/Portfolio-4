"use client";

import AspectRatio from "@/components/AspectRatio";
import CardStructure from "@/components/CardStructure";
import ToolsChipsContainer from "@/components/ToolsChipsContainer";
import { Project } from "@/types/Project";
import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import LinkIcon from "@mui/icons-material/Link";

import { motion } from "framer-motion";
import { mainTransition } from "@/constants/transition";

function ProjectCard({ project, order }: Props) {
  return (
    <motion.div
      transition={{ ...mainTransition, delay: (order * 0.25) ** 1.1 }}
      variants={{ "in-view": { opacity: 1, x: 0 } }}
      initial={{ opacity: 0, x: 500 }}
    >
      <CardStructure
        sx={{
          "&:hover .card-structure-media": {
            borderColor: "primary.dark",
          },
        }}
        mediaContent={
          <AspectRatio
            ratio={16 / 9}
            boxProps={{
              sx: {
                border: "2px solid transparent",
                borderColor: grey[900],
              },
              className: "card-structure-media",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={project.image}
              alt="project"
            />
          </AspectRatio>
        }
        mainContent={
          <Stack spacing={0.5}>
            <Typography
              variant="body1"
              className="text-color-effect"
              fontWeight={600}
              component={"a"}
              target="_blank"
              href={project.link}
              display={"flex"}
            >
              {project.name}
              <Box mx={0.5}>
                <LinkIcon />
              </Box>
            </Typography>
            <motion.div
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0 }}
              variants={{
                "in-view": { opacity: 1 },
              }}
            >
              <Typography
                variant="body2"
                color={"text.secondary"}
                component={"div"}
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </motion.div>
            {project.tools && <ToolsChipsContainer tools={project.tools} />}
          </Stack>
        }
      />
    </motion.div>
  );
}

type Props = {
  project: Project;
  order: number;
};

export default ProjectCard;
