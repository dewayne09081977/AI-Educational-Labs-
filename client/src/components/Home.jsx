import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  { icon: '🤖', title: 'AI-Powered Learning', desc: 'Adaptive lessons that respond to your pace and style. Our AI tutor adjusts difficulty in real-time.' },
  { icon: '🧪', title: 'Hands-On Labs', desc: 'Interactive coding environments where you build real AI models — no setup required.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Visual dashboards that map your learning journey with detailed analytics and milestones.' },
  { icon: '🔐', title: 'Security Tools', desc: 'Practical cybersecurity utilities including password generators and encryption demos.' },
  { icon: '🎯', title: 'Guided Projects', desc: 'Step-by-step project walkthroughs from beginner chatbots to advanced neural networks.' },
  { icon: '🌐', title: 'Community Labs', desc: 'Collaborate with peers on shared experiments and publish your findings.' },
];

const stats = [
  { value: '2,400+', label: 'Students' },
  { value: '48', label: 'Interactive Labs' },
  { value: '97%', label: 'Satisfaction' },
  { value: '12', label: 'AI Topics' },
];

function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-badge">🚀 Now in Public Beta</span>
        <h1>Learn AI by Building Real Projects</h1>
        <p>
          Interactive labs, guided projects, and AI-powered tutoring — designed
          to take you from curious beginner to confident practitioner.
        </p>
        <div className="hero-actions">
          <Link to="/labs" className="btn btn-primary">Explore Labs →</Link>
          <Link to="/onboarding" className="btn btn-secondary">Get Started</Link>
        </div>
      </section>

      <section className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Everything You Need to Master AI</h2>
          <p>A complete learning platform built from the ground up for the AI era.</p>
        </div>
        <div className="grid-3">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Building?</h2>
        <p>Join thousands of learners who are already mastering AI through hands-on projects.</p>
        <Link to="/labs" className="btn btn-primary">Start Your First Lab →</Link>
      </section>
    </>
  );
}

export default Home;
