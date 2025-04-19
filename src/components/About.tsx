
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
          <h2 className="section-title">LET ME INTRODUCE MYSELF</h2>
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
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-display font-bold mb-8">Product Management Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="portfolio-card">
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>User research</li>
                <li>Product strategy and roadmapping</li>
                <li>User story writing and prioritization</li>
                <li>Wireframing and prototyping</li>
                <li>Data analysis and metrics</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="portfolio-card">
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>No-code tool expertise (Lovable, Bolt, Cursor)</li>
                <li>Basic understanding of development processes</li>
                <li>SQL fundamentals</li>
                <li>Analytics tools (Mixpanel)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
