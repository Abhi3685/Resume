import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';

import { Home } from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Sidebar } from './components/Sidebar';
import { BgLines } from './components/BgLines';

function initializeAnalytics(){
  ReactGA.initialize('UA-161523844-1');
  ReactGA.pageview(window.location.pathname);
}

function App() {
  initializeAnalytics();
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
