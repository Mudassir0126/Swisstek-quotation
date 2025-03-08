import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quotation from './Pages/Test_quotation.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/quotation" element={<Quotation/>} />
          <Route path="/pricing" element={<Quotation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
