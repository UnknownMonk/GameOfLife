import React from 'react';
import Game from './Game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Rules from './Rules';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/rules" component={Rules} />
        <Route exact path="/about" component={About} />
        <Game />
      </div>
    </Router>
  );
}

export default App;
