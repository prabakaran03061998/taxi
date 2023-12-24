import './App.css';
import '@fontsource/inter';
import React from 'react';
import Home from './pages/Home';
import ResponsiveAppBar from './components/AppBar';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Home/>
    </div>
  );
}

export default App;
