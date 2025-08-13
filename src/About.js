import React from 'react';
import { FaUser } from 'react-icons/fa';
import profileImg from './assets/profile.jpg';

const About = () => (
  <section id="about" className="py-5 bg-light position-relative">
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}><FaUser /></span>
        <h2 className="h3 fw-bold mb-0 text-primary">About Me</h2>
      </div>
      <div className="row justify-content-center fade-in">
        <div className="col-md-10">
          <div className="card border-0 shadow rounded-4 p-4 d-flex flex-md-row align-items-center gap-4 bg-white">
            <img src={profileImg} alt="Profile" className="rounded-circle border border-3 border-primary" style={{ width: 120, height: 120, objectFit: 'cover' }} />
            <div>
              <p className="mb-0 fs-5 text-secondary">
                MERN stack developer with experience at Notasco Technologies. President of IEEE ComSoc Student Chapter. Strong in sql, Python, Java, and IoT development. Multiple award winner with IEEE publication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute top-0 start-0 w-100" style={{ height: 6 }}></div>
  </section>
);

export default About; 
