
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-xl font-display font-medium">Hitanshu</Link>
        </motion.div>
        
        <motion.nav 
          className="flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#about" className="nav-link">about me</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#resume" className="nav-link">resume</a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
