import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation' 
import './App.css';
import Home from './pages/Home'
import Memory from './pages/Memory'
import Pendu from './pages/Pendu'

function App() {
  return (
    <div className="App">
      <Router className = "dark wide">
        <Navigation />
        <Switch>
        <Route path = "/myreactwebsite" exact component = {() => <Home/>} />
        <Route path = "/" exact component = {() => <Home/>} />
        
        <Route path = "/myreactwebsite/memory" exact component = {() => <Memory/>} />
        <Route path = "/myreactwebsite/pendu" exact component = {() => <Pendu/>} />

        </Switch>

      </Router>
        
      
      
    </div>
  );
}

export default App;
