import * as React from "react";
import PropTypes from "prop-types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload.user,
        userToken: action.payload.userToken,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        userToken: "",
      };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  userToken: "",
};

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = React.useReducer(AppReducer, {}, () => {
    const localData = sessionStorage.getItem("react_data");
    return localData ? JSON.parse(localData) : initialState;
  });

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        userToken: state.userToken,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.object,
};
