import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apps from './Apps';
import Home from './Home';
import Games from './Games'
import Gamecarddetails from './Gamecarddetails';
import Gameseeall from './Gameseeall';
import Library from './Library';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Gamecarddetails/>} />
      <Route path="/Seeall" element={<Gameseeall />} />
      <Route path="/library" element={<Library />} />

      <Route path="/Apps" element={<Apps />} />
      <Route path="/Games" element={<Games />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
