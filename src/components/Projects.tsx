
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Utensils, Users, Gamepad } from 'lucide-react';

const projects = [
  {
    title: "Taco Task",
    description: "A simple, fast, and delightfully intuitive task manager",
    demoLink: "https://packy-omega.vercel.app/",
    readMoreLink: "/projects/taco-task",
    icon: Utensils,
    customImage: "/taco_task.png"
  },
  {
    title: "Meal Mate",
    description: "A meal assistance app",
    demoLink: "https://meal-matee-git-main-zodo15s-projects.vercel.app",
    readMoreLink: "/projects/meal-mate",
    icon: Utensils,
    customImage: "/french-fries.png"
  },
  {
    title: "Event Flow",
    description: "A guestlist management app",
    demoLink: "https://lighthearted-sopapillas-091c8d.netlify.app",
    readMoreLink: "/projects/event-flow",
    icon: Users,
    customImage: "/event-flow.png"
  },
  {
    title: "Vibes",
    description: "A social party game",
    demoLink: "https://new-conversation-game-8yt79iiqr-zodo15s-projects.vercel.app",
    readMoreLink: "/projects/vibes",
    icon: Gamepad,
    customImage: "/vibes.svg"
  },
  {
    title: "Product Teardown",
    description: "Make Swiggy a daily use app",
    readMoreLink: "/projects/swiggy-case",
    icon: Utensils,
    customImage: "/swiggy.svg"
  }
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">PROJECTS</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              title={project.title}
              description={project.description}
              index={index}
              demoLink={project.demoLink}
              readMoreLink={project.readMoreLink}
              Icon={project.icon}
              customImage={project.customImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
