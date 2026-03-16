import React from 'react';
import { Link } from 'react-router-dom';

const labs = [
  {
    icon: '💬',
    title: 'Natural Language Processing',
    slug: 'natural-language-processing',
    desc: 'Build a sentiment analyzer, text classifier, and chatbot from scratch using transformer architectures.',
    difficulty: 'beginner',
    modules: 8,
    hours: 12,
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    slug: 'computer-vision',
    desc: 'Train image classifiers, detect objects in photos, and build a real-time face recognition pipeline.',
    difficulty: 'intermediate',
    modules: 10,
    hours: 16,
  },
  {
    icon: '🧬',
    title: 'Neural Networks Deep Dive',
    slug: 'neural-networks-deep-dive',
    desc: 'Implement perceptrons, CNNs, RNNs, and attention mechanisms from first principles — no frameworks.',
    difficulty: 'advanced',
    modules: 12,
    hours: 24,
  },
  {
    icon: '🎮',
    title: 'Reinforcement Learning',
    slug: 'reinforcement-learning',
    desc: 'Train agents to play games, navigate mazes, and optimize strategies using Q-learning and policy gradients.',
    difficulty: 'intermediate',
    modules: 6,
    hours: 10,
  },
  {
    icon: '✨',
    title: 'Generative AI Studio',
    slug: 'generative-ai-studio',
    desc: 'Create text, images, and code with large language models. Learn prompt engineering and fine-tuning.',
    difficulty: 'beginner',
    modules: 7,
    hours: 8,
  },
  {
    icon: '⚖️',
    title: 'AI Ethics & Safety',
    slug: 'ai-ethics-safety',
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
          <Link to={`/labs/${lab.slug}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card lab-card" style={{ cursor: 'pointer', height: '100%' }}>
              <div className="card-icon">{lab.icon}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <h3 style={{ margin: 0 }}>{lab.title}</h3>
                <span className={`badge badge-${lab.difficulty}`}>{lab.difficulty}</span>
              </div>
              <p>{lab.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>📦 {lab.modules} modules</span>
                  <span>⏱ {lab.hours} hours</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>View →</span>
              </div>
              <div className="progress-bar" style={{ marginTop: '1rem' }}>
                <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 40)}%` }}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Labs;
