
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </main>
  );
};

export default Index;
