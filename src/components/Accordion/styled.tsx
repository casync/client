import { motion } from "framer-motion";
import styled, { DefaultTheme, css } from "styled-components";
import { AccordionProps } from ".";

type StyledProps = {
  theme: DefaultTheme;
} & AccordionProps;

export const Wrapper = styled(motion.section)`
  ${({ theme }: StyledProps) => css`
    color: white;
    cursor: pointer;
    max-width: 300px;
    margin: 20px auto 0;
    user-select: none;
    -webkit-user-select: none;

    // Selector for TITLE
    div:first-child > * {
      background-color: ${theme.colors.gray2};
      /* border-radius: 5px 5px 0 0; */
      /* padding: 5px 10px; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      :first-child::after {
        content: "+";
      }
    }
    // Selector for CONTENT
    div:last-child > * {
      /* cursor: initial; */
      background-color: ${theme.colors.gray6};
      /* padding: 10px 5px; */
      /* border-radius: 0 0 5px 5px; */
      :last-child::after {
        content: "";
      }
    }
  `}
`;
