import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { personal } from '../data/portfolioData';

const contactLinks = [
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/nilumi-d',
    href: personal.github,
    icon: FiGithub,
    gradient: 'from-gray-600 to-gray-800',
    hoverBorder: 'dark:hover:border-gray-500/40 hover:border-gray-300',
    accent: 'dark:text-gray-300 text-gray-600',
    description: 'Check out my projects & contributions',
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'nilumi-dakshika',
    href: personal.linkedin,
    icon: FiLinkedin,
    gradient: 'from-blue-500 to-blue-700',
    hoverBorder: 'dark:hover:border-blue-500/40 hover:border-blue-300',
    accent: 'text-blue-600 dark:text-blue-400',
    description: 'Connect with me professionally',
  },
  {
    id: 'contact-email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: EnvelopeIcon,
    gradient: 'from-primary-500 to-accent-600',
    hoverBorder: 'dark:hover:border-primary-500/40 hover:border-primary-300',
    accent: 'text-primary-600 dark:text-primary-400',
    description: 'Drop me a message anytime',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.06] bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 opacity-[0.06] bg-accent-600 rounded-full blur-3xl" />
      </div>

      <div className="container-width">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Whether it's a job opportunity, collaboration, or just a friendly conversation — I'm always open."
        />

        {/* CTA card */}
        <FadeInUp delay={0.1} className="text-center mb-16">
          <div className="inline-flex flex-col items-center gap-4 p-8 sm:p-12 rounded-3xl
            dark:bg-gradient-to-br dark:from-primary-500/10 dark:to-accent-500/10
            bg-gradient-to-br from-primary-50 to-violet-50
            border dark:border-primary-500/20 border-primary-200 shadow-sm
            max-w-xl mx-auto w-full">
            <div className="text-6xl">👩‍💻</div>
            <div>
              <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-2">
                Open to Opportunities
              </h3>
              <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-sm max-w-sm mx-auto">
                I'm actively looking for internships, part-time roles, and full-time positions
                in software development and QA.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-500">
              <MapPinIcon className="w-4 h-4 text-teal-500" />
              <span>{personal.location} — Remote Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
              </span>
              <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold">Available Now</span>
            </div>
          </div>
        </FadeInUp>

        {/* Contact cards */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <StaggerItem key={link.id}>
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                id={link.id}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col items-center text-center gap-4 p-6 rounded-2xl
                  dark:bg-white/[0.03] bg-gray-50 border dark:border-white/5 border-gray-100
                  ${link.hoverBorder} hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center
                  shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold dark:text-white text-gray-900 mb-0.5">{link.label}</p>
                  <p className={`text-sm font-medium ${link.accent} break-all`}>{link.value}</p>
                  <p className="text-xs dark:text-gray-500 text-gray-400 mt-1">{link.description}</p>
                </div>
                <ArrowTopRightOnSquareIcon className={`w-4 h-4 ${link.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
