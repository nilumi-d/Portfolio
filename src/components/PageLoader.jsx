import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// ── Individual letter that drops in ──────────────────────────────────────────
const Letter = ({ char, delay }) => (
  <motion.span
    initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
    animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="inline-block"
  >
    {char}
  </motion.span>
);

// ── Orbital dot that spins around the ND badge ───────────────────────────────
const OrbitalDot = ({ angle, color, duration, delay }) => (
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    style={{ originX: '50%', originY: '50%' }}
  >
    <div
      className={`absolute w-2.5 h-2.5 rounded-full ${color} shadow-lg`}
      style={{ top: 0, left: '50%', transform: `translate(-50%, calc(${angle}))` }}
    />
  </motion.div>
);

export default function PageLoader({ onDone }) {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  // ── Simulate progress 0 → 100 in ~2 s, then exit ─────────────────────────
  useEffect(() => {
    const steps = [
      { target: 40,  delay: 0   },
      { target: 70,  delay: 600 },
      { target: 90,  delay: 1100 },
      { target: 100, delay: 1700 },
    ];

    const timers = steps.map(({ target, delay }) =>
      setTimeout(() => setProgress(target), delay)
    );

    // Begin exit after progress finishes
    const exitTimer = setTimeout(() => setVisible(false), 2200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, []);

  // Notify parent when exit animation completes
  const handleExitComplete = () => onDone?.();

  const name   = 'Nilumi Dakshika';
  const letters = name.split('');

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center
            ${isDark ? 'bg-[#080b14]' : 'bg-slate-50'}
            overflow-hidden select-none`}
        >
          {/* ── Background orbs (mirrors hero) ─────────────────────────── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full
                dark:bg-primary-700 bg-primary-300 blur-3xl
                dark:opacity-20 opacity-25"
            />
            <motion.div
              animate={{ y: [0, 25, 0], x: [0, -15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-0 -right-24 w-80 h-80 rounded-full
                dark:bg-accent-700 bg-accent-300 blur-3xl
                dark:opacity-20 opacity-20"
            />
            <motion.div
              animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full
                dark:bg-teal-600 bg-teal-300 blur-3xl
                dark:opacity-15 opacity-15"
            />

            {/* Grid */}
            <div
              className="absolute inset-0 dark:opacity-[0.04] opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(100,120,242,1) 1px, transparent 1px),
                  linear-gradient(90deg,rgba(100,120,242,1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* ── Centre content ──────────────────────────────────────────── */}
          <div className="relative flex flex-col items-center gap-8 px-4">

            {/* Monogram badge with orbital dots */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1,   opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28"
            >
              {/* Pulsing glow behind badge */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500
                  blur-xl"
              />

              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full
                  border border-dashed dark:border-primary-500/30 border-primary-400/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full
                  border border-dashed dark:border-accent-500/20 border-accent-400/25"
              />

              {/* The badge itself */}
              <div className="relative w-full h-full rounded-2xl
                bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500
                flex items-center justify-center shadow-[0_0_40px_rgba(100,120,242,0.5)]"
              >
                <span className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight">
                  ND
                </span>
              </div>
            </motion.div>

            {/* Animated name letters */}
            <div className="flex flex-wrap justify-center gap-x-[0.06em] font-display font-bold
              text-2xl sm:text-3xl md:text-4xl tracking-tight
              dark:text-white text-gray-900"
              aria-label={name}
            >
              {letters.map((char, i) => (
                <Letter
                  key={i}
                  char={char === ' ' ? '\u00a0' : char}
                  delay={0.3 + i * 0.04}
                />
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1,  y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase
                dark:text-gray-500 text-gray-400"
            >
              Portfolio
            </motion.p>

            {/* Progress bar track */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1,  scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-48 sm:w-64 h-[3px] rounded-full
                dark:bg-white/5 bg-gray-200 overflow-hidden"
            >
              <motion.div
                className="h-full rounded-full origin-left
                  bg-gradient-to-r from-primary-500 via-accent-500 to-teal-400"
                style={{ scaleX: progress / 100 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Percentage counter */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-mono
                dark:text-gray-600 text-gray-400 -mt-5 tabular-nums"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
