import { Route, Redirect } from "react-router-dom";

export function isLogin() {
  return false;
}

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return isLogin() ? children : <Redirect to="login" />;
      }}
    />
  );
}
