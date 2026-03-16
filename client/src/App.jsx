import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Labs from './components/Labs';
import Dashboard from './components/Dashboard';
import OnboardingVideo from './components/OnboardingVideo';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          <span className="logo-icon">🧠</span>
          AI Educational Labs
        </NavLink>
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/labs" className={({ isActive }) => isActive ? 'active' : ''}>Labs</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to="/onboarding" className={({ isActive }) => isActive ? 'active' : ''}>Get Started</NavLink></li>
          <li><NavLink to="/tools" className={({ isActive }) => isActive ? 'active' : ''}>Tools</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/onboarding" element={<OnboardingVideo />} />
        <Route path="/tools" element={<PasswordGenerator />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 AI Educational Labs. Building the future of AI literacy, one lab at a time.</p>
      </footer>
    </Router>
  );
}

export default App;
