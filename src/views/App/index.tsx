// 项目 主页面
import React from "react";
import About from "@views/About";
import Home from "@views/Home";
import Arts from "@views/Arts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props?: any) {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">index</Link></li>
          <li><Link to="/Topics">Topics</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/Topics"><Arts /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
