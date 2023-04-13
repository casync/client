import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.button)`
  ${({ theme, size }) => css`
    cursor: pointer;
    border: solid 2px;
    padding: 10px 20px;
    color: #fff;
    font-size: ${size ? size : "16px"};
    font-weight: 500;
    display: block;
    margin: 20px auto 0;
    border-radius: 16px;
    ${({ color, variant }) =>
      variant === "solid" &&
      `
      background-color: ${color ? color : theme.colors.primary};
      border-color: ${color ? color : theme.colors.primary};
    `}
    ${({ color, variant }) =>
      variant === "ghost" &&
      `
      background-color: transparent;
      color: ${color ? color : theme.colors.primary};
      border-color: ${color ? color : theme.colors.primary};
    `}
    ${({ color, variant }) =>
      variant === "text" &&
      `
      background-color: transparent;
      border: none;
      color: ${color ? color : theme.colors.primary};
      text-decoration: underline;
    `}
  `},
`;
