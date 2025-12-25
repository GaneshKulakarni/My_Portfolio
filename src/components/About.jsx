import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Sparkles } from 'lucide-react';

const About = () => {
    const badges = [
        { icon: <Code2 size={20} />, text: 'MERN Stack Developer' },
        { icon: <Lightbulb size={20} />, text: 'N8N Automations' },
        { icon: <Sparkles size={20} />, text: 'Agentic AI Enthusiast' },
    ];

    return (
        <section className="section" id="about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    <span style={{ color: 'white' }}>About</span> Me
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '3rem',
                    alignItems: 'start',
                    maxWidth: '1100px',
                    margin: '0 auto',
                }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginTop: '5px',
                        }}
                    >
                        <div style={{
                            width: '280px',
                            height: '280px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid #22d3ee',
                            boxShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
                            animation: 'pulse-glow 3s infinite',
                        }}>
                            <img
                                src="/ganesh.jpeg"
                                alt="Ganesh Kulakarni"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </motion.div>

                    <div>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            marginBottom: '1.5rem',
                            color: '#d1d5db',
                            textAlign: 'left',
                        }}>
                            I'm a Information Technology student at Malla Reddy Engineering College with a strong passion for full-stack development and AI. I'm currently exploring the MERN stack in depth to build modern web applications, while also diving into Generative AI to understand how intelligent systems can enhance creativity and automation. Alongside these, I'm actively learning Data Structures and Algorithms in Java to sharpen my problem-solving abilities. I enjoy building real-world projects, learning new technologies, and connecting with like-minded individuals to grow as a developer and future tech innovator.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {badges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass"
                                    style={{
                                        padding: '0.75rem 1.25rem',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        color: '#22d3ee',
                                    }}
                                >
                                    {badge.icon}
                                    {badge.text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
