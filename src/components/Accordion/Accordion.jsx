import { motion } from "framer-motion";
import React, { useState } from "react";
import StyledAccordion from "./Accordion.styled";

export function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const accordionToggle = () => {
    setToggle((oldState) => !oldState);
  };

  return (
    <StyledAccordion>
      <motion.div onClick={accordionToggle}>{title}</motion.div>
      <motion.div layout>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {content}
          </motion.div>
        )}
      </motion.div>
    </StyledAccordion>
  );
}
