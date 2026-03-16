import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const labData = {
  'natural-language-processing': {
    icon: '💬',
    title: 'Natural Language Processing',
    difficulty: 'beginner',
    modules: [
      { id: 1, title: 'Tokenization & Text Preprocessing', desc: 'Learn how to clean, tokenize, and prepare text data for NLP models.', duration: '1.5 hrs' },
      { id: 2, title: 'Word Embeddings (Word2Vec)', desc: 'Build word embeddings from scratch and visualize semantic relationships.', duration: '1.5 hrs' },
      { id: 3, title: 'Sentiment Analysis', desc: 'Train a classifier to detect positive, negative, and neutral sentiments in reviews.', duration: '2 hrs' },
      { id: 4, title: 'Text Classification with TF-IDF', desc: 'Classify news articles using TF-IDF features and logistic regression.', duration: '1.5 hrs' },
      { id: 5, title: 'Named Entity Recognition', desc: 'Extract people, places, and organizations from unstructured text.', duration: '1.5 hrs' },
      { id: 6, title: 'Sequence-to-Sequence Models', desc: 'Build an encoder-decoder architecture for language translation.', duration: '1.5 hrs' },
      { id: 7, title: 'Transformer Architecture', desc: 'Implement self-attention and build a miniature transformer from scratch.', duration: '1.5 hrs' },
      { id: 8, title: 'Chatbot Capstone Project', desc: 'Combine everything to build a conversational AI chatbot.', duration: '1 hr' },
    ],
  },
  'computer-vision': {
    icon: '👁️',
    title: 'Computer Vision',
    difficulty: 'intermediate',
    modules: [
      { id: 1, title: 'Image Fundamentals & Preprocessing', desc: 'Understand pixels, color spaces, and image augmentation techniques.', duration: '1.5 hrs' },
      { id: 2, title: 'Convolutional Neural Networks', desc: 'Build CNNs from first principles and understand feature extraction.', duration: '2 hrs' },
      { id: 3, title: 'Image Classification', desc: 'Train a classifier on CIFAR-10 achieving >90% accuracy.', duration: '1.5 hrs' },
      { id: 4, title: 'Object Detection with YOLO', desc: 'Detect and localize multiple objects in images using YOLO architecture.', duration: '2 hrs' },
      { id: 5, title: 'Image Segmentation', desc: 'Implement semantic and instance segmentation with U-Net.', duration: '1.5 hrs' },
      { id: 6, title: 'Transfer Learning', desc: 'Fine-tune pre-trained models (ResNet, EfficientNet) for custom datasets.', duration: '1.5 hrs' },
      { id: 7, title: 'Face Detection & Recognition', desc: 'Build a face detection pipeline with embeddings-based recognition.', duration: '2 hrs' },
      { id: 8, title: 'Real-Time Video Processing', desc: 'Process webcam feeds for live object detection and tracking.', duration: '1.5 hrs' },
      { id: 9, title: 'GANs for Image Generation', desc: 'Train a GAN to generate realistic images from noise.', duration: '1.5 hrs' },
      { id: 10, title: 'CV Capstone: Smart Camera', desc: 'Build a complete smart camera app with detection, tracking, and alerts.', duration: '1 hr' },
    ],
  },
  'neural-networks-deep-dive': {
    icon: '🧬',
    title: 'Neural Networks Deep Dive',
    difficulty: 'advanced',
    modules: [
      { id: 1, title: 'The Perceptron', desc: 'Implement a single neuron from math to code — forward pass, activation, learning.', duration: '2 hrs' },
      { id: 2, title: 'Backpropagation by Hand', desc: 'Derive and implement the backpropagation algorithm step by step.', duration: '2 hrs' },
      { id: 3, title: 'Multi-Layer Networks', desc: 'Stack layers, choose activations, and train deep networks with gradient descent.', duration: '2 hrs' },
      { id: 4, title: 'Optimization Algorithms', desc: 'Implement SGD, Adam, RMSProp and compare their convergence properties.', duration: '2 hrs' },
      { id: 5, title: 'Regularization Techniques', desc: 'Prevent overfitting with dropout, batch norm, weight decay, and data augmentation.', duration: '2 hrs' },
      { id: 6, title: 'Recurrent Neural Networks', desc: 'Build RNNs and LSTMs for sequential data — text generation, time series.', duration: '2 hrs' },
      { id: 7, title: 'Attention Mechanisms', desc: 'Implement dot-product attention, multi-head attention, and positional encoding.', duration: '2 hrs' },
      { id: 8, title: 'Building a Mini GPT', desc: 'Put it all together — build a character-level language model from scratch.', duration: '2 hrs' },
      { id: 9, title: 'Model Deployment', desc: 'Export, optimize, and serve your trained model via a REST API.', duration: '2 hrs' },
      { id: 10, title: 'Architecture Design Patterns', desc: 'Learn skip connections, residual blocks, and modern architecture patterns.', duration: '2 hrs' },
      { id: 11, title: 'Distributed Training', desc: 'Scale training across GPUs with data and model parallelism.', duration: '2 hrs' },
      { id: 12, title: 'Capstone: Custom Architecture', desc: 'Design, train, and benchmark your own neural network architecture.', duration: '2 hrs' },
    ],
  },
  'reinforcement-learning': {
    icon: '🎮',
    title: 'Reinforcement Learning',
    difficulty: 'intermediate',
    modules: [
      { id: 1, title: 'RL Fundamentals', desc: 'Understand agents, environments, rewards, and the exploration-exploitation tradeoff.', duration: '1.5 hrs' },
      { id: 2, title: 'Q-Learning from Scratch', desc: 'Implement tabular Q-learning to solve GridWorld.', duration: '2 hrs' },
      { id: 3, title: 'Deep Q-Networks (DQN)', desc: 'Combine neural networks with Q-learning to play Atari games.', duration: '2 hrs' },
      { id: 4, title: 'Policy Gradient Methods', desc: 'Implement REINFORCE and learn directly in policy space.', duration: '1.5 hrs' },
      { id: 5, title: 'Actor-Critic Architecture', desc: 'Build A2C for stable, efficient continuous-action learning.', duration: '1.5 hrs' },
      { id: 6, title: 'RL Capstone: Game Agent', desc: 'Train an agent to master a custom game environment.', duration: '1.5 hrs' },
    ],
  },
  'generative-ai-studio': {
    icon: '✨',
    title: 'Generative AI Studio',
    difficulty: 'beginner',
    modules: [
      { id: 1, title: 'Intro to Large Language Models', desc: 'Understand how ChatGPT-style models work — tokens, context, and generation.', duration: '1 hr' },
      { id: 2, title: 'Prompt Engineering', desc: 'Master zero-shot, few-shot, chain-of-thought, and structured prompting.', duration: '1 hr' },
      { id: 3, title: 'Building with APIs', desc: 'Connect to OpenAI, Anthropic, and open-source LLMs via APIs.', duration: '1.5 hrs' },
      { id: 4, title: 'RAG (Retrieval-Augmented Generation)', desc: 'Ground your AI in real data with embeddings and vector search.', duration: '1.5 hrs' },
      { id: 5, title: 'Image Generation', desc: 'Create images with diffusion models — DALL-E, Stable Diffusion, and beyond.', duration: '1 hr' },
      { id: 6, title: 'Fine-Tuning a Model', desc: 'Customize a pre-trained model on your own dataset for specialized tasks.', duration: '1 hr' },
      { id: 7, title: 'GenAI Capstone: AI App', desc: 'Build a complete AI-powered application from concept to deployment.', duration: '1 hr' },
    ],
  },
  'ai-ethics-safety': {
    icon: '⚖️',
    title: 'AI Ethics & Safety',
    difficulty: 'beginner',
    modules: [
      { id: 1, title: 'Understanding AI Bias', desc: 'Identify and measure bias in datasets and model predictions.', duration: '1 hr' },
      { id: 2, title: 'Fairness Metrics', desc: 'Implement demographic parity, equalized odds, and calibration checks.', duration: '1.5 hrs' },
      { id: 3, title: 'Model Interpretability', desc: 'Use SHAP, LIME, and attention visualization to explain model decisions.', duration: '1.5 hrs' },
      { id: 4, title: 'Privacy & Data Protection', desc: 'Learn differential privacy, federated learning, and data anonymization.', duration: '1 hr' },
      { id: 5, title: 'Responsible Deployment', desc: 'Build guardrails, monitoring, and human-in-the-loop systems.', duration: '1 hr' },
    ],
  },
};

