import { styled } from "@linaria/react";
import React from "react";
import { withTheme } from "../theme/theme";

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.blueDark};
  background: #FFF;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const Button = withTheme(({ theme, children }) => (
  <StyledButton theme={theme}>{children}</StyledButton>
));
