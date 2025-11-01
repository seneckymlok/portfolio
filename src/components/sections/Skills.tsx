import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
    {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
        color: 'from-blue-100 to-cyan-100',
    },
    {
        category: 'Tools',
        items: ['Vite', 'Git', 'GitHub', 'WebStorm', 'Figma'],
        color: 'from-purple-100 to-pink-100',
    },
    {
        category: 'Advanced',
        items: ['Three.js', 'WebGL', 'System Design', 'Performance', 'UX'],
        color: 'from-amber-100 to-orange-100',
    },
    {
        category: 'Learning',
        items: ['Machine Learning', 'Python', 'Cloud Deployment', 'Data Science'],
        color: 'from-green-100 to-emerald-100',
    },
];

const Skills = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section id="skills" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-6xl sm:text-7xl font-black mb-20">Skills & Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                className={`p-8 border-3 border-gray-300 bg-white transition-all duration-300 cursor-pointer rounded-lg bg-gradient-to-br ${skill.color}`}
                            >
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-700 mb-6 pb-4 border-b-2 border-gray-300">
                                    {skill.category}
                                </h3>

                                <div className="space-y-3">
                                    {skill.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0.6, x: -10 }}
                                            animate={{
                                                opacity: hoveredIdx === idx ? 1 : 0.7,
                                                x: hoveredIdx === idx ? 8 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-center gap-3"
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: hoveredIdx === idx ? 1.5 : 1,
                                                    rotate: hoveredIdx === idx ? 360 : 0,
                                                }}
                                                transition={{ duration: 0.4 }}
                                                className="w-2.5 h-2.5 bg-black rounded-full"
                                            />
                                            <span className="font-semibold text-gray-800">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Learning callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-16 p-12 bg-gradient-to-r from-black to-gray-900 text-white border-3 border-gray-800 rounded-lg"
                    >
                        <h3 className="text-3xl font-black mb-4">Always Evolving</h3>
                        <p className="text-lg text-gray-200 font-light">
                            Passionate about continuous learning. Currently exploring machine learning, system design, and advanced animation techniques. The best developers never stop growing.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
