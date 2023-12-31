import React, { createContext, useContext,  useReducer } from "react";

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  
  const state = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
  
};

export const useStateValue = () => useContext(StateContext);
