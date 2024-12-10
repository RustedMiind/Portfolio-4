"use client";

import { Stack, Typography } from "@mui/material";
import ProjectCard from "./_ProjectCard.tsx";
import SectionContainer from "@/components/SectionContainer/index";
import ForwardLink from "@/components/Links/ForwardLink";
import { Project } from "@/types/Project/index.js";
import { motion } from "framer-motion";
// import { mainTransition } from "@/constants/transition.js";

function ProjectsSection({ projects }: Props) {
  return (
    <SectionContainer id="projects-section">
      <Typography
        gutterBottom
        variant="h4"
        fontWeight={700}
        display={{ md: "none" }}
      >
        Projects
      </Typography>
      <motion.div whileInView={"in-view"}>
        <Stack spacing={2}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} order={index} />
          ))}
        </Stack>
      </motion.div>
      <ForwardLink title="View Full Project Archive" href="/archive" />
    </SectionContainer>
  );
}

type Props = {
  projects: Project[];
};
export default ProjectsSection;
