import { Transition } from "framer-motion";

export const mainTransition: Transition = {
  stiffness: 100,
  damping: 25,
  mass: 0.5,
  bounce: 0.5,
  type: "spring",
};
