import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Invalid from "./Invalid";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={Invalid} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
