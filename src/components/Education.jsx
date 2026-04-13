import { motion } from 'framer-motion';
import { CalendarIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { education, achievements } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding dark:bg-[#080b14] bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 opacity-[0.04] bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="Education"
          title="Academic Background"
          subtitle="Building a strong foundation at one of Sri Lanka's top tech universities."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Education card */}
          <div className="lg:col-span-3">
            {education.map((edu) => (
              <FadeInUp key={edu.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative p-8 rounded-2xl overflow-hidden
                    border dark:border-amber-500/20 border-amber-200
                    dark:bg-gradient-to-br dark:from-amber-500/[0.04] dark:to-primary-500/[0.04]
                    bg-gradient-to-br from-amber-50 to-orange-50
                    shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-10 bg-amber-400 rounded-full blur-3xl" />

                  {/* CGPA badge */}
                  <div className="absolute top-6 right-6">
                    <div className="flex flex-col items-center px-4 py-3 rounded-2xl
                      bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900 shadow-lg">
                      <span className="font-display font-black text-2xl leading-none">{edu.cgpa}</span>
                      <span className="text-xs font-bold opacity-80 mt-0.5">CGPA</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl mb-6 shadow-md">
                    {edu.icon}
                  </div>

                  <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-2 pr-20">
                    {edu.institution}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{edu.degree}</p>
                  <div className="flex items-center gap-1.5 text-sm dark:text-gray-400 text-gray-500 mb-6">
                    <CalendarIcon className="w-4 h-4" />
                    {edu.period}
                  </div>

                  {/* Achievement chips */}
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((ach) => (
                      <span key={ach}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold
                          dark:bg-amber-500/10 bg-amber-100
                          dark:text-amber-300 text-amber-800
                          border dark:border-amber-500/20 border-amber-200"
                      >
                        <TrophyIcon className="w-4 h-4" />
                        {ach}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInUp>
            ))}
          </div>

          {/* Achievements */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <FadeInUp delay={0.1}>
              <div className="flex items-center gap-3 mb-2">
                <TrophyIcon className="w-6 h-6 text-amber-500" />
                <h3 className="font-display font-bold text-xl dark:text-white text-gray-900">Achievements</h3>
              </div>
            </FadeInUp>

            <StaggerContainer className="flex flex-col gap-4">
              {achievements.map((ach) => (
                <StaggerItem key={ach.title}>
                  <motion.div
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="relative p-5 rounded-2xl overflow-hidden
                      border dark:border-white/5 border-gray-200 shadow-sm
                      dark:bg-white/[0.02] bg-white hover:shadow-md
                      transition-all duration-300 group"
                  >
                    {/* Left color bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b ${ach.color}`} />

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-center px-3 py-2 rounded-xl dark:bg-white/[0.04] bg-gray-50 border dark:border-white/5 border-gray-100 shadow-sm">
                        <p className={`font-display font-black text-2xl bg-gradient-to-r ${ach.color} bg-clip-text text-transparent leading-none`}>
                          {ach.stat}
                        </p>
                        <p className="text-xs dark:text-gray-400 text-gray-500 font-medium mt-0.5 whitespace-nowrap">
                          {ach.statLabel}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-display font-bold dark:text-white text-gray-900
                          dark:group-hover:text-primary-400 group-hover:text-primary-600 transition-colors duration-300">
                          {ach.title}
                        </h4>
                        <p className="text-xs dark:text-gray-400 text-gray-500 font-medium mb-1">{ach.subtitle}</p>
                        <p className="text-xs dark:text-gray-500 text-gray-500 leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Dean's List visual */}
            <FadeInUp delay={0.3}>
              <div className="p-5 rounded-2xl dark:bg-gradient-to-br dark:from-primary-500/10 dark:to-accent-500/10 bg-gradient-to-br from-primary-50 to-violet-50 border dark:border-primary-500/20 border-primary-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏅</span>
                  <div>
                    <p className="font-display font-bold dark:text-white text-gray-900 text-sm">Dean's List Streak</p>
                    <p className="text-xs dark:text-gray-400 text-gray-500">Consecutive semesters</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((sem) => (
                    <motion.div
                      key={sem}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: sem * 0.1, type: 'spring', stiffness: 200 }}
                      className="flex-1 py-2 rounded-lg bg-gradient-to-b from-amber-400 to-amber-600 flex items-center justify-center shadow-sm"
                    >
                      <span className="text-xs font-bold text-gray-900">S{sem}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
