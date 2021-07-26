import * as React from "react";
import { AppActions, ActionType, User } from "./actions";

interface IAppState {
  user: User|null;
  userToken: string;
}

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<AppActions>;
}

const initialState: IAppState = {
  user: null,
  userToken: ""
};

export const AppContext = React.createContext<IAppContext>({
  state: initialState,
  dispatch: () => null
});

const AppReducer = (state: IAppState, action: AppActions) => {
  switch (action.type) {
    case ActionType.LoginUser:
      return {
        ...state,
        user: action.payload.user,
        userToken: action.payload.userToken,
      };
    case ActionType.LogoutUser:
      return {
        ...state,
        user: null,
        userToken: "",
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(AppReducer, {}, () => {
    const localData = sessionStorage.getItem("react_data");
    return localData ? JSON.parse(localData) : initialState;
  });

  return (
    <AppContext.Provider value={{ state, dispatch }} >
      {children}
    </AppContext.Provider>
  );
};

