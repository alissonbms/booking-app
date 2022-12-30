import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Utilities
import { SidebarProvider } from "../src/contexts/SidebarContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </DarkModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
