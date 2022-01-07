import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import {Homepage} from './homepage/homepage'


function App() {
  
  return (
    <div className="app md:p-4 px-8 py-6 overflow-hidden xxsm:p-1">
        <Router>
          <Homepage />
        </Router>
       </div>
  );
}

export default App;
