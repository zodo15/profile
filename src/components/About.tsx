
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GET TO KNOW ME</h2>
        </motion.div>
        
        <motion.div
          className="text-lg md:text-xl space-y-6 leading-relaxed text-portfolio-text/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>I'm Hitanshu Parekh, a self-taught product enthusiast who believes that technology, when applied thoughtfully, can solve even the smallest daily struggles.</p>
          
          <p>My journey into product building started with a real-world pain point — managing messy guest lists during live events. Rather than settling for spreadsheets and stress, I built <span className="font-semibold text-portfolio-accent">EventFlow</span>, a no-code guest management tool that simplified coordination and reduced friction for my team. It didn't just work — it became essential.</p>
          
          <p>Since then, I've built multiple web apps including <span className="font-semibold text-portfolio-accent">MealMate</span>, a smart meal assistant designed to reduce decision fatigue and promote better eating habits for students like me. I've used no-code tools, rapid iteration, and real user feedback to create solutions that feel intuitive and genuinely useful.</p>
          
          <p>I'm passionate about turning ideas into MVPs, understanding user needs, and building clean, modern interfaces. I'm now looking to grow as a Product Manager — learning from experienced teams, contributing to thoughtful product decisions, and helping build tools that people actually love to use.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-portfolio-accent">Skills & Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Management Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Product Management</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'User Research',
                  'Product Strategy',
                  'Wireframing',
                  'Prototyping',
                  'A/B Testing',
                  'Data Analysis',
                  'Agile/Scrum',
                  'User Stories'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-lg bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 hover:from-portfolio-accent/15 hover:to-portfolio-accent/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-portfolio-text/90 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Technical</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React',
                  'Figma',
                  'Git',
                  'SQL',
                  'Mixpanel'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-4 rounded-lg bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent/5 hover:from-portfolio-accent/15 hover:to-portfolio-accent/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-portfolio-text/90 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
