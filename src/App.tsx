import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import {Background, Usa} from './Main'

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
      <Route path="/" exact component={Main}/>
    </Router>
  );
}

export default App;
