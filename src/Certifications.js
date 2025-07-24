import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  'Oracle Cloud Infrastructure 2023 AI Certified',
  'Generative AI Study Jam - GDSC @ KARE',
  'AI & Deep Learning Master Course - Udemy',
  'Full Stack Development Internship - Notasco',
  'CodeChef Certificates in DBMS, DAA'
];

const Certifications = () => (
  <section id="certifications" className="py-5 bg-light position-relative">
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}><FaCertificate /></span>
        <h2 className="h3 fw-bold mb-0 text-primary">Certifications</h2>
      </div>
      <div className="row justify-content-center fade-in">
        <div className="col-md-10">
          <div className="card border-0 shadow rounded-4 p-4 bg-white">
            <div className="d-flex flex-wrap gap-2">
              {certifications.map((cert, idx) => (
                <span className="badge bg-info bg-opacity-75 fs-6 px-3 py-2 mb-2" key={idx}>{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute top-0 start-0 w-100" style={{ height: 6 }}></div>
  </section>
);

export default Certifications; 