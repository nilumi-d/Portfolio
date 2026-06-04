import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { leadership } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 opacity-[0.04] bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 opacity-[0.04] bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="Leadership & Activities"
          title="Beyond the Code"
          subtitle="Community involvement, technical communities, and extracurricular experiences that shaped me."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 rounded-2xl overflow-hidden
                  dark:bg-white/[0.03] bg-white
                  border dark:border-white/5 border-gray-100
                  shadow-sm hover:shadow-lg
                  dark:hover:border-white/10 hover:border-gray-200
                  transition-all duration-300 group"
              >
                {/* Gradient blob top-right */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 bg-gradient-to-br ${item.color}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color}
                  flex items-center justify-center text-2xl mb-5 shadow-md
                  group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Title */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
                  bg-gradient-to-r ${item.color} text-white shadow-sm`}>
                  {item.title}
                </span>

                {/* Organization */}
                <h3 className="font-display font-bold text-base dark:text-white text-gray-900 mb-2
                  group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.organization}
                </h3>

                {/* Description */}
                <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
