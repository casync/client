import React from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton
        secondary
        whileTap={{
          y: 1,
          scale: 0.9,
        }}
      >
        {props.children}
      </StyledButton>
    </>
  );
}
