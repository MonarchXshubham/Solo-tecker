import React, { useState } from 'react';

export default function LoginModal({ closeModal }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    alert(`${isSignUp ? 'Signed Up' : 'Signed In'} as ${email}`);
    closeModal();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="auth-btn" onClick={handleAuth}>
          {isSignUp ? 'Create Account' : 'Login'}
        </button>

        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span className="switch-mode" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
}