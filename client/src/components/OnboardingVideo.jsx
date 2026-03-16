import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Create Your Profile',
    desc: 'Set up your learning profile so we can personalize your experience. Choose your interests — NLP, computer vision, reinforcement learning, or explore everything. Your profile determines which labs appear first and how the AI tutor adapts to your style.',
    cta: 'Set Up Profile',
  },
  {
    title: 'Choose Your First Track',
    desc: 'Browse our 6 learning tracks, each with hands-on labs and guided projects. We recommend starting with "Generative AI Studio" if you\'re new, or "Neural Networks Deep Dive" if you already know Python. Every track includes theory, code labs, and a capstone project.',
    cta: 'Browse Tracks',
  },
  {
    title: 'Start Building',
    desc: 'Jump into your first interactive lab. Each lab runs in the browser — no local setup needed. Write real code, train actual models, and see results instantly. Your progress is saved automatically and syncs across devices.',
    cta: 'Launch First Lab',
  },
];

function OnboardingVideo() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="page" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Get Started</h1>
      <p className="page-subtitle" style={{ textAlign: 'center' }}>Three steps to start your AI learning journey.</p>

      <div className="onboarding-steps">
        {steps.map((_, i) => (
          <button
            key={i}
            className={`step-indicator ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
            onClick={() => setCurrentStep(i)}
            style={{ cursor: 'pointer' }}
          >
            <span className="step-number">
              {i < currentStep ? '✓' : i + 1}
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Step {i + 1}</span>
          </button>
        ))}
      </div>

      <div className="card step-content" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          {currentStep === 0 ? '👤' : currentStep === 1 ? '🗂️' : '🚀'}
        </div>
        <h3>{steps[currentStep].title}</h3>
        <p style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>{steps[currentStep].desc}</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {currentStep > 0 && (
            <button className="btn btn-secondary" onClick={() => setCurrentStep(currentStep - 1)}>
              ← Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setCurrentStep(currentStep + 1)}>
              {steps[currentStep].cta} →
            </button>
          ) : (
            <Link to="/labs" className="btn btn-primary">
              {steps[currentStep].cta} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default OnboardingVideo;
