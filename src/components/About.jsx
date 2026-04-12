import { motion } from 'framer-motion';
import { MapPinIcon, AcademicCapIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { personal } from '../data/portfolioData';

const highlights = [
  {
    icon: AcademicCapIcon,
    label: 'CGPA',
    value: '3.90 / 4.00',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-100 dark:bg-amber-400/10',
  },
  {
    icon: SparklesIcon,
    label: "Dean's List",
    value: '4× Consecutive',
    color: 'text-primary-600 dark:text-primary-400',
    bg: 'bg-primary-100 dark:bg-primary-400/10',
  },
  {
    icon: CodeBracketIcon,
    label: 'Focus',
    value: 'Dev + QA',
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-100 dark:bg-teal-400/10',
  },
  {
    icon: MapPinIcon,
    label: 'Based in',
    value: 'Sri Lanka 🇱🇰',
    color: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-accent-100 dark:bg-accent-400/10',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 dark:opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-primary-500 to-transparent" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          subtitle="Get to know the person behind the code."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <FadeIn delay={0.1} className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary-400/30"
              />

              {/* Card */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden
                dark:bg-white/5 bg-white dark:border dark:border-white/10 border border-gray-100
                shadow-sm flex items-center justify-center backdrop-blur-xl">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-teal-500 mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-5xl text-white">ND</span>
                  </div>
                  <p className="font-display font-semibold dark:text-white text-gray-900 text-lg">{personal.name}</p>
                  <p className="text-primary-500 dark:text-primary-400 text-sm font-medium">{personal.role}</p>
                  <p className="dark:text-gray-500 text-gray-400 text-xs mt-1">{personal.location}</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl
                  dark:bg-[#0d1120] bg-white dark:border dark:border-white/10 border border-gray-200
                  text-xs font-semibold dark:text-gray-200 text-gray-800 shadow-md"
              >
                🏆 Dean's List
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl
                  dark:bg-[#0d1120] bg-white dark:border dark:border-white/10 border border-gray-200
                  text-xs font-semibold dark:text-gray-200 text-gray-800 shadow-md"
              >
                ⭐ CGPA 3.90
              </motion.div>
            </div>
          </FadeIn>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <FadeInUp delay={0.2}>
              <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                {personal.about}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap gap-2.5">
                {['🧪 QA Testing', '⚛️ React', '☕ Java / Spring', '📱 Android', '🗄️ MySQL'].map((tag) => (
                  <span key={tag} className="skill-badge">{tag}</span>
                ))}
              </div>
            </FadeInUp>

            {/* Stats grid */}
            <StaggerContainer className="grid grid-cols-2 gap-3 mt-2">
              {highlights.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="flex items-center gap-3 p-4 rounded-xl
                    dark:bg-white/[0.03] bg-gray-50 border dark:border-white/5 border-gray-100
                    hover:border-primary-300 dark:hover:border-primary-500/20
                    transition-all duration-300 group">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs dark:text-gray-500 text-gray-400 font-medium">{item.label}</p>
                      <p className={`text-sm font-bold ${item.color}`}>{item.value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