function LabDetail() {
  const { slug } = useParams();
  const lab = labData[slug];
  const [expandedModule, setExpandedModule] = useState(null);

  if (!lab) {
    return (
      <div className="page" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔍</div>
        <h1 className="page-title">Lab Not Found</h1>
        <p className="page-subtitle">This lab doesn't exist or has been moved.</p>
        <Link to="/labs" className="btn btn-primary" style={{ marginTop: '1rem' }}>← Back to Labs</Link>
      </div>
    );
  }

  return (
    <div className="page" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Link to="/labs" style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
        ← Back to Labs
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{lab.icon}</span>
        <div>
          <h1 className="page-title" style={{ marginBottom: '0.25rem' }}>{lab.title}</h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className={`badge badge-${lab.difficulty}`}>{lab.difficulty}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📦 {lab.modules.length} modules</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>⏱ {lab.modules.reduce((a, m) => a + parseFloat(m.duration), 0)} hrs</span>
          </div>
        </div>
      </div>

      <div className="progress-bar" style={{ marginTop: '1.5rem', marginBottom: '2rem', height: '8px' }}>
        <div className="progress-fill" style={{ width: '0%' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {lab.modules.map((mod, i) => (
          <div
            key={mod.id}
            className="card"
            style={{ padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => setExpandedModule(expandedModule === i ? null : i)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'var(--bg-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-secondary)', flexShrink: 0,
                }}>
                  {mod.id}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{mod.title}</div>
                  {expandedModule === i && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem', marginBottom: 0 }}>{mod.desc}</p>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{mod.duration}</span>
                <button
                  className="btn btn-primary"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`🚧 "${mod.title}" lab environment is coming soon!\n\nThis module will launch an interactive coding environment where you can work through the exercises.`);
                  }}
                >
                  Start →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabDetail;
