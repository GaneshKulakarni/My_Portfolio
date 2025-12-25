import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            period: '2023 – 2027',
            institution: 'Malla Reddy Engineering College, Hyderabad',
            degree: 'Bachelor of Technology in Information Technology',
            gpa: '8.98',
            logo: '/mrec-logo.png',
            color: '#6366f1',
        },
        {
            period: '2021 – 2023',
            institution: 'Sri Chaitanya Junior College, Hyderabad',
            degree: 'Intermediate (MPC)',
            gpa: '9.61',
            logo: '/sri-chaitanya-logo.jpg',
            color: '#22d3ee',
        },
        {
            period: '2021',
            institution: 'Pragana High School, Bodhan',
            degree: 'Secondary School Education',
            gpa: '10.0',
            icon: <Award size={24} />,
            color: '#ec4899',
        },
    ];

    return (
        <section className="section" id="education">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    <span style={{ color: 'white' }}>Education</span> & Certificates
                </h2>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                }}>
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(180deg, #6366f1 0%, #22d3ee 50%, #ec4899 100%)',
                        transform: 'translateX(-50%)',
                    }} />

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '3rem',
                                position: 'relative',
                            }}
                        >
                            {/* Icon/Logo in center */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: edu.logo ? '#ffffff' : edu.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: `0 0 20px ${edu.color}80`,
                                zIndex: 1,
                                padding: edu.logo ? '8px' : '0',
                                overflow: 'hidden',
                            }}>
                                {edu.logo ? (
                                    <img
                                        src={edu.logo}
                                        alt={edu.institution}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                ) : (
                                    edu.icon
                                )}
                            </div>

                            {/* Content */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="glass"
                                style={{
                                    width: 'calc(50% - 40px)',
                                    marginLeft: index % 2 === 0 ? 0 : 'auto',
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: `1px solid ${edu.color}30`,
                                }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: edu.color,
                                    marginBottom: '0.5rem',
                                    fontWeight: 600,
                                }}>
                                    {edu.period}
                                </div>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                    marginBottom: '0.5rem',
                                }}>
                                    {edu.institution}
                                </h3>
                                <div style={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    marginBottom: '0.75rem',
                                }}>
                                    {edu.degree}
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '20px',
                                    background: `${edu.color}20`,
                                    border: `1px solid ${edu.color}40`,
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: edu.color,
                                }}>
                                    GPA: {edu.gpa}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
