// import React from 'react';
// const Resume = () => (
//   <section id="resume" className="py-5 d-flex justify-content-center bg-light">
//     <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: 900 }}>
//       <div className="d-flex align-items-center mb-4">
//         <span className="me-3 text-primary" style={{ fontSize: 32 }}>
//           <i className="bi bi-briefcase-fill"></i>
//         </span>
//         <h2 className="h3 fw-bold mb-0 text-primary">Professional Journey</h2>
//       </div>
//       <div className="row g-4">
//         {/* Education */}
//         <div className="col-md-4">
//           <h4 className="h6 text-secondary mb-2">Education</h4>
//           <ul className="list-unstyled mb-0">
//             <li className="mb-2">B.Tech CSE (IoT), Kalasalingam Academy of Research and Education — GPA: 8.98/10 — Expected 2026</li>
//             <li className="mb-2">Class XII (2022) – 91%</li>
//             <li>Class X (2020) – 87.8%</li>
//           </ul>
//         </div>
//         {/* Experience */}
//         <div className="col-md-4">
//           <h4 className="h6 text-secondary mb-2">Experience</h4>
//           <ul className="list-unstyled mb-0">
//             <li className="mb-2">Web Development Intern @ Notasco Technologies (May–June 2024) — Built Matrimony website using MERN</li>
//             <li className="mb-2">President @ IEEE ComSoc Student Chapter</li>
//             <li className="mb-2">Finalist @ National Level IBM ICE Hackathon 2025, S-VYASA University, Bangalore</li>
//             <li>Final Round Participant – IEEE RAS Robotic Car Showcase</li>
//           </ul>
//         </div>
//         {/* Achievements */}
//         <div className="col-md-4">
//           <h4 className="h6 text-secondary mb-2">Achievements</h4>
//           <ul className="list-unstyled mb-0">
//             <li className="mb-2">🥇 1st Prize – Microsoft Learning Student Chapter Project Expo</li>
//             <li className="mb-2">🥈 2nd Prize – Idea Spark National Technical Event at SKCET</li>
//             <li className="mb-2">🏅 4th Place – Dora Hacks Hackathon, Goa</li>
//             <li className="mb-2">🏅 4th Prize – Prajnotsavah 2k24 Project Expo</li>
//             <li>🔧 EXCEL Team Member – Developed Raspberry Pi 3 camera solution for partial blindness with Purdue EPICS</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </section>
// );
// export default Resume;

import React from 'react';

const Resume = () => (
  <section id="resume" className="py-5 d-flex justify-content-center bg-light">
    <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: 900 }}>
      <div className="d-flex align-items-center mb-4">
        <span className="me-3 text-primary" style={{ fontSize: 32 }}>
          <i className="bi bi-briefcase-fill"></i>
        </span>
        <h2 className="h3 fw-bold mb-0 text-primary">Professional Journey</h2>
      </div>
      <div className="row g-4">
        {/* Education */}
        <div className="col-md-4">
          <h4 className="h6 text-secondary mb-2">Education</h4>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">B.Tech CSE (IoT), Kalasalingam Academy of Research and Education — GPA: 8.98/10 — Expected 2026</li>
            <li className="mb-2">Class XII (2022) – 91%</li>
            <li>Class X (2020) – 87.8%</li>
          </ul>
        </div>
        
        {/* Experience */}
        <div className="col-md-4">
          <h4 className="h6 text-secondary mb-2">Experience</h4>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">Web Development Intern @ Notasco Technologies (May–June 2024) — Built Matrimony website using MERN</li>
            <li className="mb-2">President @ IEEE ComSoc Student Chapter</li>
            <li className="mb-2">Finalist @ National Level IBM ICE Hackathon 2025, S-VYASA University, Bangalore</li>
            <li>Final Round Participant – IEEE RAS Robotic Car Showcase</li>
          </ul>
        </div>
        
        {/* Achievements */}
        <div className="col-md-4">
          <h4 className="h6 text-secondary mb-2">Achievements</h4>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">🥇 1st Prize – Microsoft Learning Student Chapter Project Expo</li>
            <li className="mb-2">🥈 2nd Prize – Idea Spark National Technical Event at SKCET</li>
            <li className="mb-2">🏅 4th Place – Dora Hacks Hackathon, Goa</li>
            <li className="mb-2">🏅 4th Prize – Prajnotsavah 2k24 Project Expo</li>
            <li className="mb-2">🔧 EXCEL Team Member – Developed Raspberry Pi 3 camera solution for partial blindness with Purdue EPICS</li>
            <li className="mb-2">🎖️ Merit Holder – Top Performer in CSE (IoT) Stream</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
