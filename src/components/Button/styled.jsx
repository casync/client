import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.button)`
  ${({ theme, size = "20px", color }) => css`
    cursor: pointer;
    background-color: ${color ? color : theme.colors.primary};
    padding: 6px 12px;
    color: #fff;
    font-size: ${size};
    border: none;
    display: block;
    margin: 20px auto 0;
    border-radius: 4px;
    font-weight: 700;
  `}
`;
