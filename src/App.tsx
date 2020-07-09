import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import {Background, Usa} from './Main'
import Day2 from './Day2'
import Day3 from './Day3'
import Root from './Root'

const Main = () => {
  return (
    <Background>
      <Usa/>
    </Background>
  )
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Root}/>
      <Route path="/day1" exact component={Main}/>
      <Route path="/day2" exact component={Day2}/>
      <Route path="/day3" exact component={Day3}/>
    </Router>
  );
}

export default App;
