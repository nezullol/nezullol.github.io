import './App.css';
import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Nav from './nav.js';
import Tetris from './pages/Tetris.js';
import Home from './pages/Home.js';


export default class App extends React.Component {

  render () {
    return (
    <Router>
    <div className="App">
    <Nav />
      <Routes>

        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/tetris" element={<Tetris />}>
        </Route>

      </Routes>
      </div>
    </Router>
)
  };
}
