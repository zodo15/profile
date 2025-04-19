
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title after:left-1/4 after:right-1/4 after:w-1/2">Get in touch</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <a href="mailto:parekhhitanshu15@gmail.com" className="text-2xl md:text-3xl font-display hover:text-portfolio-accent transition-colors duration-300">
            parekhhitanshu15@gmail.com
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-8"
        >
          <a href="https://www.linkedin.com/in/hitanshu-parekh-5b1758192" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-accent transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:parekhhitanshu15@gmail.com" className="text-gray-600 hover:text-portfolio-accent transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
