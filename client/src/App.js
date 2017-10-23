import React, { Component } from "react";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import NoMatch from "./NoMatch";
import StreamContainer from "./StreamContainer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import FlatButton from "material-ui/FlatButton";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Stream</h1>
              <p className="App-intro"> - Powered by PopcornTime</p>
            </header> */}
            <div>
              <ul className="horizontal-list">
                <li>
                  <Link to="/stream/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/stream/animes">Animes</Link>
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
    );
  }
}

export default App;
