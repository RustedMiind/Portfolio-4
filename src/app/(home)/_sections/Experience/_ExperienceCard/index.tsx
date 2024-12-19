"use client";

import CardStructure from "@/components/CardStructure";
import ToolsChipsContainer from "@/components/ToolsChipsContainer";
import { mainTransition } from "@/constants/transition";
import { Experience } from "@/types/Experience";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

function ExperienceCard({ experience }: Props) {
  const startYear = new Date(experience.start_date).getFullYear();
  const endYear = experience.end_date
    ? new Date(experience.end_date).getFullYear()
    : null;

  return (
    <motion.div whileInView={"in-view"}>
      <motion.div
        transition={mainTransition}
        variants={{ "in-view": { opacity: 1, x: 0 } }}
        initial={{ opacity: 0, x: 500 }}
        whileHover={{ x: -10 }}
        whileTap={{ scale: 0.95 }}
      >
        <CardStructure
          mediaContent={
            <Stack>
              <Typography variant="body2" color={"text.secondary"}>
                {startYear} - {endYear || "Present"}
              </Typography>
            </Stack>
          }
          mainContent={
            <Stack spacing={0.5}>
              <Typography
                variant="body1"
                className="text-color-effect"
                fontWeight={600}
              >
                {experience.title}
                <Typography
                  component={"span"}
                  variant="body1"
                  color={"text.secondary"}
                  className="text-color-effect"
                >
                  {" "}
                  - {experience.org_name}
                </Typography>
              </Typography>

              <Typography
                variant="body2"
                color={"text.secondary"}
                component={"div"}
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />
              <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                {experience.tools && (
                  <ToolsChipsContainer tools={experience.tools} />
                )}
              </Stack>
            </Stack>
          }
        />
      </motion.div>
    </motion.div>
  );
}

type Props = {
  experience: Experience;
};

export default ExperienceCard;
