import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem 0',
            marginTop: '4rem',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    textAlign: 'center',
                }}
            >
                {/* Copyright Text */}
                <p style={{
                    color: '#9ca3af',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                }}>
                    © {currentYear} Ganesh Kulakarni. All rights reserved.
                </p>

                {/* Additional Info */}
                <p style={{
                    color: '#6b7280',
                    fontSize: '0.85rem',
                }}>
                  
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
