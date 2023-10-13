import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Recharts from './components/Recharts';
import NotFoundPage from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ height: '100vh' }}>
          <Routes>
            <Route exact path="/" element={<Recharts />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
