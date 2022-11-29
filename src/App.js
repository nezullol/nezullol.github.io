import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Nav from './nav.js';
import Home from './pages/Home.js';


import Tetris from './components/Tetris';

const App = () => (
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
);

export default App;
