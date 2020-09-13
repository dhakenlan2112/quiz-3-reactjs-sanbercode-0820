import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Index from './Component/Index'
import Nav from './Component/Nav'
import Footer from './Component/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Index />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
