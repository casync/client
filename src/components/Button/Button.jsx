import React, { useState } from "react";
import StyledButton from "./Button.styled";

export function Button(props) {
  return (
    <>
      <StyledButton>{props.children}</StyledButton>
    </>
  );
}
