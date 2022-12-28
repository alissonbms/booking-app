import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Utilities
import { SidebarProvider } from "../src/contexts/SidebarContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
