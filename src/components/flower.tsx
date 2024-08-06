import { motion, useInView } from "framer-motion";
import React from "react";

export const Flower = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only trigger the animation once
    amount: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <svg
      ref={ref}
      width="200"
      height="250"
      viewBox="0 0 479 812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 30, ease: "easeInOut" }}
        d="M144.5 230.766C87.536 218.421 41.2558 201.621 26.5 184C33.5 131.167 78.2 25.5 201 25.5C217.785 25.5 233.045 26.044 247 27.1608M144.5 230.766C197.19 242.185 259.021 249.792 313.5 250.712M144.5 230.766V348.5M313.5 250.712C405.686 252.268 476.822 234.675 447 184C387.771 83.3561 360.67 36.2575 247 27.1608M313.5 250.712V307.5M247 27.1608V133M144.5 348.5V681.5L247 774L313.5 681.5V307.5M144.5 348.5L313.5 307.5"
        stroke="black"
        stroke-width="20"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 30, ease: "easeInOut" }}
        d="M160 445.5L308.5 404.5M160 553.5L308.5 502M160 651L308.5 604.5"
        stroke="black"
        stroke-width="20"
      />
    </svg>
  );
};
