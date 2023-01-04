import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Utilities
import { SidebarProvider } from "../src/contexts/SidebarContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import AlertTemplate from "react-alert-template-basic";
import { Provider, positions } from "react-alert";
import { UpdateContextProvider } from "./contexts/UpdateContext";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UpdateContextProvider>
        <DarkModeProvider>
          <SidebarProvider>
            <Provider template={AlertTemplate} {...options}>
              <App />
            </Provider>
          </SidebarProvider>
        </DarkModeProvider>
      </UpdateContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
