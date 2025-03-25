import React from 'react';
import { motion } from 'framer-motion'; 
import "../styles/about.css";

const experiences = [
  {
    company: 'Kaaylabs Pvt. Ltd.',
    role: 'Associate Software Engineer',
    duration: 'Sep 2023 - Sep 2024',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented RESTful APIs and integrated with various services',
      'Collaborated with cross-functional teams to deliver high-quality software'
    ]
  },
  {
    role: 'React Developer Intern',
    company: 'Kaaylabs Pvt. Ltd.',
    duration: 'May 2023 - Sep 2023',
    description: 'Developed a Naukri profile application and a calculator tool as part of internship projects.',
  },
];

const certifications = [
  { name: 'Microsoft Power BI Data Analyst', platform: 'Microsoft', duration: '3 Months', year: '2024', link: 'https://www.microsoft.com/en-us/learning/certification-overview.aspx' },
  { name: 'Web Development Essentials', platform: 'Udemy', duration: '2 Months', year: '2023', link: 'https://linkedin.com/kumarirupali' },
  { name: 'Data Foundations', platform: 'Coursera', duration: '1 Month', year: '2022', link: 'https://linkedin.com/kumarirupali' },
  { name: 'GSAP Course', platform: 'Udemy', duration: '1.5 Months', year: '2023', link: 'https://linkedin.com/kumarirupali' },
];

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bio-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="bio-text">
            I am a passionate and dedicated Software Engineer with over a year of experience in full-stack development.
            I specialize in building scalable, intuitive web applications using modern frameworks like ReactJS and NodeJS.
          </p>
          <p className="bio-text">
            I completed my Bachelor's degree in Computer Science & Engineering (BE.CSE) from Aarupadai Veedu Institute of Technology,
            Chennai, Tamil Nadu.
          </p>
          <p className="bio-text">
            I craft dynamic web applications with clean, efficient, and user-friendly designs. Passionate about innovation and technology.
            Aspiring full stack web developer specializing in MERN Stack, eager to take on a challenging role in a forward-thinking company.
            Looking for growth opportunities to apply my skills and contribute to the organization's success.
          </p>
        </motion.div>
        <motion.div
        className="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        >
           <h2>Work Experience</h2>
                <div className="experience-list">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="experience-card"
                      whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                    >
                      <h3>{exp.role}</h3>
                      <h4>{exp.company}</h4>
                      <p className="duration">{exp.duration}</p>
                      <p className="description">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
        </motion.div>
          <motion.div
              className="certifications-table"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <h2>Certifications</h2>
              <table>
                <thead>
                  <tr>
                    <th>Certification Name</th>
                    <th>Platform/Provider</th>
                    <th>Duration</th>
                    <th>Year</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert, index) => (
                    <motion.tr
                      key={index}
                      whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
                    >
                      <td>{cert.name}</td>
                      <td>{cert.platform}</td>
                      <td>{cert.duration}</td>
                      <td>{cert.year}</td>
                      <td>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                        >
                          View link
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
