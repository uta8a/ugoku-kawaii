import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { Background, Usa } from "./Main";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Root from "./Root";

const Main = () => {
  return (
    <Background>
      <Usa />
    </Background>
  );
};

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Root} />
      <Route path="/day1" exact component={Main} />
      <Route path="/day2" exact component={Day2} />
      <Route path="/day3" exact component={Day3} />
      <Route path="/day4" exact component={Day4} />
      <Route path="/day5" exact component={Day5} />
    </Router>
  );
}

export default App;
