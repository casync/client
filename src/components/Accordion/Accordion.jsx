import React, { useState } from "react";
import StyledAccordion from "./Accordion.styled";

export function Accordion({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const accordionToggle = () => {
    setToggle((oldState) => {
      return !oldState;
    });
  };

  return (
    <StyledAccordion>
      <div onClick={accordionToggle}>{title}</div>
      <div>{toggle && content}</div>
    </StyledAccordion>
  );
}
