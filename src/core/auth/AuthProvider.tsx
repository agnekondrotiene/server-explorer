import React, { PropsWithChildren } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const token = localStorage.getItem("token");
  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
