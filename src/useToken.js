import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const userToken = sessionStorage.getItem("react_auth_token");
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("react_auth_token", userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
