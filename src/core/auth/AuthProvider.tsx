import { PropsWithChildren, useState } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
