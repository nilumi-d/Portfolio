import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';
import { FiGithub } from 'react-icons/fi';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { projects } from '../data/portfolioData';

const categoryFilters = ['All', 'Full-Stack', 'Web App', 'Mobile App', 'Desktop App'];

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-2xl overflow-hidden border transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl
        ${project.highlight
          ? 'dark:border-primary-500/30 border-primary-200 dark:bg-gradient-to-br dark:from-primary-500/5 dark:to-accent-500/5 bg-gradient-to-br from-primary-50 to-violet-50'
          : 'dark:border-white/5 border-gray-200 dark:bg-white/[0.02] bg-white shadow-sm'
        }`}
    >
      {/* Featured badge */}
      {project.highlight && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full
          bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold shadow-lg">
          <StarIcon className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Image / Gradient banner */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
        {/* Real project photo */}
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{ scale: isHovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Gradient overlay — softens photo edges and keeps text readable */}
        <div
          className={`absolute inset-0 ${project.image
            ? 'bg-gradient-to-t from-black/60 via-black/10 to-transparent'
            : 'opacity-20'}`}
          style={!project.image ? {
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.4) 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
          } : undefined}
        />
        {/* Emoji shown only when no image */}
        {!project.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{ scale: isHovered ? 1.15 : 1 }}
              transition={{ duration: 0.4 }}
              className="text-6xl filter drop-shadow-lg"
            >
              {project.icon}
            </motion.span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">{project.subtitle}</p>
        <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium
                dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600
                border dark:border-white/5 border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-2 flex-wrap">
          {project.github && (
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-outline flex-1 justify-center"
              id={`project-github-${project.id}`}
            >
              <FiGithub className="w-4 h-4" /> GitHub
            </motion.a>
          )}

          {project.githubFrontend && (
            <motion.a href={project.githubFrontend} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-outline flex-1 justify-center text-xs"
              id={`project-frontend-${project.id}`}
            >
              <CodeBracketIcon className="w-4 h-4" /> Frontend
            </motion.a>
          )}

          {project.githubBackend && (
            <motion.a href={project.githubBackend} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-outline flex-1 justify-center text-xs"
              id={`project-backend-${project.id}`}
            >
              <FiGithub className="w-4 h-4" /> Backend
            </motion.a>
          )}

          {project.liveUrl && (
            <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-primary flex-1 justify-center text-sm py-2.5"
              id={`project-live-${project.id}`}
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-accent-500 to-transparent" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="Projects"
          title="What I've Built"
          subtitle="A collection of projects spanning full-stack web, mobile apps, and intelligent systems."
        />

        {/* Filters */}
        <FadeInUp delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-primary-600 border-primary-600 text-white shadow-md'
                  : 'dark:border-white/10 border-gray-200 dark:text-gray-400 text-gray-600 dark:hover:border-primary-500/30 hover:border-primary-300 dark:hover:text-primary-400 hover:text-primary-600 bg-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </FadeInUp>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <FadeInUp delay={0.3} className="text-center mt-16">
          <p className="dark:text-gray-400 text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/nilumi-d"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-view-all-github"
            className="btn-secondary inline-flex"
          >
            <FiGithub className="w-4 h-4" />
            View All on GitHub
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
