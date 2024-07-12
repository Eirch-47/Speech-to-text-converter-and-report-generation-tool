import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    setResponsive(!responsive);
  }

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    navbar.addEventListener('mouseover', () => {
      navbar.style.backgroundColor = '#185a9d';
    });
    navbar.addEventListener('mouseout', () => {
      navbar.style.backgroundColor = 'transparent';
    });
    return () => {
      navbar.removeEventListener('mouseover', () => {});
      navbar.removeEventListener('mouseout', () => {});
    };
  }, []);

  return (
    <nav className={`navbar ${responsive ? 'responsive' : ''}`}>
      <a href="/" className="active">Home</a>
      <a href="/App">Voice-Assist</a>
      <a href="/App2">Voice-Recognition</a>
      <a href="/services">Multiple User</a>
      <a href="/App3">Meeting PDF Generator</a>
      <a href="#" className="icon" onClick={toggleResponsive}>&#9776;</a>
    </nav>
  );
}

export default Navbar;
