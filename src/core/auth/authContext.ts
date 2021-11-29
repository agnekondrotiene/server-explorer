import { createContext } from "react";

const context = createContext<{
  token: string | null;
  setToken: (token: string | null) => void;
}>({ token: null, setToken: () => {} });

export default context;
