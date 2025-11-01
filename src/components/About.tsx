import React from 'react'
import { motion } from 'framer-motion'
import styles from './About.module.scss'

const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.grid}>
                    {/* Left column: About text */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>About</h2>

                        <p>
                            I'm a developer from Slovakia who builds digital products with <strong>architectural rigor</strong>. Clean code, thoughtful design, and uncompromising quality.
                        </p>

                        <p>
                            Currently leading technical strategy at <strong>NexysTech</strong>. Previously: freelance full-stack development, student company (200+ orders), machine learning exploration.
                        </p>

                        <p>
                            I don't use templates. Every project starts from first principles — understanding the problem, designing the system, executing flawlessly.
                        </p>

                        <div className={styles.skills}>
                            <div className={styles.skillGroup}>
                                <span className="text-mono">Frontend</span>
                                <p>React, TypeScript, SCSS, Performance Optimization</p>
                            </div>
                            <div className={styles.skillGroup}>
                                <span className="text-mono">Backend</span>
                                <p>Node.js, Python, Firebase, SQL</p>
                            </div>
                            <div className={styles.skillGroup}>
                                <span className="text-mono">Other</span>
                                <p>Machine Learning, DevOps, System Design</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column: Visual block */}
                    <motion.div
                        className={styles.visual}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className={styles.imageBlock}>
                            <span>Portrait</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
