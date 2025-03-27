import React from 'react';
import { motion } from 'framer-motion';
import "../styles/experience.css";

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

const Experience = () => {
    return (
        <>
            <motion.div
                className="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
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
        </>
    )
}

export default Experience;
