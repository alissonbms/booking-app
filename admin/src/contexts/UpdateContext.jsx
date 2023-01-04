import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  updateData: null,
  isUpdating: false,
  error: null,
};

export const UpdateContext = createContext(INITIAL_STATE);

const UpdateReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        updateData: action.payload,
        isUpdating: true,
        error: null,
      };
    }

    case "NOT_UPDATE": {
      return {
        useupdateDatarData: null,
        isUpdating: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const UpdateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UpdateReducer, INITIAL_STATE);

  return (
    <UpdateContext.Provider
      value={{
        updateData: state.updateData,
        isUpdating: state.isUpdating,
        updateDispatch: dispatch,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};
