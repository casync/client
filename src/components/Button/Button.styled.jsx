import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  scale: 1.25;
  color: #fff;
  border: none;
  display: block;
  margin: 20px auto 0;
  border-radius: 4px;
  font-weight: 700;
`;

export default StyledButton;
