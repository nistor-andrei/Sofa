import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext.context';

export function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return auth ? children : <Redirect to="login" />;
      }}
    />
  );
}
