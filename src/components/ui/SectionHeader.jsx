import { FadeInUp } from './AnimateWrapper';

export function SectionHeader({ label, title, subtitle, className = '', align = 'center' }) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  }[align];

  return (
    <div className={`flex flex-col gap-3 mb-16 ${alignClass} ${className}`}>
      <FadeInUp>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
          dark:bg-primary-500/10 bg-primary-100 dark:text-primary-400 text-primary-600 dark:border dark:border-primary-500/20 border border-primary-200">
          {label}
        </span>
      </FadeInUp>

      <FadeInUp delay={0.1}>
        <h2 className="section-title bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
          {title}
        </h2>
      </FadeInUp>

      {subtitle && (
        <FadeInUp delay={0.2}>
          <p className="section-subtitle dark:text-gray-400 text-gray-500 mx-auto">{subtitle}</p>
        </FadeInUp>
      )}
    </div>
  );
}
