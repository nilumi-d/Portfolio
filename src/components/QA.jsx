import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { qaSkills } from '../data/portfolioData';

const toolPlaceholders = [
  { name: 'Jira',           icon: '📋', desc: 'Bug tracking & sprint planning',   status: 'Used in projects' },
  { name: 'Postman',        icon: '📮', desc: 'API testing & validation',          status: 'Used extensively' },
  { name: 'JUnit 5',        icon: '🔬', desc: 'Unit testing framework',            status: 'Active experience' },
  { name: 'Espresso',       icon: '📱', desc: 'Android UI automation',             status: 'Mobile projects' },
  { name: 'Android Logcat', icon: '🪵', desc: 'Debug logging & crash analysis',    status: 'Daily use' },
  { name: 'Git Bisect',     icon: '🔍', desc: 'Bug regression tracking',           status: 'Version control' },
];

const testCases = [
  { id: 'TC-001', title: 'User Login Validation',          type: 'Functional',     status: '✅ Pass',        steps: 3 },
  { id: 'TC-002', title: 'Movie Booking Boundary Test',    type: 'Boundary Value', status: '✅ Pass',        steps: 5 },
  { id: 'TC-003', title: 'API Response Null Handling',     type: 'Negative Test',  status: '🔴 Fail → Fixed', steps: 4 },
  { id: 'TC-004', title: 'DB Connection Timeout',          type: 'Performance',    status: '⚠️ Reviewed',    steps: 2 },
];

function QASkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="p-6 rounded-2xl dark:bg-white/[0.03] bg-white border dark:border-white/5 border-gray-100 shadow-sm
        hover:border-primary-300 dark:hover:border-primary-500/30 hover:shadow-md
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
    <section id="qa" className="section-padding dark:bg-[#080b14] bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-[0.04] bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 opacity-[0.04] bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="Quality Assurance"
          title="QA & Testing"
          subtitle="Building software that works — and proving it. Quality at every layer."
        />

        {/* QA philosophy banner */}
        <FadeInUp delay={0.1} className="mb-12">
          <div className="p-6 sm:p-8 rounded-2xl border dark:border-teal-500/20 border-teal-200
            dark:bg-teal-500/[0.04] bg-teal-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 bg-teal-400 rounded-full blur-2xl" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1">
                  QA Philosophy
                </h3>
                <p className="dark:text-gray-300 text-gray-700 text-sm leading-relaxed max-w-2xl">
                  Quality isn't a phase — it's a mindset embedded throughout the development lifecycle.
                  I believe in{' '}
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">shift-left testing</span>,
                  proactive bug prevention, and ensuring software behaves correctly under all conditions,
                  not just happy paths.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* QA skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {qaSkills.map((skill, index) => (
            <QASkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Cases table */}
          <FadeInUp delay={0.2}>
            <div className="rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/5 border-gray-100 overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-6 py-4 border-b dark:border-white/5 border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <div>
                    <h3 className="font-display font-bold dark:text-white text-gray-900">Sample Test Cases</h3>
                    <p className="text-xs dark:text-gray-500 text-gray-400">Placeholder — real test docs on request</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold border dark:border-teal-500/20 border-teal-200">
                  {testCases.length} cases
                </span>
              </div>
              <div className="divide-y dark:divide-white/5 divide-gray-50">
                {testCases.map((tc, i) => (
                  <motion.div
                    key={tc.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 px-6 py-4 dark:hover:bg-white/[0.02] hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-mono text-xs text-primary-600 dark:text-primary-400 font-bold w-16 flex-shrink-0">{tc.id}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium dark:text-gray-200 text-gray-800 truncate">{tc.title}</p>
                      <p className="text-xs dark:text-gray-500 text-gray-400">{tc.type} · {tc.steps} steps</p>
                    </div>
                    <span className="text-xs font-medium flex-shrink-0 dark:text-gray-300 text-gray-700">{tc.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Tools grid */}
          <FadeInUp delay={0.3}>
            <div className="rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/5 border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-b dark:border-white/5 border-gray-100">
                <span className="text-xl">🐛</span>
                <div>
                  <h3 className="font-display font-bold dark:text-white text-gray-900">Testing Tools</h3>
                  <p className="text-xs dark:text-gray-500 text-gray-400">Tools used across projects and internship</p>
                </div>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                {toolPlaceholders.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ scale: 1.03 }}
                    className="p-3 rounded-xl dark:bg-white/5 bg-gray-50 border dark:border-white/5 border-gray-100
                      dark:hover:border-teal-500/30 hover:border-teal-300 transition-all duration-300 cursor-default"
                  >
                    <span className="text-2xl block mb-2">{tool.icon}</span>
                    <p className="text-sm font-semibold dark:text-gray-200 text-gray-800">{tool.name}</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 mt-0.5">{tool.desc}</p>
                    <span className="mt-2 inline-block px-2 py-0.5 rounded-full
                      dark:bg-teal-500/10 bg-teal-100 dark:text-teal-400 text-teal-700
                      text-xs border dark:border-teal-500/20 border-teal-200">
                      {tool.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bug example */}
              <div className="mx-4 mb-4 p-4 rounded-xl border-dashed border-2 dark:border-primary-500/20 border-primary-200 dark:bg-primary-500/[0.04] bg-primary-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💡</span>
                  <p className="text-sm font-semibold dark:text-primary-300 text-primary-700">Real Bug Example</p>
                </div>
                <p className="text-xs dark:text-gray-400 text-gray-600 leading-relaxed">
                  <span className="font-mono dark:text-rose-400 text-rose-600">[DailyWell]</span> NullPointerException
                  when a habit was deleted while a reminder was still scheduled — fixed by adding lifecycle-aware cleanup
                  in{' '}
                  <span className="font-mono dark:text-teal-400 text-teal-600">HabitViewModel.onCleared()</span>.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
