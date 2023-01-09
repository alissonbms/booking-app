import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  allDatesContext: JSON.parse(localStorage.getItem("allDatesStorage")) || [],
  selectedRoomsContext:
    JSON.parse(localStorage.getItem("selectedRoomsStorage")) || [],
};

export const ReserveContext = createContext(INITIAL_STATE);

const ReserveReducer = (state, action) => {
  switch (action.type) {
    case "NEW_RESERVE": {
      return action.payload;
    }
    case "RESET_RESERVE": {
      return {
        allDatesContext: [],
        selectedRoomsContext: [],
      };
    }
    default: {
      return state;
    }
  }
};

export const ReserveContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReserveReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem(
      "allDatesStorage",
      JSON.stringify(state.allDatesContext)
    );
    localStorage.setItem(
      "selectedRoomsStorage",
      JSON.stringify(state.selectedRoomsContext)
    );
  }, [state.allDatesContext, state.selectedRoomsContext]);

  return (
    <ReserveContext.Provider
      value={{
        allDatesContext: state.allDatesContext,
        selectedRoomsContext: state.selectedRoomsContext,
        dispatch,
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};
