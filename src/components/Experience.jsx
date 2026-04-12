import { motion } from 'framer-motion';
import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp } from './ui/AnimateWrapper';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      <div className="container-width">
        <SectionHeader
          label="Experience"
          title="My Journey"
          subtitle="Professional experience that shaped my approach to software and systems."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px
            bg-gradient-to-b from-primary-400/50 via-primary-400/20 to-transparent" />

          {experience.map((exp, index) => (
            <FadeInUp key={exp.id} delay={index * 0.15} className="relative pl-20 sm:pl-24 mb-8 last:mb-0">
              {/* Dot */}
              <div className="absolute left-0 sm:left-2 top-6 w-12 h-12 rounded-2xl
                bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center
                text-2xl z-10 shadow-lg">
                {exp.icon}
              </div>

              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl dark:bg-white/[0.03] bg-gray-50
                  border dark:border-white/5 border-gray-100 shadow-sm
                  dark:hover:border-primary-500/20 hover:border-primary-200
                  hover:shadow-md transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl dark:text-white text-gray-900
                      group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end">
                    <div className="flex items-center gap-1.5 text-sm dark:text-gray-400 text-gray-500">
                      <BriefcaseIcon className="w-4 h-4 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm dark:text-gray-500 text-gray-400">
                      <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="mt-1 px-3 py-0.5 rounded-full
                      dark:bg-primary-500/10 bg-primary-100
                      dark:text-primary-400 text-primary-700
                      text-xs font-semibold border dark:border-primary-500/20 border-primary-200">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-5">
                  {exp.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm dark:text-gray-400 text-gray-600">
                      <span className="w-5 h-5 rounded-full dark:bg-primary-500/10 bg-primary-100
                        border dark:border-primary-500/20 border-primary-200
                        flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
