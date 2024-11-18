import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
