import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceItem } from '@/types'
import styles from './Experience.module.scss'

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            id: '1',
            company: 'NexysTech',
            role: 'Sector Lead, Slovakia',
            period: '2024 — Present',
            description: 'Technical strategy, team leadership, market development',
            highlight: true,
        },
        {
            id: '2',
            company: 'Self-Employed',
            role: 'Full-Stack Developer',
            period: '2023 — Present',
            description: 'Freelance development, architectural consulting, custom solutions',
        },
        {
            id: '3',
            company: 'NexysTech',
            role: 'Founder & CEO',
            period: '2023 — Present',
            description: 'E-commerce platform, 200+ transactions, team of 3',
        },
        {
            id: '4',
            company: 'Self-Directed',
            role: 'Engineer & Builder',
            period: '2022 — Present',
            description: 'Open source, ML projects, full-stack experimentation',
        },
    ]

    return (
        <section className={styles.experience} id="experience">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>Experience</h2>

                    <div className={styles.timeline}>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={exp.id}
                                className={`${styles.entry} ${exp.highlight ? styles.highlight : ''}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.08 }}
                            >
                                <div className={styles.marker} />

                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h3>{exp.role}</h3>
                                        <span className="text-mono">{exp.period}</span>
                                    </div>

                                    <p className={styles.company}>{exp.company}</p>
                                    <p>{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
