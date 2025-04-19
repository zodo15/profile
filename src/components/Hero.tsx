
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block" 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I am Hitanshu.
          </motion.span>
          <motion.span 
            className="block text-portfolio-accent tracking-wide leading-tight" 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Aspiring Product Manager
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <a 
            ref={buttonRef}
            href="#contact" 
            className="btn-primary overflow-hidden relative group animate-button-pulse"
            style={{ 
              '--mouse-x': '0px', 
              '--mouse-y': '0px' 
            } as React.CSSProperties}
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 bg-portfolio-accent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(26, 115, 232, 0.4) 0%, transparent 70%)'
            }}></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
