import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import FormComp from './Components/FormComp';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [comp, setComp] = useState(<FormComp mode={mode} />);
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
  const setAbout = () => {
    setComp(<About mode={mode} />);
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.about').classList.add('active');
  };
  const setHome = () => {
    setComp(<FormComp mode={mode} />);
    document.querySelector('.about').classList.remove('active');
    document.querySelector('.home').classList.add('active');
  };
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar
          title="TextAl"
          setAbout={setAbout}
          setHome={setHome}
          toggleMode={toggleMode}
          mode={mode}
        />
        <div className="container my-4 py-4">{comp}</div>
      </div>
    </>
  );
}

export default App;
