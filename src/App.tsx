import { motion } from 'framer-motion';
import AnimatedBackground from './components/common/AnimatedBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ScrollIndicator from './components/common/ScrollIndicator';

function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white text-black"
        >
            <AnimatedBackground />
            <ScrollIndicator />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </motion.div>
    );
}

export default App;
