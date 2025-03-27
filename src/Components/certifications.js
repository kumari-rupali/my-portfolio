import React from 'react';
import { motion } from 'framer-motion';
import "../styles/certifications.css";

const certifications = [
    { name: 'Microsoft Power BI Data Analyst', platform: 'Microsoft', duration: '3 Months', year: '2024', link: 'https://www.microsoft.com/en-us/learning/certification-overview.aspx' },
    { name: 'Web Development Essentials', platform: 'Udemy', duration: '2 Months', year: '2023', link: 'https://linkedin.com/kumarirupali' },
    { name: 'Data Foundations', platform: 'Coursera', duration: '1 Month', year: '2022', link: 'https://linkedin.com/kumarirupali' },
    { name: 'GSAP Course', platform: 'Udemy', duration: '1.5 Months', year: '2023', link: 'https://linkedin.com/kumarirupali' },
];

const Certification = () => {
    return (
        <>
            <motion.div
                className="certifications-table"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
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
        </>
    )
}

export default Certification
