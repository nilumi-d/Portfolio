import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { skills } from '../data/portfolioData';

const categoryIcons = {
  Languages: '{ }',
  Frontend: '🎨',
  Backend: '⚙️',
  Mobile: '📱',
  Databases: '🗄️',
  Tools: '🛠️',
};

const categoryGradients = {
  Languages: 'from-primary-500 to-primary-700',
  Frontend:  'from-rose-500 to-pink-600',
  Backend:   'from-teal-500 to-emerald-600',
  Mobile:    'from-violet-500 to-purple-600',
  Databases: 'from-amber-500 to-orange-600',
  Tools:     'from-accent-500 to-accent-700',
};

// Each category gets dark + light badge colours
const badgeStyles = {
  Languages: 'dark:bg-primary-500/10 bg-primary-100 dark:text-primary-300 text-primary-700 dark:border-primary-500/20 border-primary-200',
  Frontend:  'dark:bg-rose-500/10 bg-rose-100 dark:text-rose-300 text-rose-700 dark:border-rose-500/20 border-rose-200',
  Backend:   'dark:bg-teal-500/10 bg-teal-100 dark:text-teal-300 text-teal-700 dark:border-teal-500/20 border-teal-200',
  Mobile:    'dark:bg-violet-500/10 bg-violet-100 dark:text-violet-300 text-violet-700 dark:border-violet-500/20 border-violet-200',
  Databases: 'dark:bg-amber-500/10 bg-amber-100 dark:text-amber-300 text-amber-700 dark:border-amber-500/20 border-amber-200',
  Tools:     'dark:bg-accent-500/10 bg-fuchsia-100 dark:text-accent-300 text-fuchsia-700 dark:border-accent-500/20 border-fuchsia-200',
};

function SkillBadge({ skill, colorClass }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`px-4 py-2.5 rounded-xl text-sm font-semibold border cursor-default shadow-sm
        transition-all duration-200 ${colorClass}`}
    >
      {skill.name}
    </motion.div>
  );
}

export default function Skills() {
  const categories = Object.keys(skills);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="skills" className="section-padding dark:bg-[#080b14] bg-slate-50 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(100,120,242,0.08) 0%, transparent 60%)' }}
      />

      <div className="container-width">
        <SectionHeader
          label="Skills"
          title="Tech Stack"
          subtitle="Technologies I work with — from frontend to backend, mobile to databases."
        />

        {/* Category tabs */}
        <FadeInUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                transition-all duration-300 border ${
                activeTab === cat
                  ? 'border-transparent text-white shadow-md'
                  : 'dark:border-white/10 border-gray-200 dark:text-gray-400 text-gray-600 dark:hover:text-gray-200 hover:text-gray-900 dark:hover:border-white/20 hover:border-gray-300'
              }`}
            >
              {activeTab === cat && (
                <motion.span
                  layoutId="skills-tab"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryGradients[cat]}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{categoryIcons[cat]}</span>
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </FadeInUp>

        {/* Skills badges */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <StaggerContainer className="flex flex-wrap justify-center gap-3">
              {skills[activeTab].map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillBadge skill={skill} colorClass={badgeStyles[activeTab]} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {/* Category overview grid */}
        <FadeInUp delay={0.4} className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveTab(cat)}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-5 rounded-2xl border transition-all duration-300 text-center group cursor-pointer
                  dark:bg-white/[0.03] bg-white shadow-sm
                  ${activeTab === cat
                    ? 'dark:border-primary-500/40 border-primary-300 dark:bg-primary-500/5 bg-primary-50'
                    : 'dark:border-white/5 border-gray-100 dark:hover:border-white/10 hover:border-gray-200'
                  }`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[cat]}
                </div>
                <p className="text-xs font-semibold dark:text-gray-300 text-gray-700">{cat}</p>
                <p className="text-xs dark:text-gray-500 text-gray-400 mt-0.5">{skills[cat].length} skills</p>
              </motion.button>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
