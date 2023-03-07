import { styled } from "@linaria/react";
import { withTheme } from "./theme/theme";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Header = withTheme(StyledHeader);

function App() {
  return (
    <div className="App">
      <Header>Test</Header>
    </div>
  );
}

export default App;
