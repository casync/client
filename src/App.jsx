import { styled } from "@linaria/react";
import { Button } from "./components";
import { withTheme } from "./theme/theme";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Header = withTheme(StyledHeader);

function App() {
  return (
    <div className="App">
      <Header>Test</Header>
      <Button color="blue">test</Button>
      <Typography>asdasdasd</Typography>
    </div>
  );
}

export default App;
