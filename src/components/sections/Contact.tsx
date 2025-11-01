import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [, setIsHovering] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            id="contact"
            className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300"
        >
            <div className="max-w-5xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight"
                    >
                        Let's Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
              Something Great
            </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        I'm always interested in hearing about new projects and creative challenges. Let's connect and explore how we can create something meaningful together.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <motion.a
                            href="mailto:filipphegedus@gmail.com"
                            whileHover={{ scale: 1.1, y: -8 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-14 py-7 bg-black text-white font-bold text-xl border-3 border-black overflow-hidden relative group"
                        >
                            <motion.span className="relative z-10 block">
                                Get in Touch
                            </motion.span>
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                            <motion.span
                                className="absolute inset-0 flex items-center justify-center text-black font-bold text-xl opacity-0"
                                whileHover={{ opacity: 1 }}
                            >
                                Get in Touch
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex justify-center gap-12"
                    >
                        {[
                            { label: 'Email', href: 'mailto:filipphegedus@gmail.com' },
                            { label: 'GitHub', href: 'https://github.com' },
                            { label: 'LinkedIn', href: 'https://linkedin.com' },
                        ].map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{
                                    y: -6,
                                    color: '#000',
                                    fontWeight: 700,
                                }}
                                className="text-gray-600 font-semibold text-lg transition-all duration-300"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
