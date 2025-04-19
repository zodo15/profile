
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 text-center text-gray-500 text-sm">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Hitanshu Parekh. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
