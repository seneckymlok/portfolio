import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: (e.clientX - rect.left) / rect.width - 0.5,
                y: (e.clientY - rect.top) / rect.height - 0.5,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
        >
            {/* Animated grid */}
            <motion.div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                        backgroundSize: '100px 100px',
                    }}
                />
            </motion.div>

            {/* Floating orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-20 blur-3xl"
                animate={{
                    x: mousePosition.x * 80,
                    y: mousePosition.y * 80,
                }}
                transition={{ type: 'spring', stiffness: 30, damping: 10 }}
                style={{ top: '-10%', right: '-5%' }}
            />
            <motion.div
                className="absolute w-72 h-72 rounded-full bg-gradient-to-tl from-amber-100 to-transparent opacity-15 blur-3xl"
                animate={{
                    x: mousePosition.x * -60,
                    y: mousePosition.y * -60,
                }}
                transition={{ type: 'spring', stiffness: 30, damping: 10 }}
                style={{ bottom: '-5%', left: '-5%' }}
            />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-12"
                >
                    <motion.div
                        className="inline-block px-4 py-2 border border-gray-400 rounded-full text-xs font-bold tracking-widest uppercase text-gray-700 backdrop-blur-sm bg-white/50"
                        whileHover={{ scale: 1.05, borderColor: '#000' }}
                    >
                        ✨ Web Developer & Creative Developer
                    </motion.div>
                </motion.div>

                {/* Main headline */}
                <div className="mb-8 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    >
                        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-black tracking-tighter leading-none">
                            Filip
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                    >
                        <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                            Hegedus
                        </h1>
                    </motion.div>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Building <span className="font-bold">digital experiences</span> that feel effortless, look intentional, and perform flawlessly.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="group relative px-10 py-5 bg-black text-white font-bold text-lg overflow-hidden border-2 border-black"
                    >
                        <motion.span className="relative z-10 block">Explore Work</motion.span>
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg opacity-0"
                            whileHover={{ opacity: 1 }}
                        >
                            Explore Work
                        </motion.span>
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                        }}
                        whileTap={{ scale: 0.92 }}
                        className="px-10 py-5 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-32 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Scroll to explore</span>
                        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
