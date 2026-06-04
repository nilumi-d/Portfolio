import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

// Floating orb — adapts opacity per mode
const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

export default function Hero() {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { href: personal.github,          icon: FiGithub,   label: 'GitHub' },
    { href: personal.linkedin,        icon: FiLinkedin, label: 'LinkedIn' },
    { href: `mailto:${personal.email}`, icon: FiMail,   label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        dark:bg-[#080b14] bg-slate-50"
    >
      {/* ── Background layer ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbs — visible in dark, very subtle in light */}
        <FloatingOrb className="w-96 h-96 dark:bg-primary-700 bg-primary-300 dark:opacity-20 opacity-30 -top-20 -left-20" delay={0} />
        <FloatingOrb className="w-80 h-80 dark:bg-accent-700 bg-accent-300 dark:opacity-20 opacity-20 top-1/3 -right-10" delay={2} />
        <FloatingOrb className="w-64 h-64 dark:bg-teal-600 bg-teal-300 dark:opacity-15 opacity-20 bottom-20 left-1/4" delay={4} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 dark:opacity-[0.04] opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(100,120,242,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(100,120,242,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial vignette — keeps text readable */}
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,#080b14_100%)] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(248,250,252,0.8)_100%)]" />
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="container-width section-padding flex flex-col items-center text-center relative z-10 pt-32 pb-24">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
            dark:bg-primary-500/10 bg-primary-100 border dark:border-primary-500/20 border-primary-300
            dark:text-primary-300 text-primary-700 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 leading-tight"
        >
          <span className="dark:text-white text-gray-900">Hi, I'm </span>
          <span className="gradient-text">Nilumi</span>
          <br />
          <span className="dark:text-white text-gray-900">Dakshika</span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            className="inline-block ml-3 text-4xl sm:text-5xl"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 flex items-center gap-2 text-xl sm:text-2xl font-display font-medium"
        >
          <span className="dark:text-gray-400 text-gray-500">I am a</span>
          <span className="gradient-text font-semibold">IT Undergraduate &amp; Software Engineering Enthusiast</span>
        </motion.div>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg dark:text-gray-400 text-gray-600 leading-relaxed mb-10"
        >
          IT undergraduate at{' '}
          <span className="text-primary-600 dark:text-primary-400 font-medium">SLIIT</span>{' '}
          with a passion for building quality software. Dean's List achiever, QA enthusiast,
          and full-stack developer from{' '}
          <span className="text-teal-600 dark:text-teal-400 font-medium">🇱🇰 Sri Lanka</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <button
            id="hero-view-projects"
            onClick={handleViewProjects}
            className="btn-primary group text-base px-8 py-4"
          >
            View My Projects
            <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
          <a
            href={personal.cvUrl}
            download
            id="hero-download-cv"
            className="btn-secondary text-base px-8 py-4"
          >
            <ArrowDownIcon className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center
                dark:bg-white/5 bg-white border dark:border-white/10 border-gray-200
                dark:text-gray-400 text-gray-500 shadow-sm
                dark:hover:bg-primary-500/10 hover:bg-primary-50
                hover:text-primary-600 dark:hover:text-primary-400
                hover:border-primary-300 dark:hover:border-primary-500/30
                transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 dark:text-gray-600 text-gray-400 text-xs"
          >
            <span>Scroll down</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
