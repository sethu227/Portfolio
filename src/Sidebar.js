import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaUser, FaFileAlt, FaProjectDiagram, FaCertificate, FaAddressBook, FaHome } from 'react-icons/fa';
import profileImg from './assets/profile.jpg';

const navLinks = [
  { name: 'Home', href: '#hero', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Professional Journey', href: '#resume', icon: <FaFileAlt /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
  { name: 'Contact', href: '#contact', icon: <FaAddressBook /> },
];

const Sidebar = () => (
  <div className="d-flex flex-column align-items-center p-4 min-vh-100" style={{ minWidth: 240 }}>
    <img src={profileImg} alt="Profile" className="rounded-circle border border-3 border-primary mb-3" style={{ width: 110, height: 110, objectFit: 'cover' }} />
    <h2 className="h5 fw-bold text-center mb-1">Sethumadhavan R</h2>
    <div className="text-secondary text-center mb-3" style={{ fontSize: 13 }}>MERN Stack Developer<br />IoT Enthusiast</div>
    <div className="d-flex gap-2 mb-4">
      <a href="https://www.linkedin.com/in/sethumadhavan-r" target="_blank" rel="noopener noreferrer" className="text-white bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}><FaLinkedin /></a>
      <a href="https://github.com/sethumadhavan7" target="_blank" rel="noopener noreferrer" className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}><FaGithub /></a>
      <a href="mailto:chandrabosechandrabose9@gmail.com" className="text-white bg-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}><FaEnvelope /></a>
      <a href="tel:+919677454080" className="text-white bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}><FaPhone /></a>
    </div>
    <nav className="flex-grow-1 w-100">
      <ul className="nav nav-pills flex-column mb-auto">
        {navLinks.map(link => (
          <li className="nav-item" key={link.name}>
            <a href={link.href} className="nav-link text-white d-flex align-items-center gap-2 py-2 px-3">
              <span>{link.icon}</span> {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <div className="mt-auto small text-secondary text-center pt-3">
      Sivaganga, Tamil Nadu<br />
      chandrabosechandrabose9@gmail.com<br />
      +91-9677454080
    </div>
  </div>
);

export default Sidebar; 