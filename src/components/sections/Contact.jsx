import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, LeetCode } from '../common/Icons';
import confetti from 'canvas-confetti';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { personalInfo } from '../../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast(`Copied ${personalInfo.email} to clipboard!`);
    }
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Realistic frontend simulation
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#06b6d4', '#6366f1', '#10b981']
        });
      } catch (err) {
        // Safe fallback
      }

      if (onShowToast) {
        onShowToast(`Thank you, ${formData.name}! Your message has been prepared.`);
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Meaningful."
          subtitle="I'm always interested in learning, building, and connecting with people working on interesting technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connect & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 relative overflow-hidden border border-white/10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Direct Inquiries
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Reach Out Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-pretty">
                  Whether you have an internship opportunity, an interesting open-source idea, or want to discuss AI/software architecture, feel free to drop a line.
                </p>
              </div>

              {/* Email One-Click Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400 border border-primary-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Address</div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-white truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Professional Profiles Grid */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Professional Profiles
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-primary-400/40 hover:bg-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-primary-400" />
                    <span className="font-mono text-slate-300 font-medium">LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-primary-400/40 hover:bg-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-primary-400" />
                    <span className="font-mono text-slate-300 font-medium">GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-primary-400/40 hover:bg-slate-800/80 flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <LeetCode className="w-4 h-4 text-slate-400 group-hover:text-primary-400" />
                    <span className="font-mono text-slate-300 font-medium">LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Frontend Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary-400" />
                  <span>Send a Message</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">Frontend Form</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300">
                      Your Name <span className="text-primary-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300">
                      Your Email <span className="text-primary-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Internship opportunity, Collaboration, or Project inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                    Message <span className="text-primary-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Deeksha, I came across your portfolio and wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? 'Preparing message...' : 'Send Message'}
                  </Button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
