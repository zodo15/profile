
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Resume = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
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
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center space-x-8">
            <a href="https://www.linkedin.com/in/hitanshu-parekh-5b1758192" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-accent transition-colors duration-300 flex items-center gap-2">
              <Linkedin className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-display">LinkedIn</span>
            </a>
            <a href="mailto:parekhhitanshu15@gmail.com" className="text-gray-600 hover:text-portfolio-accent transition-colors duration-300 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-display">parekhhitanshu15@gmail.com</span>
            </a>
            <a href="tel:+918779535198" className="text-gray-600 hover:text-portfolio-accent transition-colors duration-300 flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-display leading-none">+91 8779535198</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
