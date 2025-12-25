import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Using EmailJS SDK to send emails
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            const response = await emailjs.send(
                'service_xc2kffo',      // Service ID
                'template_ubzbkjb',     // Template ID
                templateParams,
                'Ngwi16u41dSZiG9w7'     // Public Key
            );

            console.log('EmailJS Response:', response);

            if (response.status === 200) {
                setStatus({
                    type: 'success',
                    message: '✓ Message sent successfully! I\'ll get back to you soon.',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus({
                type: 'error',
                message: `✗ Failed to send message. Error: ${error.text || error.message}. Please try emailing me directly at ganeshkulakarni124@gmail.com`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: <FaLinkedin size={24} />, color: '#0077b5', label: 'LinkedIn', url: 'https://www.linkedin.com/in/kulakarniganesh' },
        { icon: <FaInstagram size={24} />, color: '#E4405F', label: 'Instagram', url: 'https://www.instagram.com/ganeshkulkarni1246/' },
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
                <h2 className="section-title">
                    <span style={{ color: 'white' }}>Get</span> In Touch
                </h2>

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

                        {/* Status Message */}
                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: '1.5rem',
                                    background: status.type === 'success'
                                        ? 'rgba(34, 197, 94, 0.2)'
                                        : 'rgba(239, 68, 68, 0.2)',
                                    border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`,
                                    color: status.type === 'success' ? '#22c55e' : '#ef4444',
                                    textAlign: 'center',
                                }}
                            >
                                {status.message}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                            className="btn btn-primary"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                fontSize: '1.1rem',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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
