import { PropsWithChildren } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import useAuth from "../core/auth/useAuth";

const PrivateRoute = ({ children, ...rest }: PropsWithChildren<RouteProps>) => {
  const location = useLocation();
  const { token } = useAuth();

  if (!token) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...rest} render={() => children} />;
};

export default PrivateRoute;
