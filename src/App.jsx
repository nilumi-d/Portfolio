import { useTheme } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import QA from './components/QA';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import ScrollToTop from './components/ScrollToTop';
import Leadership from './components/Leadership';

export default function App() {
  // ThemeContext already sets the 'dark' class on <html> — no need to duplicate here.
  // We only use the hook to ensure reactivity.
  useTheme();

  return (
    <>
      <MouseGlow />
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QA />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top FAB */}
      <ScrollToTop />
    </>
  );
}
