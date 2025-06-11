import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  index: number;
  demoLink?: string;
  readMoreLink?: string;
  Icon?: LucideIcon;
  customImage?: string;
}

const ProjectCard = ({ title, description, index, demoLink, readMoreLink, Icon, customImage }: ProjectCardProps) => {
  const handleDemoClick = (e: React.MouseEvent) => {
    if (demoLink?.startsWith('http')) {
      window.open(demoLink, '_blank');
      e.preventDefault();
    }
  };

  return (
    <motion.div 
      className="portfolio-card overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-40 rounded-lg mb-6 overflow-hidden relative group-hover:shadow-lg transition-all duration-300" style={{
        background: customImage && customImage.includes('french-fries') ? '#FFF5E6' : 
                   customImage && customImage.includes('event-flow') ? '#E6E6FA' : 
                   customImage && customImage.includes('vibes') ? '#4B0082' : 
                   customImage && customImage.includes('swiggy') ? '#FF6B00' : 
                   customImage && customImage.includes('taco') ? '#FFE680' :
                   'rgb(229 231 235)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-100 bg-opacity-80" style={{
          background: customImage && customImage.includes('french-fries') ? 'linear-gradient(to bottom right, #FFF5E6, #FFE8CC)' : 
                     customImage && customImage.includes('event-flow') ? 'linear-gradient(to bottom right, #E6E6FA, #D8BFD8)' : 
                     customImage && customImage.includes('vibes') ? 'linear-gradient(to bottom right, #4B0082, #8A2BE2)' : 
                     customImage && customImage.includes('swiggy') ? 'linear-gradient(to bottom right, #FF6B00, #FF8C42)' : 
                     customImage && customImage.includes('taco') ? 'linear-gradient(to bottom right, #FFFACD, #FFE680)' :
                     'linear-gradient(to bottom right, rgb(209 213 219), rgb(243 244 246))'
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)50%,rgba(0,0,0,0.02)75%,transparent_75%,transparent)] bg-[length:10px_10px]" />
        {customImage ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {customImage.includes('vibes') ? (
              <div className="text-white text-5xl font-bold" style={{ fontFamily: 'Arial Rounded MT Bold, sans-serif', letterSpacing: '1px' }}>vibes</div>
            ) : customImage.includes('swiggy') ? (
              <div className="text-white text-5xl font-bold uppercase">SWIGGY</div>
            ) : (
              <img src={customImage} alt={title} className="h-32 object-contain" />
            )}
          </div>
        ) : Icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={48} className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-2 text-gray-900 group-hover:text-portfolio-accent transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex gap-4">
        {readMoreLink && (
          <Link to={readMoreLink} className="btn-secondary">
            Read More
          </Link>
        )}
        {demoLink && title !== "Product Teardown" && (
          <Link 
            to={demoLink} 
            className="btn-secondary bg-transparent hover:bg-transparent border border-gray-200 hover:border-gray-300"
            onClick={handleDemoClick}
          >
            Demo
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
