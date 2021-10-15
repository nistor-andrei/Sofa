import "./App.scss";
import { Auth } from "./components/Auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PrivateRoute } from "./components/routes/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <Auth />
          </PrivateRoute>
          <Route path="/register">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
