import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaGithub, FaJsSquare, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiChai, SiExpress, SiJira, SiMocha, SiNetlify, SiPostman, SiTailwindcss, SiVercel } from 'react-icons/si';
import "../styles/skills.css";

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const skills = {
  frontend: [
    {
      name: 'ReactJS',
      icon: <FaReact className="icon" />,
      link: 'https://reactjs.org/',
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="icon" />,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 className="icon" />,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS3',
      icon: <FaCss3 className="icon" />,
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="icon" />,
      link: 'https://tailwindcss.com/',
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap className="icon" />,
      link: 'https://getbootstrap.com/',
    }
  ],
  backend: [
    {
      name: 'Node.js',
      icon: <FaNodeJs className="icon" />,
      link: 'https://nodejs.org/',
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="icon" />,
      link: 'https://expressjs.com/',
    },
    {
      name: 'MySQL',
      icon: <FaDatabase className="icon" />,
      link: 'https://www.mysql.com/',
    }
  ],
  tools: [
    {
      name: 'Git',
      icon: <FaGithub className="icon" />,
      link: 'https://git-scm.com/',
    },
    {
      name: 'Postman',
      icon: <SiPostman className="icon" />,
      link: 'https://www.postman.com/',
    },
    {
      name: 'Figma',
      icon: <FaFigma className="icon" />,
      link: 'https://www.figma.com/',
    },
    {
      name: 'Jira',
      icon: <SiJira className="icon" />,
      link: 'https://www.atlassian.com/software/jira',
    },
    {
      name: 'Mocha',
      icon: <SiMocha className="icon" />,
      link: 'https://mochajs.org/',
    },
    {
      name: 'Chai',
      icon: <SiChai className="icon" />,
      link: 'https://www.chaijs.com/',
    },
    {
      name: 'Netlify',
      icon: <SiNetlify className="icon" />,
      link: 'https://www.netllify.com/',
    },
    {
      name: 'Vercel',
      icon: <SiVercel className="icon" />,
      link: 'https://www.vercel.com/',
    }
  ]
};

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const renderSkillCategory = (category, title) => (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-grid">
        {category.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-content">
              <a 
                href={skill.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="skill-link"
              >
                {skill.name}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`skills ${darkMode ? 'dark' : 'light'}`}>
      <motion.div
        className="skills-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills & Technologies</h2>
        {renderSkillCategory(skills.frontend, 'Front-end Development')}
        {renderSkillCategory(skills.backend, 'Back-end Development')}
        {renderSkillCategory(skills.tools, 'Tools & Platforms')}
      </motion.div>
    </div>
  );
};

export default Skills;
