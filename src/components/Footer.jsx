import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: personal.github,              icon: FiGithub,   label: 'GitHub' },
    { href: personal.linkedin,            icon: FiLinkedin, label: 'LinkedIn' },
    { href: `mailto:${personal.email}`,   icon: FiMail,     label: 'Email' },
  ];

  return (
    <footer className="dark:bg-[#080b14] bg-gray-50 border-t dark:border-white/5 border-gray-200">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-display font-bold text-xs shadow-sm">
              ND
            </div>
            <div>
              <p className="font-display font-semibold text-sm dark:text-white text-gray-900">{personal.name}</p>
              <p className="text-xs dark:text-gray-500 text-gray-400">IT Undergraduate & QA Enthusiast</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs dark:text-gray-500 text-gray-400 text-center">
            © {year} {personal.name}. Built with React, Vite & Framer Motion.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center
                  dark:bg-white/5 bg-gray-100 border dark:border-white/5 border-gray-200
                  dark:text-gray-500 text-gray-500
                  dark:hover:bg-primary-500/10 hover:bg-primary-50
                  dark:hover:text-primary-400 hover:text-primary-600
                  dark:hover:border-primary-500/20 hover:border-primary-200
                  transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
