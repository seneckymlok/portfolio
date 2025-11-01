import React from 'react'
import { motion } from 'framer-motion'
import { ProjectItem } from '@/types'
import styles from './Portfolio.module.scss'

const Portfolio: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            id: '1',
            title: 'Premium E-Commerce Platform',
            description: 'High-performance wine e-commerce with advanced filtering, responsive design, and Stripe integration.',
            image: 'https://via.placeholder.com/800x600?text=E-Commerce',
            tools: ['React', 'TypeScript', 'SCSS', 'Stripe API'],
            outcome: '40% faster than competitors',
        },
        {
            id: '2',
            title: 'NexysTech Corporate Site',
            description: 'B2B website showcasing tech solutions with CMS integration and analytics.',
            image: 'https://via.placeholder.com/800x600?text=Corporate',
            tools: ['Next.js', 'TypeScript', 'Vercel'],
            outcome: '10k+ monthly visits',
        },
        {
            id: '3',
            title: 'Student Company Platform',
            description: 'Full-stack SaaS for order management, inventory, and logistics.',
            image: 'https://via.placeholder.com/800x600?text=SaaS',
            tools: ['React', 'Firebase', 'Node.js'],
            outcome: '200+ orders processed',
        },
        {
            id: '4',
            title: 'ML Data Dashboard',
            description: 'Real-time analytics dashboard with D3.js visualization and TensorFlow integration.',
            image: 'https://via.placeholder.com/800x600?text=Dashboard',
            tools: ['React', 'D3.js', 'Python'],
            outcome: '<100ms latency',
        },
    ]

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>Selected Work</h2>

                    <div className={styles.grid}>
                        {projects.map((project, idx) => (
                            <motion.article
                                key={project.id}
                                className={styles.project}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={project.image} alt={project.title} />
                                </div>

                                <div className={styles.projectContent}>
                                    <h3>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>

                                    <div className={styles.meta}>
                                        <div className={styles.tools}>
                                            {project.tools.map((tool) => (
                                                <span key={tool}>{tool}</span>
                                            ))}
                                        </div>
                                        <p className={styles.outcome}>{project.outcome}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio
