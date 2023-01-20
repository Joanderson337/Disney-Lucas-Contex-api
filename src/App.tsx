import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { defaultTheme } from "./styles/theme";
import { Router } from "./routes/Router";
import ModalContextProvider from "./context/modal";

export function App() {
  return (
    <ModalContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </ModalContextProvider>
  );
}
