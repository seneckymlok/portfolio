import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        technologies: string[];
        image?: string;
        color?: string;
        link?: string;
        featured?: boolean;
    };
    index: number;
}

const ProjectCard = ({
                         project,
                         index,
                     }: ProjectCardProps) => {
    const [isHovering, setIsHovering] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: index * 0.1, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group"
        >
            <a
                href={project.link || '#'}
                className="block overflow-hidden border-2 border-gray-300 hover:border-black transition-all duration-500"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    <motion.div
                        className={`relative h-64 md:h-96 overflow-hidden bg-gradient-to-br ${
                            project.color || 'from-gray-100 to-gray-50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                    >
                        {project.image && (
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                        )}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovering ? 0.15 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="p-8 md:p-12 flex flex-col justify-center"
                        initial={{ x: 0 }}
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-6">
                            <h3 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
                                {project.title}
                            </h3>
                            {project.featured && (
                                <motion.span
                                    className="inline-block text-xs font-bold tracking-widest uppercase text-gray-600 bg-gray-100 px-3 py-1 mb-4"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    Featured Project
                                </motion.span>
                            )}
                        </div>

                        <p className="text-gray-700 text-lg mb-8 leading-relaxed font-light">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.map((tech, idx) => (
                                <motion.span
                                    key={idx}
                                    className="text-xs font-semibold px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 group-hover:bg-black group-hover:text-white transition-all duration-300"
                                    whileHover={{ y: -2 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            className="flex items-center gap-2 text-black font-bold text-lg group-hover:gap-4 transition-all duration-300"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <span>View Project</span>
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: isHovering ? 6 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </motion.svg>
                        </motion.div>
                    </motion.div>
                </div>
            </a>
        </motion.div>
    );
};

export default ProjectCard;
