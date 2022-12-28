import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ReserveContextProvider } from "./context/ReserveContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ReserveContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </ReserveContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
