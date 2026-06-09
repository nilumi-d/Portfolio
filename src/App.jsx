import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import PageLoader from './components/PageLoader';
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

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading screen — unmounts itself after exit animation */}
      <PageLoader onDone={() => setIsLoading(false)} />

      {/* Main site — hidden (not removed) while loader plays to avoid layout flash */}
      <div
        aria-hidden={isLoading}
        style={{
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? 'none' : 'auto',
          transition: 'opacity 0.3s ease',
        }}
      >
        <MouseGlow />
        {/* Scroll progress bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
          <Hero key={isLoading ? 'loading' : 'ready'} />
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
      </div>
    </>
  );
}

