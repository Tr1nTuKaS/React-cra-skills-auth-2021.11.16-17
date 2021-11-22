import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router";
import { getToken } from "../utils/Fetch";

const AuthContext = React.createContext({
  email: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

function AuthProvider({ children }) {
  const history = useHistory();
  const [token, setToken] = useState(getToken());
  const isLoggedIn = !!token;

  const login = (tokenArg) => {
    localStorage.setItem("skillUserToken", tokenArg);
    setToken(tokenArg);
    toast.success("Login success");
    history.replace("/home");
  };

  const logout = () => {
    localStorage.removeItem("skillUserToken");
    setToken(null);
  };

  const finalContextValues = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={finalContextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
