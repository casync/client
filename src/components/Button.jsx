import { styled } from "@linaria/react";
import React, { useState } from "react";
import { withTheme } from "../theme/theme";

const StyledButton = styled.button`
  color: #FFF;
  background: ${(props) => props.theme.colors.primary};
  padding: 6px 12px;
  border: white;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
`;

export const Button = withTheme(({ theme, children }) => (
  <StyledButton theme={theme}>{children}</StyledButton>
));
