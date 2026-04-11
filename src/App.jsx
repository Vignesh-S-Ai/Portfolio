import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import InteractiveTerminal from './components/InteractiveTerminal';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Hero />
        <InteractiveTerminal />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <AIAssistant />
      </motion.div>
    </div>
  );
}

export default App;