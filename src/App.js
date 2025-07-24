import React from 'react';
import Sidebar from './Sidebar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Certifications from './Certifications';

function App() {
  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row min-vh-100">
        <div className="col-md-3 p-0 bg-dark text-white">
          <Sidebar />
        </div>
        <div className="col-md-9 p-0">
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
