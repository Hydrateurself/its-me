import { motion, useInView } from "framer-motion";
import React from "react";

export const World = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true, // Only trigger the animation once
    amount: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <svg
      ref={ref}
      width="200"
      height="200"
      viewBox="0 0 800 798"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 20, ease: "easeInOut" }}
        d="M119 135.5C126.833 143.5 161.6 166.6 238 195C333.5 230.5 375 221.5 396 221.5C417 221.5 524 216 536 195C548 174 476.5 243 673 135.5M14.5 400.5H780.5M119 648C207.333 582.5 441.8 490.8 673 648M396 22C255 154.167 57.6 490.6 396 779M396 22C744 386.8 541 678.667 396 779M396 22V779"
        stroke="black"
        stroke-width="30"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 20, ease: "easeInOut" }}
        d="M399 19.0001C1.12549 -2.99096 -215 686.501 399 776C937.8 735.6 887.5 46.0001 399 19.0001Z"
        stroke="black"
        stroke-width="30"
      />
    </svg>
  );
};
