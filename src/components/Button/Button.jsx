import React, { useState } from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton
        whileTap={{
          scale: 0.95,
        }}
      >
        {props.children}
      </StyledButton>
    </>
  );
}
