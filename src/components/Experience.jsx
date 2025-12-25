import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Rocket } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            year: '2023 - Present',
            title: 'B.Tech IT at Malla Reddy Engineering College',
            icon: <Briefcase size={24} />,
            color: '#6366f1',
        },
        {
            year: 'Jan 2025',
            title: '1st Prize - Thintava at VIT Chennai Hackathon',
            icon: <Rocket size={24} />,
            color: '#22d3ee',
        },
        {
            year: 'Feb 2025',
            title: 'Top 10 - Agent-A-Thon 2025 (Agentic AI)',
            icon: <Globe size={24} />,
            color: '#ec4899',
        },
    ];

    return (
        <section className="section" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Experience</h2>

                <div style={{
                    maxWidth: '800px',
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
                        background: 'linear-gradient(180deg, #22d3ee 0%, #6366f1 50%, #ec4899 100%)',
                        transform: 'translateX(-50%)',
                    }} />

                    {experiences.map((exp, index) => (
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
                            {/* Icon in center */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: exp.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: `0 0 20px ${exp.color}80`,
                                zIndex: 1,
                            }}>
                                {exp.icon}
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
                                }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: '#22d3ee',
                                    marginBottom: '0.5rem',
                                    fontWeight: 500,
                                }}>
                                    {exp.year}
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                }}>
                                    {exp.title}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
