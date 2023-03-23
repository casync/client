import React, { useState } from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton
        whileTap={{
          scale: 0.9,
        }}
      >
        {props.children}
      </StyledButton>
    </>
  );
}
