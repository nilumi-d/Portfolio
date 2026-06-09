import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowTopRightOnSquareIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal, projects, skills } from '../data/portfolioData';
import heroImg from '../assets/profile.png';

// Animated counter — counts up from 0 to `to` on mount
function AnimatedCount({ to, duration = 1.6, delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [count, to, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
}

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

  // ── Derived stats (auto-updates when data arrays change) ──
  const projectCount = projects.length;
  const techCount = Object.values(skills).reduce((sum, arr) => sum + arr.length, 0);

  const stats = [
    { value: projectCount, suffix: '+', label: 'Projects Built', color: 'from-primary-400 to-accent-400', delay: 0.8 },
    { value: techCount,    suffix: '+', label: 'Technologies',   color: 'from-accent-400 to-teal-400',   delay: 1.0 },
    { value: 4,            suffix: '×', label: "Dean's List",    color: 'from-teal-400 to-primary-400',  delay: 1.2 },
  ];

  const socialLinks = [
    { href: personal.github,            icon: FiGithub,   label: 'GitHub' },
    { href: personal.linkedin,          icon: FiLinkedin, label: 'LinkedIn' },
    { href: `mailto:${personal.email}`, icon: FiMail,     label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        dark:bg-[#080b14] bg-slate-50"
    >
      {/* ── Background layer ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,transparent_40%,#080b14_100%)] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(248,250,252,0.8)_100%)]" />
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="container-width section-padding relative z-10 pt-28 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── LEFT: Text content ─────────────────────────── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7
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
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl mb-4 leading-tight"
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
              className="mb-5 flex flex-wrap justify-center lg:justify-start items-center gap-2 text-lg sm:text-xl font-display font-medium"
            >
              <span className="dark:text-gray-400 text-gray-500">I am a</span>
              <span className="gradient-text font-semibold">IT Undergraduate &amp; Software Engineering Enthusiast</span>
            </motion.div>

            {/* Short intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl text-base sm:text-lg dark:text-gray-400 text-gray-600 leading-relaxed mb-9"
            >
              IT undergraduate at{' '}
              <span className="text-primary-600 dark:text-primary-400 font-medium">SLIIT</span>{' '}
              with a passion for building quality software. Dean's List achiever, QA enthusiast,
              and full-stack developer from{' '}
              <span className="text-teal-600 dark:text-teal-400 font-medium">🇱🇰 Sri Lanka</span>.
            </motion.p>

            {/* ── Stats strip ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mb-9 w-full max-w-sm rounded-2xl p-px
                bg-gradient-to-r from-primary-500/25 via-accent-500/20 to-teal-500/25"
            >
              <div className="flex items-stretch gap-0 rounded-[15px] overflow-hidden
                dark:bg-[#080b14] bg-white backdrop-blur-sm"
              >
                {stats.map(({ value, suffix, label, color, delay }, i) => (
                  <div
                    key={label}
                    className={`flex-1 flex flex-col items-center justify-center py-4 px-2
                      ${
                        i < stats.length - 1
                          ? 'border-r border-primary-500/10 dark:border-primary-500/15'
                          : ''
                      }`}
                  >
                    <p className={`font-display font-bold text-2xl bg-gradient-to-r ${color} bg-clip-text text-transparent leading-none mb-0.5`}>
                      <AnimatedCount to={value} delay={delay} />
                      {suffix}
                    </p>
                    <p className="text-[10px] font-medium dark:text-gray-500 text-gray-400 tracking-wide uppercase">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
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
                target="_blank"
                rel="noopener noreferrer"
                id="hero-download-cv"
                className="btn-secondary text-base px-8 py-4 group"
              >
                <DocumentArrowDownIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                View CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
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
          </div>

          {/* ── RIGHT: Profile picture ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Outer glow pulse */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500 blur-2xl opacity-40"
              />

              {/* Slow-rotating dashed orbital ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 rounded-full border-2 border-dashed dark:border-primary-500/30 border-primary-400/40"
              />

              {/* Counter-rotating ring (inner) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-[2.8rem] border border-dashed dark:border-accent-500/20 border-accent-400/30"
              />

              {/* Photo card */}
              <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden
                dark:bg-[#0d1120]/80 bg-white/80 backdrop-blur-xl
                border dark:border-white/10 border-gray-200
                shadow-[0_20px_60px_rgba(100,120,242,0.25)] dark:shadow-[0_20px_80px_rgba(100,120,242,0.2)]"
              >
                <img
                  src={heroImg}
                  alt="Nilumi Dakshika — profile"
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Subtle overlay gradient at bottom for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Name tag at bottom of photo */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col items-center">
                  <p className="font-display font-semibold text-white text-sm drop-shadow-md">
                    {personal.name}
                  </p>
                  <p className="text-white/70 text-xs font-medium drop-shadow-sm">
                    {personal.role}
                  </p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 px-3 py-2 rounded-xl z-10
                  dark:bg-[#0d1120] bg-white dark:border dark:border-white/10 border border-gray-200
                  text-xs font-semibold dark:text-gray-200 text-gray-800 shadow-lg
                  flex items-center gap-1.5"
              >
                🏆 <span>Dean's List</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-4 px-3 py-2 rounded-xl z-10
                  dark:bg-[#0d1120] bg-white dark:border dark:border-white/10 border border-gray-200
                  text-xs font-semibold dark:text-gray-200 text-gray-800 shadow-lg
                  flex items-center gap-1.5"
              >
                ⭐ <span>CGPA 3.90</span>
              </motion.div>

              {/* Floating badge — left middle */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 -left-8 px-2.5 py-1.5 rounded-lg z-10
                  dark:bg-[#0d1120] bg-white dark:border dark:border-white/10 border border-gray-200
                  text-xs font-semibold dark:text-gray-200 text-gray-800 shadow-md
                  flex items-center gap-1"
              >
                💻 <span>Full-Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
    </section>
  );
}
