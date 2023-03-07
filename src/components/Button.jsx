import { styled } from "@linaria/react";
import React from "react";
import { withTheme } from "../theme/theme";

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background: #000;
`;

export const Button = withTheme(({ theme, children }) => (
  <StyledButton theme={theme}>{children}</StyledButton>
));
