import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Resultpage from "./components/ResultPage/ResultPage";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resultPage" component={Resultpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
