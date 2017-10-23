import React from "react";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import NoMatch from "./NoMatch";
import StreamContainer from "./StreamContainer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div>
            <ul className="horizontal-list">
              <li>
                <Link to="/stream/movies">Movies</Link>
              </li>
              <li>
                <Link to="/stream/shows">Shows</Link>
              </li>
            </ul>
          </div>
          <br />
          <Switch>
            <Route exact path="/" component={StreamContainer} />
            <Route exact path="/stream/:type" component={StreamContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default App;
