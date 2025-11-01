import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
    const [activeTab, setActiveTab] = useState<'about' | 'journey'>('about');
    const [hoveredStat, setHoveredStat] = useState<number | null>(null);

    const stats = [
        { label: 'Projects Completed', value: '20+' },
        { label: 'Years Learning', value: '3+' },
        { label: 'Tech Stack Items', value: '15+' },
        { label: 'Coffee Cups', value: '∞' },
    ];

    return (
        <section id="about" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2
                            className="text-6xl sm:text-7xl font-black mb-12 leading-tight"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            About <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                My Journey
              </span>
                        </motion.h2>

                        {/* Tabs */}
                        <div className="flex gap-6 mb-12 border-b-3 border-gray-300 pb-6">
                            {(['about', 'journey'] as const).map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'text-black border-b-4 border-black -mb-6'
                                            : 'text-gray-500 hover:text-gray-800'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {tab}
                                </motion.button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            {activeTab === 'about' ? (
                                <>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        I'm a passionate <strong>web developer & designer</strong> from Slovakia dedicated to crafting digital experiences that are beautiful, performant, and intuitive.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        I obsess over details—from typography rhythm to animation timing. I believe great products emerge when technical precision meets design thinking.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Currently building <strong>NexysTech</strong>, working on freelance projects, and continuously exploring the intersection of code and creativity.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Started with curiosity about web technology. Self-taught through books, courses, and countless projects. Every project teaches something.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        2023: First freelance projects. 2024: Founded NexysTech. 2025: Deep diving into system design, advanced animations, and machine learning.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Philosophy: Stay curious, build continuously, embrace failure as learning, and always push for craft over convenience.
                                    </p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setHoveredStat(idx)}
                                onMouseLeave={() => setHoveredStat(null)}
                                whileHover={{ y: -8 }}
                                className="p-8 border-2 border-gray-300 hover:border-black transition-all duration-300 cursor-pointer bg-white"
                            >
                                <motion.div
                                    animate={{
                                        fontSize: hoveredStat === idx ? '3rem' : '2.5rem',
                                        color: hoveredStat === idx ? '#000' : '#666',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="font-black mb-3 leading-none"
                                >
                                    {stat.value}
                                </motion.div>
                                <p className="text-sm uppercase tracking-wider font-bold text-gray-600">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}

                        {/* Info boxes */}
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="col-span-2 p-8 bg-black text-white border-2 border-gray-800"
                        >
                            <p className="text-xs uppercase tracking-widest font-bold mb-3 text-gray-400">Location</p>
                            <p className="text-3xl font-black">Bratislava, SK</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
