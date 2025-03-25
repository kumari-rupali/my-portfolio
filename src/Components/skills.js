import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaGithub, FaJsSquare, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiChai, SiJira, SiMocha, SiNetlify, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si';
import "../styles/skills.css";

const skills = [
  {
    name: 'ReactJS',
    icon: <FaReact />,
    link: 'https://reactjs.org/',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    icon: <FaCss3 />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
    link: 'https://getbootstrap.com/',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    link: 'https://nodejs.org/',
  },
  {
    name: 'MySQL',
    icon: <FaDatabase />,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'Git',
    icon: <FaGithub />,
    link: 'https://git-scm.com/',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    link: 'https://www.postman.com/',
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
    link: 'https://www.figma.com/',
  },
  {
    name: 'Jira',
    icon: <SiJira />,
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'Mocha',
    icon: <SiMocha />,
    link: 'https://mochajs.org/',
  },
  {
    name: 'Chai',
    icon: <SiChai />,
    link: 'https://www.chaijs.com/',
  },
  {
    name: 'Netlify',
    icon: <SiNetlify />,
    link: 'https://www.netlify.com/',
  },
  {
    name: 'Vercel',
    icon: <SiVercel />,
    link: 'https://www.vercel.com/',
  }
];

const Skills = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="skills-section"
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.a>
          ))}
        </div>
      </motion.div>
  );
};

export default Skills;
