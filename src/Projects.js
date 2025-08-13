import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
const projects = [
  {
    title: 'Apps and Files Manager',
    tech: 'Java + Spring Boot + SSDEEP',
    desc: 'Intelligent file management with SHA-256 and SSDEEP duplicate detection algorithms and web UI for system optimization.'
  },
  {
    title: 'Gas Emission Monitoring System',
    tech: 'MERN + IoT',
    desc: 'Real-time pollution tracking with sensor integration.'
  },
  {
    title: 'Sleep Pattern Analysis',
    tech: 'MERN + IoT',
    desc: 'GSR sensor integration with video call and blockchain.'
  },
  {
    title: 'Skin Disease Prediction',
    tech: 'Webcam/IP Camera + TensorFlow AI',
    desc: 'Webcam/IP Camera + TensorFlow AI model.'
  },
  {
    title: 'AI-Based E-Learning Platform',
    tech: 'IBM ICE Hackathon',
    desc: 'Built during IBM ICE Hackathon.'
  },
  {
    title: 'Remote Health Monitoring',
    tech: 'IoT + WSN',
    desc: 'IoT + WSN solution for elderly care (IEEE Publication).'
  }
];
const Projects = () => (
  <section id="projects" className="py-5 bg-white position-relative">
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}><FaProjectDiagram /></span>
        <h2 className="h3 fw-bold mb-0 text-primary">Projects</h2>
      </div>
      <div className="row g-4 fade-in">
        {projects.map((project, idx) => (
          <div className="col-md-6" key={idx}>
            <div className="card border-0 shadow-lg h-100 project-card-hover">
              <div className="card-body">
                <div className="mb-2"><span className="badge bg-primary bg-opacity-75">{project.tech}</span></div>
                <h5 className="card-title text-primary mb-2">{project.title}</h5>
                <p className="card-text text-secondary mb-0">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute top-0 start-0 w-100" style={{ height: 6 }}></div>
  </section>
);
export default Projects;
