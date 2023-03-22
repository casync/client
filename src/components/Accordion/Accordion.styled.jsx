import { motion } from "framer-motion";
import styled from "styled-components";

const StyledAccordion = styled(motion.section)`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  cursor: pointer;
  max-width: 400px;
  margin: 20px auto 0;
  border-radius: 5px;
  user-select: none;
  -webkit-user-select: none;

  // Selector for TITLE
  div:first-child * {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after {
      content: "+";
    }
  }
  // Selector for CONTENT
  div:last-child * {
    cursor: initial;
    background-color: ${({ theme }) => theme.colors.gray3};
    padding: 10px 5px;
    border-radius: 0 0 5px 5px;
  }
`;

export default StyledAccordion;
