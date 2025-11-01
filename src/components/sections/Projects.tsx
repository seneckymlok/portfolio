import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    color?: string;
    link?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Premium Wine Experience',
        description: 'Sophisticated e-commerce platform with advanced filtering, seamless checkout, and curated product showcase.',
        technologies: ['React', 'TypeScript', 'Tailwind', 'E-commerce'],
        color: 'from-red-50 to-orange-50',
        featured: true,
    },
    {
        id: 2,
        title: 'NexysTech Dashboard',
        description: 'Real-time business management system with analytics, order tracking, and customer relationship features.',
        technologies: ['React', 'TypeScript', 'Vite', 'Real-time'],
        color: 'from-blue-50 to-cyan-50',
        featured: true,
    },
    {
        id: 3,
        title: 'Portfolio Showcase',
        description: 'Brutalist design portfolio with smooth animations and minimal aesthetic.',
        technologies: ['React', 'Framer Motion', 'Three.js'],
        color: 'from-gray-50 to-slate-50',
    },
    {
        id: 4,
        title: 'Web Dev Services',
        description: 'Conversion-optimized landing with service packages and automated contact system.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        color: 'from-amber-50 to-yellow-50',
    },
];

const Projects = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section id="projects" className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight">
                        Selected <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300">
              Work
            </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl font-light">
                        Projects that showcase problem-solving, technical excellence, and design thinking.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-12">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.link || '#'}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="group block"
                        >
                            <motion.div
                                whileHover={{ y: -12 }}
                                className="overflow-hidden border-3 border-gray-300 hover:border-black transition-all duration-500"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                    {/* Image */}
                                    <motion.div
                                        className={`relative h-64 md:h-80 bg-gradient-to-br ${project.color}`}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black"
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="w-full h-full flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    rotate: hoveredId === project.id ? 360 : 0,
                                                    scale: hoveredId === project.id ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.8 }}
                                                className="w-24 h-24 border-3 border-gray-300 rounded-full flex items-center justify-center"
                                            >
                                                <div className="w-16 h-16 border-2 border-gray-400 rounded-full" />
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div className="p-8 md:p-12 flex flex-col justify-center bg-white relative z-10">
                                        <div className="mb-6 flex items-start justify-between">
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-black mb-2 leading-tight">
                                                    {project.title}
                                                </h3>
                                                {project.featured && (
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileHover={{ opacity: 1, x: 0 }}
                                                        className="inline-block text-xs font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1 mt-2"
                                                    >
                                                        Featured
                                                    </motion.span>
                                                )}
                                            </div>
                                            <motion.div
                                                animate={{ x: hoveredId === project.id ? 8 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </motion.div>
                                        </div>

                                        <p className="text-gray-700 text-lg mb-8 leading-relaxed font-light">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    whileHover={{ y: -4, backgroundColor: '#000', color: '#fff' }}
                                                    className="text-xs font-bold px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 transition-all duration-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
