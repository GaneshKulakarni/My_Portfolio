import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiMysql,
    SiPython,
    SiGit,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript
} from 'react-icons/si';
import { Server, Code } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React.js', icon: <SiReact size={24} />, color: '#61dafb' },
                { name: 'HTML', icon: <SiHtml5 size={24} />, color: '#e34f26' },
                { name: 'CSS', icon: <SiCss3 size={24} />, color: '#1572b6' },
                { name: 'JavaScript', icon: <SiJavascript size={24} />, color: '#f7df1e' },
                { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: '#06b6d4' },
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', icon: <SiNodedotjs size={24} />, color: '#68a063' },
                { name: 'Express.js', icon: <SiExpress size={24} />, color: '#ffffff' },
                { name: 'MongoDB', icon: <SiMongodb size={24} />, color: '#47a248' },
                { name: 'MySQL', icon: <SiMysql size={24} />, color: '#4479a1' },
                { name: 'Python', icon: <SiPython size={24} />, color: '#3776ab' },
                { name: 'Java', icon: <Code size={24} />, color: '#f89820' },
                { name: 'REST APIs', icon: <Server size={24} />, color: '#a855f7' },
            ]
        },
        {
            category: 'Other Tools',
            skills: [
                { name: 'Git', icon: <SiGit size={24} />, color: '#f05032' },
                { name: 'GitHub', icon: <SiGithub size={24} />, color: '#ffffff' },
            ]
        }
    ];

    return (
        <section className="section" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    <span style={{ color: 'white' }}>My</span> Skills
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 }}
                        >
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                {category.category}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                justifyContent: 'center',
                            }}>
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: `0 4px 20px ${skill.color} 60`,
                                        }}
                                        className="glass"
                                        style={{
                                            padding: '0.75rem 1.25rem',
                                            borderRadius: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.6rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            minWidth: 'fit-content',
                                        }}
                                    >
                                        <div style={{
                                            color: skill.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            {skill.icon}
                                        </div>
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            color: '#fff',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
