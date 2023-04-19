import { motion } from "framer-motion";
import { useState } from "react";
import * as S from "./styled";

export type AccordionProps = {
  title: any;
  content: any;
};

export function Accordion({ title, content }: AccordionProps) {
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
