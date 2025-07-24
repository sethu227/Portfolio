import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaAddressBook } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-5 bg-white position-relative">
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}><FaAddressBook /></span>
        <h2 className="h3 fw-bold mb-0 text-primary">Contact</h2>
      </div>
      <div className="row justify-content-center fade-in">
        <div className="col-md-8">
          <div className="card border-0 shadow rounded-4 p-4 bg-light">
            <div className="mb-3 d-flex align-items-center fs-5">
              <FaPhone className="me-2 text-success" /> <strong>Phone:</strong> <span className="ms-2">+91-9677454080</span>
            </div>
            <div className="mb-3 d-flex align-items-center fs-5">
              <FaEnvelope className="me-2 text-danger" /> <strong>Email:</strong> <span className="ms-2">chandrabosechandrabose9@gmail.com</span>
            </div>
            <div className="mb-3 d-flex align-items-center fs-5">
              <FaMapMarkerAlt className="me-2 text-primary" /> <strong>Location:</strong> <span className="ms-2">Sivaganga, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute top-0 start-0 w-100" style={{ height: 6 }}></div>
  </section>
);

export default Contact; 