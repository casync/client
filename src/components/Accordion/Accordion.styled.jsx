import { motion } from "framer-motion";
import styled from "styled-components";

const StyledAccordion = styled(motion.section)`
  color: white;
  cursor: pointer;
  max-width: 300px;
  margin: 20px auto 0;
  user-select: none;
  -webkit-user-select: none;

  // Selector for TITLE
  div:first-child > * {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px 5px 0 0;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    :first-child::after {
      content: "+";
    }
  }
  // Selector for CONTENT
  div:last-child > * {
    cursor: initial;
    background-color: ${({ theme }) => theme.colors.gray3};
    padding: 10px 5px;
    border-radius: 0 0 5px 5px;
    :last-child::after {
      content: "";
    }
  }
`;

export default StyledAccordion;
