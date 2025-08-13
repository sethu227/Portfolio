import React from 'react';
import { FaCode, FaDatabase, FaMicrochip } from 'react-icons/fa';
const skills = [
  { category: 'Programming', icon: <FaCode className="me-2 text-primary" />, items: ['SQL', 'Python', 'Java', 'JavaScript'] },
  { category: 'Web', icon: <FaDatabase className="me-2 text-success" />, items: ['MongoDB', 'Express', 'React', 'Node.js (MERN)'] },
  { category: 'Specializations', icon: <FaMicrochip className="me-2 text-info" />, items: ['IoT Solutions', 'AI/ML Integration'] },
];
const Skills = () => (
  <section id="skills" className="py-5 bg-white position-relative">
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}>
          <FaCode />
        </span>
        <h2 className="h3 fw-bold mb-0 text-primary">Skills</h2>
      </div>
      <div className="row g-4 fade-in">
        {skills.map((group, idx) => (
          <div className="col-md-4" key={group.category}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title mb-3">{group.icon}{group.category}</h5>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span className="badge bg-primary bg-opacity-75 fs-6 px-3 py-2" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="section-divider bg-gradient-primary position-absolute top-0 start-0 w-100" style={{ height: 6 }}></div>
  </section>
);
export default Skills;
