import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticating: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATION_START": {
      return {
        user: null,
        isAuthenticating: true,
        error: null,
      };
    }
    case "AUTHENTICATION_SUCCESS": {
      return {
        user: action.payload,
        isAuthenticating: false,
        error: null,
      };
    }
    case "AUTHENTICATION_FAILURE": {
      return {
        user: null,
        isAuthenticating: false,
        error: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        user: null,
        isAuthenticating: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticating: state.isAuthenticating,
        error: state.error,
        authDispatch: dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
