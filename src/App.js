import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => (
  <div style={{ 
    minHeight: '100vh', 
    background: 'linear-gradient(to bottom right, #fdf2f8, #ffffff)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px'
  }}>
    <div>
      <h1 style={{ color: '#92400e', fontSize: '3rem', marginBottom: '20px' }}>
        Raksha Bandhan
      </h1>
      <p style={{ color: '#92400e', fontSize: '1.5rem', marginBottom: '30px' }}>
        💕 Mubarak Ho Yashu! 💕
      </p>
      <button 
        onClick={() => window.location.href = '/letter'}
        style={{
          backgroundColor: '#f472b6',
          color: 'white',
          padding: '15px 30px',
          fontSize: '1.2rem',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer'
        }}
      >
        Click to see my surprise ✨
      </button>
    </div>
  </div>
);

const LetterPage = () => (
  <div style={{ 
    minHeight: '100vh', 
    background: 'linear-gradient(to bottom right, #fdf2f8, #ffffff)',
    padding: '40px 20px'
  }}>
    <button 
      onClick={() => window.location.href = '/'}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        padding: '10px 20px',
        background: 'white',
        border: '1px solid #f472b6',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      ← Back
    </button>
    
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      background: 'rgba(255,255,255,0.9)',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#92400e', textAlign: 'center', fontSize: '2rem', marginBottom: '30px' }}>
        💕 Meri Pyaari Yashu 💕
      </h2>
      
      <div style={{ color: '#92400e', lineHeight: '1.8', fontSize: '1.1rem' }}>
        <p>Ye hamara pehla Raksha Bandhan hai, aur shayad duniya ke liye ye sirf ek tyohaar ho…</p>
        <p>Par mere liye, ye ek ehsaas hai.</p>
        <p>Ek ehsaas ki mujhe meri zindagi ka sabse khoobsurat tohfa mil chuka hai — Aap.</p>
        <p>Aap sirf meri behen nahi, meri dost, meri muskaan, meri dua ka sabse khoobsurat jawaab ho.</p>
        <p>Main shayad hamesha perfect bhai na ban paun…</p>
        <p>Par ek baat hamesha yaad rakhna — main hamesha aapke saath rahunga, har pal, har mod, har khushi, har mushkil me.</p>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ fontSize: '1.5rem', color: '#f472b6', fontWeight: 'bold' }}>
            Happy Raksha Bandhan Yashu ❤️
          </p>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
            Aap ka chirkutt❤️
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
