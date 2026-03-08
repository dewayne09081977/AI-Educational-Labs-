import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Labs from './components/Labs';
import Dashboard from './components/Dashboard';
import OnboardingVideo from './components/OnboardingVideo';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/labs">Labs</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/onboarding">Onboarding</Link></li>
            <li><Link to="/password-gen">Password Generator</Link></li>
          </ul>
        </nav>

        <main style={{ padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Welcome to AI Educational Labs</h1>
                <p>Interactive learning experiences powered by AI.</p>
              </div>
            } />
            <Route path="/labs" element={<Labs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<OnboardingVideo />} />
            <Route path="/password-gen" element={<PasswordGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
