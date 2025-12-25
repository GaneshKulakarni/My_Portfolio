import React, { useEffect, useRef } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Star particles
        const stars = [];
        const numStars = 200;

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random();
                this.twinkleSpeed = Math.random() * 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Twinkle effect
                this.opacity += this.twinkleSpeed;
                if (this.opacity > 1 || this.opacity < 0.3) {
                    this.twinkleSpeed = -this.twinkleSpeed;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        // Cosmic waves
        let waveOffset = 0;

        function drawCosmicWaves() {
            const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient1.addColorStop(0, 'rgba(34, 211, 238, 0.05)');
            gradient1.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
            gradient1.addColorStop(1, 'rgba(236, 72, 153, 0.05)');

            ctx.strokeStyle = gradient1;
            ctx.lineWidth = 2;
            ctx.beginPath();

            for (let x = 0; x < canvas.width; x += 10) {
                const y = Math.sin((x + waveOffset) * 0.01) * 50 + canvas.height * 0.3;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();

            // Second wave
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += 10) {
                const y = Math.sin((x + waveOffset + 100) * 0.008) * 70 + canvas.height * 0.6;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();

            waveOffset += 0.5;
        }

        // Animation loop
        function animate() {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawCosmicWaves();

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 100%)',
            }}
        />
    );
};

export default StarField;
