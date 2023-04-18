import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type BtnProps = {
  color: string,
  variant: string,
  size: string,
  theme: any,
}

export const Wrapper = styled(motion.button)<BtnProps>`
${({theme, color, size, variant}) => css`
    margin: 20px auto 0;
    cursor: pointer;
    background-color: ${color ? color : theme.colors.primary};
    color: #fff;
    border: none;
    font-weight: 500;
    font-size: 16px;
    padding: 10px 20px;
    border: solid 2px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    ${ variant === "solid" && `
      background-color: ${color ? color : theme.colors.primary};
      border-color: ${color ? color : theme.colors.primary};
    `}
    ${ variant === "ghost" && `
      background-color: transparent;
      color: ${color ? color : theme.colors.primary};
      border-color: ${color ? color : theme.colors.primary};
    `}
    ${ variant === "text" && `
      background-color: transparent;
      color: ${color ? color : theme.colors.primary};
      border-color: transparent;
      text-decoration: underline;
    `}
    ${ size == "small" && `
      font-size: 14px;
      border-radius: 14px;
      padding: 8px 16px;
      gap: 4px;
    `}
    ${ size == "medium" && `
      font-size: 16px;
      border-radius: 16px;
      padding: 10px 20px;
      gap: 6px;
    `}
    ${ size == "large" && `
      font-size: 18px;
      border-radius: 20px;
      padding: 12px 24px;
      gap: 8px;
    `}
  `}
`

