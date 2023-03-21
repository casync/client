import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import { Accordion } from "./components/Accordion/Accordion";
import { theme } from "./theme/theme";
import GlobalStyles from "./theme/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Button>Button</Button>
        <Accordion
          title={<h1>Hello</h1>}
          content={
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maiores tempore dolorem nemo molestiae corporis quia animi
            </p>
          }
        ></Accordion>
      </>
    </ThemeProvider>
  );
}

export default App;
