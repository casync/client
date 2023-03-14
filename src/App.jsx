import { accordion } from "./components/data";
import { styled } from "@linaria/react";
import { withTheme } from "./theme/theme";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Header = withTheme(StyledHeader);

function App() {
  return (
    <div className="App">
      <Header>Test</Header>
      <Button>Button</Button>
      <div className="accordion-container">
        <Accordion
          content={accordion[0].content}
          title={accordion[0].title}
        />
        <Accordion
          content={accordion[1].content}
          title={accordion[1].title}
        />
        <Accordion
          content={accordion[2].content}
          title={accordion[2].title}
        />
      </div>
    </div>
  );
}

export default App;
