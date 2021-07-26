export enum ActionType {
  LoginUser = "LOGIN_USER",
  LogoutUser = "LOGOUT_USER",
}

export type User = {
  username: string;
};

interface ILoginUser {
  type: ActionType.LoginUser;
  payload: {user: User|null, userToken: string};
}

interface ILogoutUser {
  type: ActionType.LogoutUser;
}

export const LoginUser = (user: User|null, userToken: string): ILoginUser => ({
  type: ActionType.LoginUser,
  payload: {user, userToken}
});

export const LogoutUser = (): ILogoutUser => ({
  type: ActionType.LogoutUser,
});

export type AppActions = ILoginUser | ILogoutUser;