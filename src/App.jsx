import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Button>Button</Button>
      </>
    </ThemeProvider>
  );
}

export default App;
