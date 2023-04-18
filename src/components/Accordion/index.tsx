import { motion } from "framer-motion";
import React, { useState } from "react";
import * as S from "./styled";

type Props = {
  title: string | React.ReactNode,
  content: string | React.ReactNode,
}

export function Accordion({ title, content } : Props) {
  const [toggle, setToggle] = useState(false);

  const accordionToggle = () => {
    setToggle((oldState) => !oldState);
  };

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
