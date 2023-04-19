import GlobalStyles from "./theme/Global";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { Accordion } from "./components/Accordion";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Button color="#282828">Button</Button>
        <Accordion
          title={<h1>Default title</h1>}
          content={
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              maiores tempore dolorem nemo molestiae corporis quia
            </p>
          }
        ></Accordion>
      </>
    </ThemeProvider>
  );
}

export default App;
