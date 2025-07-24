import React from 'react';
import profileImg from './assets/profile.jpg';

const Hero = () => (
  <section id="hero" className="d-flex align-items-center justify-content-center position-relative min-vh-100 bg-dark" style={{ background: '#0d47a1' }}>
    <div className="container position-relative z-2">
      <div className="row align-items-center flex-column-reverse flex-md-row">
        {/* Card on the left */}
        <div className="col-md-6 d-flex justify-content-center mb-5 mb-md-0">
          <div className="card border-0 p-4 px-md-5 shadow-lg fade-in" style={{ maxWidth: 520, minWidth: 320, background: 'rgba(20, 30, 48, 0.92)', backdropFilter: 'blur(2px)' }}>
            <h1 className="fw-bold mb-3" style={{ color: '#fff', textShadow: '0 2px 12px #000', fontSize: '2.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sethumadhavan R</h1>
            <h2 className="h5 mb-4" style={{ color: '#42a5f5', fontWeight: 700, textShadow: '0 2px 8px #000', whiteSpace: 'pre-line' }}>
              MERN Stack Developer | IoT Enthusiast | IEEE ComSoc President
            </h2>
            <div className="mb-2" style={{ color: '#e3e3e3', textShadow: '0 1px 6px #000' }}>chandrabosechandrabose9@gmail.com</div>
            <div className="mb-2" style={{ color: '#e3e3e3', textShadow: '0 1px 6px #000' }}>+91-9677454080</div>
            <div style={{ color: '#b0bec5', textShadow: '0 1px 6px #000' }}>Sivaganga, Tamil Nadu</div>
          </div>
        </div>
        {/* Image on the right */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <div className="hero-img-wrapper position-relative w-100" style={{ maxWidth: 400, minHeight: 350 }}>
            <img src={profileImg} alt="Profile" className="img-fluid rounded-4 shadow-lg w-100 h-100 object-fit-cover" style={{ objectPosition: 'top center', minHeight: 350, maxHeight: 500 }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" style={{ background: 'rgba(0,0,0,0.25)' }}></div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute bottom-0 start-0 w-100" style={{ height: 6, zIndex: 4 }}></div>
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: '#0d47a1', opacity: 0.2, zIndex: 1 }}></div>
  </section>
);

export default Hero; 