"use client";
import { useEffect } from "react";
import "./mouse-effect.scss";
import { useTheme } from "@mui/material";

function MouseEffect() {
  const {
    palette: { mode },
  } = useTheme();
  let gradColor: string;
  switch (mode) {
    case "light":
      gradColor = "rgba(140, 140, 140, ";
      break;
    case "dark":
      gradColor = "rgba(29, 78, 216, ";
      break;
  }

  useEffect(() => {
    const eventFunction = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const diagonal = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );

      const distanceToCenter = Math.sqrt(
        Math.pow(mouseX - window.innerWidth / 2, 2) +
          Math.pow(mouseY - window.innerHeight / 2, 2)
      );

      const howFar = distanceToCenter / (diagonal / 2);

      const container = document.getElementById(
        "mouseEffectContainer"
      ) as HTMLElement;

      container.style.backgroundImage = `radial-gradient(${
        200 + howFar * 500
      }px at ${mouseX}px ${mouseY}px, ${gradColor} ${
        0.1 + howFar * 0.35
      }), transparent 80%)`;
    };

    window.addEventListener("mousemove", eventFunction);
    return () => {
      window.removeEventListener("mousemove", eventFunction);
    };
  }, [mode]);

  return "";
}

export default MouseEffect;
