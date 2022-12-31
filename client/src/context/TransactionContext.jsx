import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  propertyPhoto: JSON.parse(localStorage.getItem("propertyPhoto")) || null,
  propertyName: JSON.parse(localStorage.getItem("propertyName")) || null,
  valuePayed: JSON.parse(localStorage.getItem("valuePayed")) || null,
};

export const UNDEFINED_STATE = {
  propertyPhoto: undefined,
  propertyName: undefined,
  valuePayed: undefined,
};

export const TransactionContext = createContext(INITIAL_STATE);

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "RESET_TRANSACTION": {
      return {
        propertyPhoto: undefined,
        propertyName: undefined,
        valuePayed: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export const TransactionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, INITIAL_STATE);

  // useEffect(() => {
  //   localStorage.setItem("customer", JSON.stringify(state.customer));
  //   localStorage.setItem("propertyPhoto", JSON.stringify(state.propertyPhoto));

  //   localStorage.setItem("valuePayed", JSON.stringify(state.valuePayed));
  //   localStorage.setItem(
  //     "transactionDate",
  //     JSON.stringify(state.transactionDate)
  //   );
  // }, [
  //   state.customer,
  //   state.propertyPhoto,
  //   state.propertyName,
  //   state.valuePayed,
  //   state.transactionDate,
  // ]);

  return (
    <TransactionContext.Provider
      value={{
        propertyPhoto: state.propertyPhoto,
        propertyName: state.propertyName,
        valuePayed: state.valuePayed,
        transactionDispatch: dispatch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
