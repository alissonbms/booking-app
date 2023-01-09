import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return { darkMode: false };
    }
    case "DARK": {
      return { darkMode: true };
    }
    default: {
      return state;
    }
  }
};

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ dispatch, darkMode: state.darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
