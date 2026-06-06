import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SectionHeader } from './ui/SectionHeader';
import { FadeInUp, StaggerContainer, StaggerItem } from './ui/AnimateWrapper';
import { personal } from '../data/portfolioData';

// ── Your Formspree form ID (the part after /f/ in your endpoint URL) ─────────
const FORMSPREE_ID = 'xeewepgq';

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

// ── Floating label input ─────────────────────────────────────────────────────
function FloatingInput({ id, label, type = 'text', value, onChange, required, error, icon: Icon }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <div
        className={`relative flex items-center rounded-xl border transition-all duration-300
          ${error
            ? 'border-red-400/60 dark:border-red-500/60'
            : active
              ? 'border-primary-400/70 dark:border-primary-500/60 shadow-[0_0_0_3px_rgba(100,120,242,0.1)]'
              : 'border-gray-200 dark:border-white/10'
          }
          dark:bg-white/[0.03] bg-white`}
      >
        {Icon && (
          <div className={`pl-4 transition-colors duration-300 ${active ? 'text-primary-500' : 'text-gray-400 dark:text-gray-600'}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className="peer w-full bg-transparent px-3 pt-6 pb-2 text-sm dark:text-white text-gray-900 placeholder-transparent focus:outline-none"
          placeholder={label}
          autoComplete="off"
        />
        <label
          htmlFor={id}
          className={`absolute transition-all duration-200 pointer-events-none select-none
            ${active
              ? 'top-2 text-[10px] font-semibold text-primary-500 dark:text-primary-400'
              : 'top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-gray-500'
            }`}
          style={{ left: Icon ? '2.75rem' : '1rem' }}
        >
          {label}{required && <span className="text-primary-400 ml-0.5">*</span>}
        </label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1 mt-1.5 text-xs text-red-500 dark:text-red-400"
          >
            <ExclamationCircleIcon className="w-3.5 h-3.5" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Floating label textarea ──────────────────────────────────────────────────
function FloatingTextarea({ id, label, value, onChange, required, error }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <div
        className={`relative rounded-xl border transition-all duration-300
          ${error
            ? 'border-red-400/60 dark:border-red-500/60'
            : active
              ? 'border-primary-400/70 dark:border-primary-500/60 shadow-[0_0_0_3px_rgba(100,120,242,0.1)]'
              : 'border-gray-200 dark:border-white/10'
          }
          dark:bg-white/[0.03] bg-white`}
      >
        <div className="flex">
          <div className={`pl-4 pt-6 transition-colors duration-300 shrink-0 ${active ? 'text-primary-500' : 'text-gray-400 dark:text-gray-600'}`}>
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
          </div>
          <textarea
            id={id}
            name={id}
            value={value}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={onChange}
            rows={5}
            className="peer w-full bg-transparent px-3 pt-6 pb-3 text-sm dark:text-white text-gray-900 placeholder-transparent focus:outline-none resize-none"
            placeholder={label}
          />
        </div>
        <label
          htmlFor={id}
          className={`absolute transition-all duration-200 pointer-events-none select-none
            ${active
              ? 'top-2 text-[10px] font-semibold text-primary-500 dark:text-primary-400'
              : 'top-5 text-sm text-gray-400 dark:text-gray-500'
            }`}
          style={{ left: '2.75rem' }}
        >
          {label}{required && <span className="text-primary-400 ml-0.5">*</span>}
        </label>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1 mt-1.5 text-xs text-red-500 dark:text-red-400"
          >
            <ExclamationCircleIcon className="w-3.5 h-3.5" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Contact section ─────────────────────────────────────────────────────
export default function Contact() {
  // @formspree/react handles CORS, submission, and state natively
  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_ID);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  // Default  layout optimized; validation errors  Normalized.
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Delegate to Formspree — it handles CORS, retries, and response parsing
    handleFormspreeSubmit(e);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    // Reset Formspree state; useForm resets on re-render after success. We just clear local state.
    window.location.hash = '#contact';
  };

  // Derive a human-readable error from Formspree errors array
  const formspreeError = state.errors?.length
    ? state.errors.map((e) => e.message).join(' ')
    : null;

  return (
    <section id="contact" className="section-padding dark:bg-[#0d1120] bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 opacity-[0.06] bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 opacity-[0.06] bg-accent-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 opacity-[0.04] bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Whether it's a job opportunity, collaboration, or just a friendly conversation — I'm always open."
        />

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">

          {/* ── Left: Status card + contact links ── */}
          <FadeInUp delay={0.1} className="flex flex-col gap-6">

            {/* Availability card */}
            <div className="flex flex-col items-start gap-4 p-7 rounded-2xl
              dark:bg-gradient-to-br dark:from-primary-500/10 dark:to-accent-500/10
              bg-gradient-to-br from-primary-50 to-violet-50
              border dark:border-primary-500/20 border-primary-200 shadow-sm">
              <div className="text-5xl">👩‍💻</div>
              <div>
                <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1.5">
                  Open to Opportunities
                </h3>
                <p className="dark:text-gray-400 text-gray-600 leading-relaxed text-sm">
                  I'm actively looking for internships, part-time roles, and full-time
                  positions in software development and QA.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500">
                  <MapPinIcon className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>{personal.location} — Remote Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
                  </span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">Available Now</span>
                </div>
              </div>
            </div>

            {/* Contact link cards */}
            <StaggerContainer className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <StaggerItem key={link.id}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    id={link.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl
                      dark:bg-white/[0.03] bg-gray-50 border dark:border-white/5 border-gray-100
                      ${link.hoverBorder} hover:shadow-md transition-all duration-300`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center
                      shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shrink-0`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm dark:text-white text-gray-900">{link.label}</p>
                      <p className={`text-xs font-medium ${link.accent} truncate`}>{link.value}</p>
                    </div>
                    <ArrowTopRightOnSquareIcon className={`w-4 h-4 ${link.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0`} />
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>

          {/* ── Right: Contact form ── */}
          <FadeInUp delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden
              dark:bg-white/[0.03] bg-white
              border dark:border-white/8 border-gray-100
              shadow-xl dark:shadow-none p-7 sm:p-8">

              {/* Gradient top bar */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-teal-400" />

              <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-1">
                Send a Message
              </h3>
              <p className="text-sm dark:text-gray-400 text-gray-500 mb-6">
                I'll get back to you within 24–48 hours.
              </p>

              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center gap-4 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center"
                    >
                      <CheckCircleIcon className="w-8 h-8 text-teal-500" />
                    </motion.div>
                    <div>
                      <h4 className="font-display font-bold text-lg dark:text-white text-gray-900 mb-1">
                        Message Sent! 🎉
                      </h4>
                      <p className="text-sm dark:text-gray-400 text-gray-500">
                        Thanks for reaching out. I'll reply as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => window.location.reload()}
                      className="btn-secondary text-sm px-6 py-2.5 mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-4"
                  >
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FloatingInput
                        id="name"
                        label="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        error={errors.name}
                        icon={UserIcon}
                      />
                      <FloatingInput
                        id="email"
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        error={errors.email}
                        icon={EnvelopeIcon}
                      />
                    </div>

                    {/* Subject */}
                    <FloatingInput
                      id="subject"
                      label="Subject (optional)"
                      value={form.subject}
                      onChange={handleChange}
                      icon={ChatBubbleBottomCenterTextIcon}
                    />

                    {/* Message */}
                    <FloatingTextarea
                      id="message"
                      label="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      error={errors.message}
                    />

                    {/* Formspree error banner */}
                    <AnimatePresence>
                      {formspreeError && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-sm"
                        >
                          <ExclamationCircleIcon className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{formspreeError}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <motion.button
                      id="contact-submit"
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: state.submitting ? 1 : 1.01 }}
                      whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                      className="btn-primary w-full justify-center py-3.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs dark:text-gray-600 text-gray-400">
                      Your information is kept private and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
