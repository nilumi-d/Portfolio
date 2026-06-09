import { motion } from 'framer-motion';
import { MapPinIcon, AcademicCapIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { personal } from '../data/portfolioData';

const highlights = [
  {
    icon: AcademicCapIcon,
    label: 'CGPA',
    value: '3.89 / 4.00',
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
    value: 'Full-Stack & Mobile',
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

// ── What I Do — specialty cards ───────────────────────────────────────────────
const specialties = [
  {
    icon: '🌐',
    title: 'Full-Stack Web',
    desc: 'React, Next.js, Spring Boot & Node.js — end-to-end web apps with clean APIs.',
    gradient: 'from-primary-500 to-accent-500',
    glow: 'dark:group-hover:shadow-[0_0_28px_rgba(100,120,242,0.18)]',
    border: 'dark:hover:border-primary-500/30 hover:border-primary-300',
  },
  {
    icon: '📱',
    title: 'Mobile Dev',
    desc: 'Native Android apps with Kotlin, Material Design 3 and robust UI testing.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'dark:group-hover:shadow-[0_0_28px_rgba(139,92,246,0.18)]',
    border: 'dark:hover:border-violet-500/30 hover:border-violet-300',
  },
  {
    icon: '🧪',
    title: 'QA & Testing',
    desc: 'JUnit 5, Espresso & Postman — shipping software that actually works.',
    gradient: 'from-teal-500 to-emerald-500',
    glow: 'dark:group-hover:shadow-[0_0_28px_rgba(20,184,166,0.18)]',
    border: 'dark:hover:border-teal-500/30 hover:border-teal-300',
  },
  {
    icon: '🚀',
    title: 'Team Lead',
    desc: 'Led cross-functional teams on Vertex & HireSmart from design to deployment.',
    gradient: 'from-accent-500 to-rose-500',
    glow: 'dark:group-hover:shadow-[0_0_28px_rgba(204,83,236,0.18)]',
    border: 'dark:hover:border-accent-500/30 hover:border-accent-300',
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: What I Do cards ───────────────────────────────────── */}
          <FadeIn delay={0.1}>
            {/* Section eyebrow */}
            <p className="text-xs font-semibold tracking-[0.18em] uppercase
              dark:text-primary-400 text-primary-600 mb-5">
              What I Do
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative p-5 rounded-2xl group cursor-default
                    dark:bg-white/[0.03] bg-gray-50
                    border dark:border-white/5 border-gray-100
                    ${s.border} ${s.glow}
                    transition-all duration-300 overflow-hidden`}
                >
                  {/* Animated gradient left-border accent */}
                  <motion.div
                    className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-full
                      bg-gradient-to-b ${s.gradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Very subtle gradient wash behind content on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient}
                    opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Gradient icon badge */}
                    <div className={`w-11 h-11 rounded-xl mb-4 flex items-center justify-center
                      text-xl bg-gradient-to-br ${s.gradient} shadow-md
                      group-hover:scale-110 transition-transform duration-300`}>
                      {s.icon}
                    </div>

                    <h3 className="font-display font-bold text-sm
                      dark:text-white text-gray-900 mb-1.5">
                      {s.title}
                    </h3>

                    <p className="text-xs dark:text-gray-400 text-gray-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* ── RIGHT: Text content ────────────────────────── */}
          <div className="flex flex-col gap-6">
            <FadeInUp delay={0.2}>
              <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                {personal.about}
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-wrap gap-2.5">
                {['⚛️ React / Next.js', '☕ Java / Spring Boot', '🟢 Node.js', '📱 Android / Kotlin', '🗄️ MySQL / MongoDB'].map((tag) => (
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
