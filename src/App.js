import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './layout/Home/Home'
import Finished from './layout/Finished/Finished'
import Exam from './layout/Exam/Exam'
import Error from './layout/Error/Error';

export default function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path="/exam/:id" element={<Exam />} />
          <Route path="/error" element={<Error />} />
          <Route path ="/finished" element={<Finished />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

