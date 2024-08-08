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
      height="200"
      viewBox="0 0 753 743"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 20, ease: "easeInOut" }}
        d="M193.455 262.521L372.648 300.1M372.648 300.1L556.847 262.521M372.648 300.1V442.9M372.648 442.9L446.227 562.151M372.648 442.9L312.082 562.151M372.648 15C-117.881 15 -90.3518 728 372.648 728C824.635 728 893.71 15 372.648 15ZM376.152 140.264C419.699 140.264 446.227 222.436 376.152 222.436C306.076 222.436 332.605 140.264 376.152 140.264Z"
        stroke="black"
        stroke-width="30"
      />
    </svg>
  );
};
