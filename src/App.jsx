import React, { useState } from 'react';
import LoginModal from './LoginModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <video autoPlay muted loop className="bg-video">
        <source src="/shadow-monarch.webm" type="video/webm" />
      </video>

      <div className="overlay">
        <h1 className="main-title" onClick={() => setShowModal(true)}>
          Shadow Monarch
        </h1>
        {showModal && <LoginModal closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  );
}