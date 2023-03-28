import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../theme/theme";

const StyledButton = styled(motion.button)`
  cursor: pointer;
  background-color: ${(props) =>
    props.secondary ? theme.colors.secondary : theme.colors.primary};
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
