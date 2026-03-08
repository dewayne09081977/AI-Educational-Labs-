import { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let pwd = "";
    for (let i = 0; i < 16; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <button onClick={generatePassword} style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>Generate Password</button>
      {password && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Your password:</strong> {password}
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
