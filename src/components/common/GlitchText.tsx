import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const GlitchText = ({ text, className = '', delay = 0 }: GlitchTextProps) => {
    return (
        <div className={`relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay, ease: 'easeOut' }}
            >
                {text}
            </motion.div>
            <motion.div
                className="absolute inset-0 text-transparent"
                style={{
                    backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 50%, transparent 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                }}
                animate={{ x: [0, 4, -4, 2, 0] }}
                transition={{ duration: 0.6, delay: delay + 0.3, repeat: Infinity, repeatDelay: 8 }}
            >
                {text}
            </motion.div>
        </div>
    );
};

export default GlitchText;
