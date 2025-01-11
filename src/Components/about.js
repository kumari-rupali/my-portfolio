import React from 'react';
import { motion } from 'framer-motion';
import "../styles/about.css";
import { SiNodedotjs, SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiGit } from 'react-icons/si';

const About = () => {  
  const skills = [
    { name: 'React', logo: <SiReact /> },
    { name: 'Node.js', logo: <SiNodedotjs /> },
    { name: 'JavaScript', logo: <SiJavascript /> },
    { name: 'HTML5', logo: <SiHtml5 /> },
    { name: 'CSS3', logo: <SiCss3 /> },
    { name: 'Bootstrap', logo: <SiBootstrap /> },
    { name: 'Git', logo: <SiGit /> }
  ];

  const experience = [
    {
      company: 'Kaaylabs Pvt. Ltd.',
      role: 'Associate Software Engineer',
      duration: 'Jan 2023 - Present',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Implemented RESTful APIs and integrated with various services',
        'Collaborated with cross-functional teams to deliver high-quality software'
      ]
    }
  ];

  const darkMode = false;

  return (
    <motion.div
      className={`about ${darkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        <h2>About Me</h2>
        
        <div className="bio-section">
          <p>
            I am a passionate and dedicated Software Engineer with over a year of experience in full-stack development. 
            I specialize in building scalable, intuitive web applications using modern frameworks like ReactJS and NodeJS.
          </p>
          <p>
            I completed my Bachelor's degree in Computer Science & Engineering (BE.CSE) from Aarupadai veedu institute of technology, 
            Chennai, Tamilnadu.
          </p>
        </div>

        <div className="experience-section">
          <h3>Professional Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <h4>{exp.role} @ {exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.logo}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
