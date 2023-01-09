import { createContext } from "react";

const INITIAL_STATE = {
  propertyPhoto: JSON.parse(localStorage.getItem("propertyPhoto")) || null,
  propertyName: JSON.parse(localStorage.getItem("propertyName")) || null,
  valuePayed: JSON.parse(localStorage.getItem("valuePayed")) || null,
};

export const TransactionContext = createContext(INITIAL_STATE);

export const TransactionContextProvider = ({ children }) => {
  return (
    <TransactionContext.Provider
      value={{
        propertyPhoto: state.propertyPhoto,
        propertyName: state.propertyName,
        valuePayed: state.valuePayed,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
