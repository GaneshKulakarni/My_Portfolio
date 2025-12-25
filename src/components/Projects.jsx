import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Earth Together',
            shortDesc: 'Environmental awareness platform promoting sustainability and community engagement.',
            fullDesc: 'Earth Together is a comprehensive environmental awareness platform built with the MERN stack. It features real-time collaboration tools, community forums, and educational resources to promote sustainability. Users can participate in environmental challenges, track their carbon footprint, and connect with like-minded individuals working towards a greener future. This is one of my most actively developed projects with continuous updates and improvements.',
            techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
            image: '/earth-together.png',
            link: 'https://github.com/GaneshKulakarni/EarthTogether',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            title: 'Image Generation Website',
            shortDesc: 'AI-powered platform for creating stunning images using advanced generative models.',
            fullDesc: 'An innovative image generation platform leveraging cutting-edge AI technology to create unique, high-quality images from text prompts. Built with React.js for a seamless user interface and integrated with powerful AI APIs. Features include customizable generation parameters, image history, and the ability to download and share creations.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI APIs', 'Framer Motion'],
            image: '/image-gen.png',
            link: 'https://github.com/GaneshKulakarni/image-generation',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            title: 'AI Summarizer',
            shortDesc: 'Intelligent content summarization tool using advanced NLP techniques.',
            fullDesc: 'AI Summarizer is a powerful tool that uses Natural Language Processing to condense lengthy articles, documents, and notes into concise summaries. Built with modern web technologies and integrated with advanced AI models, it helps users quickly extract key information from large volumes of text. Features include multi-format support, adjustable summary length, and keyword extraction.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'Python', 'NLP', 'REST APIs'],
            image: '/ai-summarizer.png',
            link: 'https://github.com/GaneshKulakarni/ai_summarizer',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
    ];

    return (
        <section className="section" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    <span style={{ color: 'white' }}>Featured</span> Projects
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '200px',
                                overflow: 'hidden',
                                background: '#1a1a2e',
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    marginBottom: '1rem',
                                    color: '#fff',
                                }}>
                                    {project.title}
                                </h3>

                                {/* Tech Stack Badges */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                    marginBottom: '1rem',
                                }}>
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            style={{
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '20px',
                                                background: 'rgba(99, 102, 241, 0.2)',
                                                border: '1px solid rgba(99, 102, 241, 0.4)',
                                                fontSize: '0.8rem',
                                                fontWeight: 500,
                                                color: '#a5b4fc',
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p style={{
                                    color: '#d1d5db',
                                    marginBottom: '1rem',
                                    lineHeight: 1.6,
                                }}>
                                    {project.shortDesc}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    gap: '0.75rem',
                                    flexWrap: 'wrap',
                                }}>
                                    <motion.button
                                        onClick={() => setSelectedProject(project)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.25rem',
                                            borderRadius: 'var(--radius-md)',
                                            background: 'rgba(99, 102, 241, 0.2)',
                                            border: '1px solid rgba(234, 234, 243, 0.4)',
                                            color: '#a5b4fc',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Read More
                                    </motion.button>

                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-primary"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            padding: '0.75rem 1.25rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        View Project
                                        <ExternalLink size={16} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '1rem',
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass"
                            style={{
                                maxWidth: '600px',
                                width: '100%',
                                maxHeight: '80vh',
                                overflowY: 'auto',
                                borderRadius: 'var(--radius-lg)',
                                padding: '2rem',
                                position: 'relative',
                                border: '1px solid rgba(247, 240, 240, 1)',
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(239, 68, 68, 0.2)',
                                    border: '1px solid rgba(239, 68, 68, 0.4)',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#fca5a5',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Content */}
                            <div style={{
                                width: '100%',
                                height: '200px',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                background: '#1a1a2e',
                                marginBottom: '1.5rem',
                            }}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '1rem',
                            }}>
                                {selectedProject.title}
                            </h3>

                            {/* Tech Stack */}
                            <div style={{
                                marginBottom: '1.5rem',
                            }}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#a5b4fc',
                                    marginBottom: '0.75rem',
                                }}>
                                    Tech Stack:
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5rem',
                                }}>
                                    {selectedProject.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            style={{
                                                padding: '0.4rem 1rem',
                                                borderRadius: '20px',
                                                background: 'rgba(99, 102, 241, 0.3)',
                                                border: '1px solid rgba(99, 102, 241, 0.5)',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                color: '#c7d2fe',
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Full Description */}
                            <div style={{
                                marginBottom: '1.5rem',
                            }}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#a5b4fc',
                                    marginBottom: '0.75rem',
                                }}>
                                    Description:
                                </h4>
                                <p style={{
                                    color: '#d1d5db',
                                    lineHeight: 1.8,
                                    fontSize: '1rem',
                                }}>
                                    {selectedProject.fullDesc}
                                </p>
                            </div>

                            {/* View Project Button */}
                            <motion.a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1rem',
                                    padding: '0.875rem 1.75rem',
                                    textDecoration: 'none',
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                View Project on GitHub
                                <ExternalLink size={18} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
