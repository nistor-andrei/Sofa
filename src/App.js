import './App.scss';
import { Auth } from './components/Auth/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { AuthContextProvider } from './components/Auth/AuthContext.context';
import { Trending } from './components/Movie/Trending';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/register">
              <Auth />
            </Route>
            <PrivateRoute exact path="/movie/category/trend">
              <Trending />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
