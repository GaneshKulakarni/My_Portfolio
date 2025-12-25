import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Simple mailto solution - opens user's email client
    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open user's email client with pre-filled data
        window.location.href = `mailto:ganeshkulakarni124@gmail.com?subject=${subject}&body=${body}`;

        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: <FaLinkedin size={24} />, color: '#0077b5', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kulakarniganesh' },
        { icon: <FaTwitter size={24} />, color: '#1da1f2', label: 'Twitter', url: 'https://twitter.com' },
        { icon: <FaGithub size={24} />, color: '#333', label: 'GitHub', url: 'https://github.com/GaneshKulakarni' },
        { icon: <Mail size={24} />, color: '#ea4335', label: 'Email', url: 'mailto:ganeshkulakarni124@gmail.com' },
    ];

    return (
        <section className="section" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Get In Touch</h2>

                <div style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                }}>
                    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(26, 31, 58, 0.4)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#22d3ee'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(26, 31, 58, 0.4)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#22d3ee'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    background: 'rgba(26, 31, 58, 0.4)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'vertical',
                                    fontFamily: 'inherit',
                                    transition: 'all 0.3s ease',
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#22d3ee'}
                                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                fontSize: '1.1rem',
                            }}
                        >
                            Send Message
                        </motion.button>
                    </form>

                    {/* Social Links */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginTop: '2rem',
                    }}>
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="glass"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = link.color;
                                    e.currentTarget.style.boxShadow = `0 0 20px ${link.color}80`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(26, 31, 58, 0.4)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
