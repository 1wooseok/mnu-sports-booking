import React, { useReducer, useContext } from "react";

const initialFetchState = {
  loading: false,
  data: null,
  error: null,
};

const loadingState = state => ({
  ...state,
  loading: true,
  error: null,
});

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error,
});

function fetchReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return loadingState(state);
    case "SUCCESS":
      return success(action.payload);
    case "ERROR":
      return error(action.payload);
    default:
      throw new Error(`Unable Action Type : ${action.type}`);
  }
}

export const fetchStateContext = React.createContext(null);
export const fetchDispatchContext = React.createContext(null);

export function FetchContextProvider({ children }) {
  const [state, dispatch] = useReducer(fetchReducer, initialFetchState);

  return (
    <fetchStateContext.Provider value={state}>
      <fetchDispatchContext.Provider value={dispatch}>
        {children}
      </fetchDispatchContext.Provider>
    </fetchStateContext.Provider>
  );
}

export function UsefetchState() {
  const context = useContext(fetchStateContext);
  if (context === undefined) {
    throw new Error("useFetch must be used within a FetchContextProvider");
  }
  return context;
}

export function UsefetchDispatch() {
  const dispatch = useContext(fetchDispatchContext);
  if (!dispatch) {
    throw new Error(
      "useFetchsDispatch must be used within a FetchContextProvider"
    );
  }
  return dispatch;
}