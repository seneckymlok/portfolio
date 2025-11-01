import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                {/* Title */}
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                >
                    FILIP
                    <br />
                    HEGEDUS
                </motion.h1>

                {/* Description */}
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    Web developer building production-grade digital experiences.
                </motion.p>

                {/* Focus areas */}
                <motion.p
                    className={styles.focus}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                >
                    React · TypeScript · Full Stack
                </motion.p>

                {/* Divider */}
                <motion.div
                    className={styles.divider}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />

                {/* Stats/Meta */}
                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                >
                    <span>Bratislava, SK</span>
                    <span className={styles.separator}>·</span>
                    <span>3+ Years</span>
                    <span className={styles.separator}>·</span>
                    <span>50+ Projects</span>
                </motion.div>
            </div>

            {/* Bottom scroll indicator */}
            <motion.div
                className={styles.scroll}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <span>scroll</span>
            </motion.div>
        </section>
    )
}

export default Hero
