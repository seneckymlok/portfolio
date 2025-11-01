import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-600 origin-left z-50"
            style={{ scaleX }}
        />
    );
};

export default ScrollIndicator;
