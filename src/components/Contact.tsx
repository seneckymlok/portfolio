import React from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
    const email = 'filipphegedus@gmail.com'

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Let's Work Together
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Have a project in mind? Interested in collaboration? Reach out directly.
                    </motion.p>

                    <motion.a
                        href={`mailto:${email}`}
                        className={styles.emailLink}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className={styles.label}>Send Email</span>
                        <span className={styles.email}>{email}</span>
                    </motion.a>

                    <motion.div
                        className={styles.footer}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className={styles.divider} />

                        <div className={styles.links}>
                            <a
                                href="https://github.com/filipphegedus"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                Twitter
                            </a>
                        </div>

                        <p className={styles.copyright}>© 2024 Filip Hegedus. All rights reserved.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
