import React from 'react';

const labs = [
  {
    icon: '💬',
    title: 'Natural Language Processing',
    desc: 'Build a sentiment analyzer, text classifier, and chatbot from scratch using transformer architectures.',
    difficulty: 'beginner',
    modules: 8,
    hours: 12,
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Train image classifiers, detect objects in photos, and build a real-time face recognition pipeline.',
    difficulty: 'intermediate',
    modules: 10,
    hours: 16,
  },
  {
    icon: '🧬',
    title: 'Neural Networks Deep Dive',
    desc: 'Implement perceptrons, CNNs, RNNs, and attention mechanisms from first principles — no frameworks.',
    difficulty: 'advanced',
    modules: 12,
    hours: 24,
  },
  {
    icon: '🎮',
    title: 'Reinforcement Learning',
    desc: 'Train agents to play games, navigate mazes, and optimize strategies using Q-learning and policy gradients.',
    difficulty: 'intermediate',
    modules: 6,
    hours: 10,
  },
  {
    icon: '✨',
    title: 'Generative AI Studio',
    desc: 'Create text, images, and code with large language models. Learn prompt engineering and fine-tuning.',
    difficulty: 'beginner',
    modules: 7,
    hours: 8,
  },
  {
    icon: '⚖️',
    title: 'AI Ethics & Safety',
    desc: 'Explore bias detection, fairness metrics, interpretability tools, and responsible AI deployment practices.',
    difficulty: 'beginner',
    modules: 5,
    hours: 6,
  },
];

function Labs() {
  return (
    <div className="page">
      <h1 className="page-title">Interactive Labs</h1>
      <p className="page-subtitle">Hands-on learning environments — pick a track and start building.</p>

      <div className="grid-3">
        {labs.map((lab, i) => (
          <div className="card lab-card" key={i}>
            <div className="card-icon">{lab.icon}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <h3 style={{ margin: 0 }}>{lab.title}</h3>
              <span className={`badge badge-${lab.difficulty}`}>{lab.difficulty}</span>
            </div>
            <p>{lab.desc}</p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>📦 {lab.modules} modules</span>
              <span>⏱ {lab.hours} hours</span>
            </div>
            <div className="progress-bar" style={{ marginTop: '1rem' }}>
              <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 40)}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Labs;
