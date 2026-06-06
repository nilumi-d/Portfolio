import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScroll';
import { navLinks, personal } from '../data/portfolioData';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'dark:bg-[#090d1a]/85 bg-white/90 backdrop-blur-xl border-b dark:border-white/5 border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-width flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
            aria-label="Nilumi Dakshika - Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-display font-bold text-white text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
              ND
            </div>
            <span className="hidden sm:block font-display font-semibold text-base dark:text-white text-gray-900 transition-colors duration-300">
              {personal.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'dark:text-primary-400 text-primary-600'
                        : 'dark:text-gray-400 text-gray-600 dark:hover:text-primary-400 hover:text-primary-600'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg dark:bg-primary-500/10 bg-primary-100 dark:border dark:border-primary-500/20 border border-primary-200"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Theme toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="relative w-10 h-10 rounded-xl flex items-center justify-center
                dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200
                dark:hover:bg-white/10 hover:bg-gray-200
                transition-all duration-300 hover:scale-105"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SunIcon className="w-5 h-5 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <MoonIcon className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* CV Button (desktop) */}
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2.5 px-5 group"
              id="nav-download-cv"
            >
              <DocumentArrowDownIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              View CV
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center
                dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200
                dark:text-gray-300 text-gray-600 transition-all duration-300"
            >
              {isMobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 dark:bg-[#090d1a]/95 bg-white/95 backdrop-blur-xl border-b dark:border-white/5 border-gray-200 shadow-xl lg:hidden"
          >
            <nav className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-base font-medium
                    dark:text-gray-300 text-gray-700
                    dark:hover:bg-white/5 hover:bg-gray-100
                    hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 btn-primary text-sm justify-center flex items-center gap-2 group"
              >
                <DocumentArrowDownIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                View CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
