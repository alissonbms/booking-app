import { add } from "date-fns/esm";
import { createContext, useReducer, useEffect } from "react";

const tomorrowFns = add(new Date(), {
  days: 1,
});

const INITIAL_STATE = {
  destinationContext: undefined,
  typeContext: undefined,
  datesContext: JSON.parse(localStorage.getItem("datesStorage")) || [
    {
      startDate: new Date(),
      endDate: tomorrowFns,
    },
  ],
  optionsContext: {
    adult: undefined,
    children: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH": {
      return action.payload;
    }
    case "RESET_SEARCH": {
      return {
        destinationContext: undefined,
        typeContext: undefined,
        datesContext: [
          {
            startDate: new Date(),
            endDate: tomorrowFns,
          },
        ],
        optionsContext: {
          adult: undefined,
          children: undefined,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("datesStorage", JSON.stringify(state.datesContext));
  }, [state.datesContext]);

  return (
    <SearchContext.Provider
      value={{
        destinationContext: state.destinationContext,
        datesContext: state.datesContext,
        optionsContext: state.optionsContext,
        typeContext: state.typeContext,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
