import "./App.css";
import { Auth } from "./components/Auth/Auth";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PrivateRoute } from "./components/routes/PrivateRoute";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/register">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
