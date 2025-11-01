import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-black text-white border-t-2 border-gray-800">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Filip Hegedus. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { label: 'GitHub', href: '#' },
                            { label: 'LinkedIn', href: '#' },
                            { label: 'Twitter', href: '#' },
                        ].map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent origin-center"
                />

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-xs">
                        Crafted with precision and attention to detail.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
