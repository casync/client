import styled from "styled-components";

const StyledAccordion = styled.section`
  background-color: ${({ theme }) => theme.colors.gray6};
  color: white;
  cursor: pointer;
  max-width: 400px;
  p {
    background-color: #b8b8b8;
  }
`;

export default StyledAccordion;
