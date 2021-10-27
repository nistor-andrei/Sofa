import "./App.scss";
import { Auth } from "./components/Auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { AuthContextProvider } from "./components/Auth/AuthContext.context";
import { TrendingMovie } from "./components/Movie/Category/Trending";
import { TrendingTvShow } from "./components/TvShow/Category/Trending/Trending";
import { Movie } from "./components/Movie/Movie";
import { PopularMovie } from "./components/Movie/Category/Popular";
import { TopRatedMovie } from "./components/Movie/Category/TopRated";
import { UpcomingMovie } from "./components/Movie/Category/Upcoming";
import { NowPlayingMovie } from "./components/Movie/Category/NowPlaying";
import { Tv } from "./components/TvShow/Tv";

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
            <PrivateRoute exact path="/movie/category/popular">
              <PopularMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/movie/category/top_rated">
              <TopRatedMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/movie/category/upcoming">
              <UpcomingMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/movie/category/now_playing">
              <NowPlayingMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/movie/category/trend">
              <TrendingMovie />
            </PrivateRoute>
            <PrivateRoute exact path="/tv">
              <Tv />
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
