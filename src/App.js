import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation' 
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

      </Router>
      <div className = "filler">
        
      </div>
      
    </div>
  );
}

export default App;
