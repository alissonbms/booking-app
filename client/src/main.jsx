import React from "react";
import ReactDOM from "react-dom/client";
import AlertTemplate from "react-alert-template-basic";
import { Provider, positions } from "react-alert";

import App from "./App";

//Utilities
import { SearchContextProvider } from "./contexts/SearchContext";
import { ReserveContextProvider } from "./contexts/ReserveContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UpdateContextProvider } from "./contexts/UpdateContext";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReserveContextProvider>
        <SearchContextProvider>
          <UpdateContextProvider>
            <DarkModeProvider>
              <SidebarProvider>
                <Provider template={AlertTemplate} {...options}>
                  <App />
                </Provider>
              </SidebarProvider>
            </DarkModeProvider>
          </UpdateContextProvider>
        </SearchContextProvider>
      </ReserveContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
