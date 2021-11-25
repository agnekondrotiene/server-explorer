import { useContext } from "react";
import authContext from "./authContext";

const useAuth = () => {
  const contextValue = useContext(authContext);

  return contextValue;
};

export default useAuth;
