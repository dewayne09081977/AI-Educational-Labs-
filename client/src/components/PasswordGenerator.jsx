import React, { useState, useCallback } from 'react';

const CHAR_SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

function generatePassword(length, options) {
  let chars = '';
  if (options.uppercase) chars += CHAR_SETS.uppercase;
  if (options.lowercase) chars += CHAR_SETS.lowercase;
  if (options.numbers) chars += CHAR_SETS.numbers;
  if (options.symbols) chars += CHAR_SETS.symbols;
  if (!chars) chars = CHAR_SETS.lowercase + CHAR_SETS.numbers;

  let password = '';
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }
  return password;
}

function getStrength(password, options) {
  let score = 0;
  if (password.length >= 12) score++;
  if (password.length >= 20) score++;
  if (options.uppercase && options.lowercase) score++;
  if (options.numbers) score++;
  if (options.symbols) score++;
  if (score <= 2) return { level: 'weak', label: 'Weak', bars: 1 };
  if (score <= 3) return { level: 'medium', label: 'Medium', bars: 3 };
  return { level: 'strong', label: 'Strong', bars: 5 };
}

function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [password, setPassword] = useState(() => generatePassword(16, { uppercase: true, lowercase: true, numbers: true, symbols: false }));
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    setPassword(generatePassword(length, options));
    setCopied(false);
  }, [length, options]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [password]);

  const toggleOption = (key) => {
    const newOpts = { ...options, [key]: !options[key] };
    setOptions(newOpts);
    setPassword(generatePassword(length, newOpts));
  };

  const strength = getStrength(password, options);

  return (
    <div className="page" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="page-title" style={{ textAlign: 'center' }}>Security Tools</h1>
      <p className="page-subtitle" style={{ textAlign: 'center' }}>Cryptographically secure password generator.</p>

      <div className="card" style={{ padding: '2rem' }}>
        <div className="password-display">{password}</div>

        <div className="strength-meter">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`strength-bar ${i <= strength.bars ? 'filled ' + strength.level : ''}`}
            />
          ))}
        </div>
        <div className="strength-label" style={{ color: strength.level === 'strong' ? 'var(--success)' : strength.level === 'medium' ? 'var(--warning)' : 'var(--danger)' }}>
          {strength.label}
        </div>

        <div className="password-actions">
          <button className="btn btn-primary" onClick={generate}>⟳ Generate</button>
          <button className="btn btn-secondary" onClick={copyToClipboard}>
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
        </div>

        <div className="slider-group">
          <label>
            Length
            <span>{length}</span>
          </label>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => {
              const newLen = parseInt(e.target.value);
              setLength(newLen);
              setPassword(generatePassword(newLen, options));
            }}
          />
        </div>

        <div className="toggle-group">
          <button className={`toggle-btn ${options.uppercase ? 'active' : ''}`} onClick={() => toggleOption('uppercase')}>
            ABC Uppercase
          </button>
          <button className={`toggle-btn ${options.lowercase ? 'active' : ''}`} onClick={() => toggleOption('lowercase')}>
            abc Lowercase
          </button>
          <button className={`toggle-btn ${options.numbers ? 'active' : ''}`} onClick={() => toggleOption('numbers')}>
            123 Numbers
          </button>
          <button className={`toggle-btn ${options.symbols ? 'active' : ''}`} onClick={() => toggleOption('symbols')}>
            #$% Symbols
          </button>
        </div>
      </div>

      {copied && <div className="copied-toast">Password copied to clipboard!</div>}
    </div>
  );
}

export default PasswordGenerator;
