import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation' 
import './App.css';
import Home from './pages/Home'
import Memory from './pages/Memory'

function App() {
  return (
    <div className="App">
      <Router className = "dark">
        <Navigation />
        <Switch>
        <Route path = "/" exact component = {() => <Home/>} />
        <Route path = "/memory" exact component = {() => <Memory/>} />

        </Switch>

      </Router>
        
      
      
    </div>
  );
}

export default App;
