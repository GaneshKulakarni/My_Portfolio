import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSatellite = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Random starting position
        setPosition({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
        });
    }, []);

    return (
        <>
            {/* Satellite 1 - Large, slow moving with 3D rotation */}
            <motion.div
                animate={{
                    x: [0, 300, 600, 300, 0],
                    y: [0, -200, 0, 200, 0],
                    rotateX: [0, 360, 0],
                    rotateY: [0, 360, 0],
                    rotateZ: [0, 180, 360],
                    scale: [1, 1.2, 1, 0.8, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    position: 'fixed',
                    top: '10%',
                    left: '10%',
                    width: '150px',
                    height: '150px',
                    opacity: 0.4,
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.6)) brightness(1.2) contrast(1.1)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                }}
            >
                <img
                    src="/satellite.png"
                    alt="Satellite"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        filter: 'brightness(1.3)',
                    }}
                />
            </motion.div>

            {/* Satellite 2 - Medium, faster with tumbling effect */}
            <motion.div
                animate={{
                    x: [0, -400, -200, 100, 0],
                    y: [0, 300, -100, 200, 0],
                    rotateX: [0, -180, -360],
                    rotateY: [0, 180, 360],
                    rotateZ: [0, -360, 0],
                    scale: [1, 0.9, 1.1, 1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    position: 'fixed',
                    top: '50%',
                    right: '5%',
                    width: '120px',
                    height: '120px',
                    opacity: 0.35,
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.5)) brightness(1.2) contrast(1.1)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                }}
            >
                <img
                    src="/satellite.png"
                    alt="Satellite"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        filter: 'brightness(1.3)',
                    }}
                />
            </motion.div>

            {/* Satellite 3 - Small, orbital with spinning */}
            <motion.div
                animate={{
                    x: [0, 200, 400, 200, 0],
                    y: [0, -300, 0, 300, 0],
                    rotateX: [0, 720, 0],
                    rotateY: [0, -360, 0],
                    rotateZ: [0, 720, 0],
                    scale: [1, 1.3, 1, 0.7, 1],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    position: 'fixed',
                    bottom: '15%',
                    left: '20%',
                    width: '100px',
                    height: '100px',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    zIndex: 1,
                    filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.4)) brightness(1.2) contrast(1.1)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                }}
            >
                <img
                    src="/satellite.png"
                    alt="Satellite"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        filter: 'brightness(1.3)',
                    }}
                />
            </motion.div>
        </>
    );
};

export default AnimatedSatellite;
