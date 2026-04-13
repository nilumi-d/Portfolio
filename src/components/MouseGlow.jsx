import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function MouseGlow() {
  const { isDark } = useTheme();

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 40, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Subtle glow follows cursor: darker/more visible in dark mode, light trace in light mode
  const glowColor = isDark ? 'rgba(130, 153, 248, 0.12)' : 'rgba(100, 120, 242, 0.04)';
  const glowSize = isDark ? '600px' : '400px';

  const background = useMotionTemplate`radial-gradient(${glowSize} circle at ${springX}px ${springY}px, ${glowColor}, transparent 50%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Check if user is using a pointer device (mouse) to avoid weird effects on mobile touch
      if (window.matchMedia('(pointer: fine)').matches) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-colors duration-500 hidden sm:block"
      style={{ background }}
    />
  );
}
