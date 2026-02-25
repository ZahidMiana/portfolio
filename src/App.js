import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import WhatsAppFloat from "./components/whatsappFloat/WhatsAppFloat";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
        <WhatsAppFloat />
      </>
    </ThemeProvider>
  );
}

export default App;
