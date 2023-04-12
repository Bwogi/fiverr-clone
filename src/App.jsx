import React from 'react'
import './index.css'
import Home from './pages/Home/home'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Paras from './components/Paras';


const App = () => {
  return (
      <Router>
      <Navbar /> 
      <Paras />
      </Router>
  )
}

export default App