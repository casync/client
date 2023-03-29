import React from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton
        secondary
        large
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
