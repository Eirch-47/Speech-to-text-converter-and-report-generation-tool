import React from 'react';
import SpeechToText from './pages/SpeechToText';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App1 from './pages/App1';
import App2 from './pages/App2';
import App3 from './pages/App3';

import "./App.css";


import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
       <Routes>
        <Route path = "/" element={<SpeechToText/>} />
        <Route path = "/App" element={<App1/>} />
        <Route path = "/App2" element={<App2/>} />
        <Route path = "/App3" element={<App3/>} />
       </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;