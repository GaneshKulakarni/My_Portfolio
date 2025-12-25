import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
        }}>
            {/* Nebula clouds */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.08, 0.15, 0.08],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: `radial-gradient(ellipse at center, 
                        rgba(236, 72, 153, 0.1) 0%, 
                        rgba(139, 92, 246, 0.08) 40%, 
                        transparent 70%)`,
                    filter: 'blur(40px)',
                }}
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.08, 0.12, 0.08],
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 70,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: `radial-gradient(ellipse at center, 
                        rgba(34, 211, 238, 0.1) 0%, 
                        rgba(99, 102, 241, 0.08) 40%, 
                        transparent 70%)`,
                    filter: 'blur(40px)',
                }}
            />

            {/* Shooting stars */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    initial={{
                        x: '120vw',
                        y: `${Math.random() * 50}vh`,
                        opacity: 0,
                    }}
                    animate={{
                        x: '-20vw',
                        y: `${Math.random() * 50 + 30}vh`,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 10 + Math.random() * 5,
                        repeat: Infinity,
                        repeatDelay: 20,
                    }}
                    style={{
                        position: 'absolute',
                        width: '100px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                />
            ))}
        </div>
    );
};

export default SpaceBackground;
