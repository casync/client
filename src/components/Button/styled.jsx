import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.button)`
  ${({ theme, color }) => css`
    cursor: pointer;
    border: solid 2px;
    padding: 10px 20px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    background-color: ${color ? color : theme.colors.primary};
    border-radius: 16px;
    padding: 10px 20px;
    display: block;
    margin: 20px auto 0;
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
    ${({ size }) =>
      size === "large" &&
      `
      font-size: 18px;
      border-radius: 20px;
      padding: 12px 24px;
    `}
    ${({ size }) =>
      size === "medium" &&
      `
      font-size: 16px;
      border-radius: 16px;
      padding: 10px 20px;
    `}
    ${({ size }) =>
      size === "small" &&
      `
      font-size: 14px;
      border-radius: 14px;
      padding: 10px 16px;
    `}
  `},
`;
