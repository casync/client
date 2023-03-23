import React, { useState } from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton
        whileTap={{
          y: 1,
        }}
      >
        {props.children}
      </StyledButton>
    </>
  );
}
