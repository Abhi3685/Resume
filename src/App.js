import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Sidebar } from './components/Sidebar';
import { BgLines } from './components/BgLines';

function App() {
  return (
    <Router>
      <Sidebar />
      <BgLines />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
