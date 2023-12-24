import './App.css';
import '@fontsource/inter';
import React from 'react';
import Home from './pages/Home';
import ResponsiveAppBar from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <ResponsiveAppBar />   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
