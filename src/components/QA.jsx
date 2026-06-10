import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp } from './ui/AnimateWrapper';
import { qaSkills } from '../data/portfolioData';

function QASkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="p-6 rounded-2xl dark:bg-white/[0.03] bg-white border dark:border-white/5 border-gray-100 shadow-sm
        hover:border-teal-300 dark:hover:border-teal-500/30 hover:shadow-md
        transition-all duration-300 group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
      <h3 className="font-display font-bold text-lg dark:text-white text-gray-900 mb-2">{skill.title}</h3>
      <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-4">{skill.description}</p>
      <ul className="space-y-1.5">
        {skill.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs dark:text-gray-400 text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function QA() {
  return (
    <section id="qa" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.04] bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 opacity-[0.04] bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="QA"
          title="Quality Assurance"
          subtitle="Testing strategies and practices applied to ensure reliable, bug-free software across every project."
        />

        {/* QA philosophy banner */}
        <FadeInUp delay={0.1} className="mb-12">
          <div className="p-6 sm:p-8 rounded-2xl border dark:border-teal-500/20 border-teal-200
            dark:bg-teal-500/[0.04] bg-teal-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-teal-400 rounded-full blur-2xl" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl">🧪</div>
              <div>
                <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1">
                  QA Mindset
                </h3>
                <p className="dark:text-gray-300 text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Quality isn't an afterthought — it's built in from the start.{' '}
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">Testing, validation, and reliability</span>{' '}
                  are core to how I approach every feature, from unit tests to full end-to-end coverage.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* QA skill cards — 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {qaSkills.map((skill, index) => (
            <QASkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
