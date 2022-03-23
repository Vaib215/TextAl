import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import FormComp from './Components/FormComp';
import About from './Components/About';
import Error404 from './Components/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  document.querySelector('body').classList = `bg-${
    mode === 'light' ? 'dark' : 'light'
  } text-${mode}`;

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar title="TextAl" toggleMode={toggleMode} mode={mode} />
  <div className="container">
        <Routes>
          <Route path="/" element={<FormComp />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
  </div>
      </div>
    </>
  );
}
