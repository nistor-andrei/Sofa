import "./App.scss";
import { Auth } from "./components/Auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { AuthContextProvider } from "./components/Auth/AuthContext.context";
import { TrendingMovie } from "./components/Movie/Category/Trending/Trending";
import { TrendingTvShow } from "./components/TvShow/Category/Trending/Trending";
import { Movie } from "./components/Movie/Movie";

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
            <PrivateRoute exact path="/movie">
              <Movie />
            </PrivateRoute>
            <PrivateRoute exact path="/movie/category/trend">
              <TrendingMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/tv/category/trend">
              <TrendingTvShow />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
