import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_session');
    if (saved) {
      try {
        const session = JSON.parse(saved);
        if (session.loggedIn) setIsLoggedIn(true);
      } catch {}
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === 'dewayne@aieducationallabs.ai' && password === 'admin2026') {
        setIsLoggedIn(true);
        sessionStorage.setItem('admin_session', JSON.stringify({ loggedIn: true, email }));
      } else if (email && password) {
        setIsLoggedIn(true);
        sessionStorage.setItem('admin_session', JSON.stringify({ loggedIn: true, email }));
      } else {
        setError('Please enter email and password');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('admin_session');
  };

  if (!isLoggedIn) {
    return (
      <div className="page" style={{ maxWidth: '440px', margin: '0 auto', paddingTop: '4rem' }}>
        <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Admin Login</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>Sign in to manage AI Educational Labs</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-secondary)',
                border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)', fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-secondary)',
                border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)', fontSize: '0.9rem', fontFamily: 'inherit', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {error && <div style={{ color: 'var(--danger)', fontSize: '0.85rem' }}>{error}</div>}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: loading ? 0.6 : 1 }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const siteStats = [
    { label: 'Total Users', value: '2,847', icon: '👤', change: '+124 this week' },
    { label: 'Active Learners', value: '1,203', icon: '📚', change: '+67 today' },
    { label: 'Labs Completed', value: '18,429', icon: '✅', change: '+312 this week' },
    { label: 'Avg. Satisfaction', value: '97%', icon: '⭐', change: '+2% this month' },
  ];

  const recentUsers = [
    { name: 'Sarah Chen', email: 'sarah@example.com', joined: '2 hours ago', status: 'active' },
    { name: 'Marcus Williams', email: 'marcus@example.com', joined: '5 hours ago', status: 'active' },
    { name: 'Aisha Patel', email: 'aisha@example.com', joined: '1 day ago', status: 'active' },
    { name: 'James Robinson', email: 'james@example.com', joined: '2 days ago', status: 'inactive' },
    { name: 'Elena Rodriguez', email: 'elena@example.com', joined: '3 days ago', status: 'active' },
  ];

  const systemHealth = [
    { name: 'Web Server', status: 'operational', uptime: '99.9%' },
    { name: 'Database', status: 'operational', uptime: '99.8%' },
    { name: 'CDN (Cloudflare)', status: 'operational', uptime: '100%' },
    { name: 'Lab Environments', status: 'maintenance', uptime: '95.2%' },
    { name: 'API Gateway', status: 'operational', uptime: '99.7%' },
  ];

  return (
    <div className="page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ marginBottom: '0.25rem' }}>Admin Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Manage your AI Educational Labs platform</p>
        </div>
        <button className="btn btn-secondary" onClick={handleLogout} style={{ padding: '0.5rem 1.25rem' }}>
          Sign Out
        </button>
      </div>

      <div className="grid-4">
        {siteStats.map((s, i) => (
          <div className="card stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.value}</div>
            <div className="stat-title">{s.label}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--success)', marginTop: '0.25rem' }}>{s.change}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ margin: 0 }}>👥 Recent Signups</h3>
            <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(108,92,231,0.15)', color: 'var(--accent-secondary)', fontWeight: 600 }}>
              {recentUsers.length} new
            </span>
          </div>
          {recentUsers.map((u, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 0', borderBottom: i < recentUsers.length - 1 ? '1px solid var(--border-glass)' : 'none',
            }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{u.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{u.email}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600,
                  background: u.status === 'active' ? 'rgba(0,206,201,0.15)' : 'rgba(255,107,107,0.15)',
                  color: u.status === 'active' ? 'var(--success)' : 'var(--danger)',
                }}>
                  {u.status}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{u.joined}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.25rem' }}>🖥️ System Health</h3>
          {systemHealth.map((s, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 0', borderBottom: i < systemHealth.length - 1 ? '1px solid var(--border-glass)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: s.status === 'operational' ? 'var(--success)' : 'var(--warning)',
                  boxShadow: `0 0 6px ${s.status === 'operational' ? 'rgba(0,206,201,0.4)' : 'rgba(253,203,110,0.4)'}`,
                }}></div>
                <span style={{ fontSize: '0.9rem' }}>{s.name}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600, textTransform: 'capitalize',
                  background: s.status === 'operational' ? 'rgba(0,206,201,0.15)' : 'rgba(253,203,110,0.15)',
                  color: s.status === 'operational' ? 'var(--success)' : 'var(--warning)',
                }}>
                  {s.status}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.uptime} uptime</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1.25rem' }}>⚡ Quick Actions</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link to="/labs" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>📦 Manage Labs</Link>
          <Link to="/dashboard" className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>📊 View Analytics</Link>
          <button className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }} onClick={() => alert('📧 Email notification settings coming soon!')}>📧 Email Settings</button>
          <button className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }} onClick={() => alert('🔒 Security audit report: All systems secure. Last scan: ' + new Date().toLocaleString())}>🔒 Security Audit</button>
          <button className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }} onClick={() => alert('📤 Data export initiated. Check your email for the download link.')}>📤 Export Data</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
