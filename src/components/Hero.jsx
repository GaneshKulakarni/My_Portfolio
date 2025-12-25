import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        textShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
                    }}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Ganesh Kulakarni
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginBottom: '1rem' }}
                >
                    <span style={{
                        fontSize: '1.2rem',
                        color: '#22d3ee',
                        fontWeight: 500,
                    }}>
                        • MERN Stack Developer | Agentic AI Enthusiast •
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: '1.5rem',
                        marginBottom: '2.5rem',
                        color: '#e5e7eb',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}
                >
                    Building real-world apps | Automation Workflows | Prompt Engineer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
