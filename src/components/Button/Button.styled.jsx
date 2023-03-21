import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 700;
`;

export default StyledButton;
