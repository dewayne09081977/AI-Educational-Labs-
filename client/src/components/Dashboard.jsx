import React from 'react';

const statsData = [
  { icon: '📚', number: '12', title: 'Courses Completed' },
  { icon: '⏱', number: '86', title: 'Hours Learned' },
  { icon: '🔥', number: '14', title: 'Day Streak' },
  { icon: '🏆', number: '5', title: 'Certificates Earned' },
];

const activities = [
  { icon: '✅', text: 'Completed "Intro to Neural Networks" lab', time: '2 hours ago' },
  { icon: '🏅', text: 'Earned NLP Fundamentals certificate', time: '1 day ago' },
  { icon: '📝', text: 'Submitted Computer Vision project', time: '2 days ago' },
  { icon: '🎯', text: 'Started Reinforcement Learning track', time: '3 days ago' },
  { icon: '💬', text: 'Joined AI Ethics discussion group', time: '5 days ago' },
];

const skills = [
  { name: 'Python', level: 85 },
  { name: 'Machine Learning', level: 62 },
  { name: 'Deep Learning', level: 45 },
  { name: 'NLP', level: 78 },
  { name: 'Data Visualization', level: 90 },
];

function Dashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Your Dashboard</h1>
      <p className="page-subtitle">Track your progress and keep the momentum going.</p>

      <div className="grid-4">
        {statsData.map((s, i) => (
          <div className="card stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.number}</div>
            <div className="stat-title">{s.title}</div>
          </div>
        ))}
      </div>

      <div className="grid-2" style={{ marginTop: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.25rem' }}>📈 Skill Progress</h3>
          {skills.map((skill, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                <span>{skill.name}</span>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>🕐 Recent Activity</h3>
          {activities.map((a, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-icon">{a.icon}</div>
              <div>
                <div className="activity-text">{a.text}</div>
                <div className="activity-time">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
