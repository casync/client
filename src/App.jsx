import GlobalStyles from "./theme/Global";
import { theme } from "./theme/theme";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import { Accordion } from "./components/Accordion/Accordion";
import { motion } from "framer-motion";

function App() {
  const child = {
    variantA: { bottom: 0, right: 0, rotate: 0 },
    variantB: { top: 0, left: 0 },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Button>Button</Button>
        <Accordion
          title={<h1>Default title</h1>}
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
