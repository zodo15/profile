import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
const projectsData = {
  'meal-mate': {
    title: 'Meal Mate',
    about: 'A smart meal planning assistant that reduces decision fatigue by suggesting meals based on the ingredients you have. It also offers recipes, meal reminders, and scheduling support to help users stay consistent with their eating habits.',
    toolsUsed: ['Lovable', 'Claude'],
    techStack: {
      frontend: ['React', 'TypeScript', 'CSS'],
      backend: ['Supabase (Authentication & Database)']
    },
    image: '/meal-mate-laptop.png'
  },
  'event-flow': {
    title: 'Event Flow',
    about: 'A guest list and task management tool designed for event teams. Enables team collaboration, real-time updates, checklist tracking, and smart import/export of guest data. Built to streamline event execution and reduce manual errors.',
    toolsUsed: ['Lovable', 'Data Button AI', 'Claude'],
    techStack: {
      frontend: ['React', 'TypeScript', 'CSS'],
      backend: ['Supabase (Authentication & Database)']
    },
    image: '/event-flow-laptop.png'
  },
  'vibes': {
    title: 'Vibes',
    about: 'A fun, mobile-friendly party game that brings a fresh twist to classic games. Designed with an engaging UI, it encourages social interaction through fast-paced, interactive challenges — perfect for hangouts and parties.',
    toolsUsed: ['Bolt', 'Windsurf', 'Claude'],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: []
    },
    image: '/vibes-laptop.png'
  },
  'swiggy-case': {
    title: 'Swiggy Case Study',
    about: "You've been hired as the Senior Product Manager at Swiggy, India's leading food delivery platform. Swiggy has become a household name, providing food delivery services in over 500 cities across India. Despite this success, user engagement is declining, and the platform's average order value (AOV) stands at ₹350, compared to Zomato's ₹460. Additionally, Swiggy's customer retention rate is stuck at 40%, with many users only placing orders during weekends or special occasions. Your goal is to develop a product strategy to increase customer retention and make Swiggy the go-to platform for daily food ordering, boost AOV by encouraging users to order more frequently and add more items per order, and enhance the overall user experience and ensure a smoother journey from browsing to checkout.",
    toolsUsed: ['Canva', 'Helix'],
    techStack: {
      frontend: [],
      backend: []
    },
    image: '/swiggy-case-screenshot.jpg'
  }
};
const ProjectDetail = () => {
  const {
    projectId
  } = useParams<{
    projectId: string;
  }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }
  return <div className="min-h-screen">
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="mb-8">
            <Link to="/#projects" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="mb-12">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px] md:h-[400px] mb-8">
              {projectId === 'swiggy-case' ? (
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
                  <iframe 
                    src="https://www.canva.com/design/DAGjqZkF9hE/HQ7vUnAIhet4TbPgcrTEJQ/view?embed" 
                    className="w-full h-full absolute inset-0"
                    allow="fullscreen"
                    loading="lazy"
                    title="Swiggy Case Study Presentation"
                  />
                </div>
              ) : (
                <img src={project.image} alt={project.title} className="w-full h-full object-scale-down" />
              )}</div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{project.about}</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">TOOLS USED</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.toolsUsed.map((tool, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">TECH STACK</h3>
                    {project.techStack.frontend.length > 0 && (
                      <div className="mb-3">
                        <h4 className="text-sm font-medium mb-1">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.frontend.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.techStack.backend.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-1">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.backend.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default ProjectDetail;