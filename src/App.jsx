import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundGlow from './components/layout/BackgroundGlow';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import ResumeModal from './components/common/ResumeModal';
import Toast from './components/common/Toast';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
  const activeSection = useActiveSection(sectionIds, 120);

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastInfo, setToastInfo] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToastInfo({ message, type });
    setTimeout(() => {
      setToastInfo({ message: '', type: 'success' });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-background text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient lighting */}
      <BackgroundGlow />

      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastInfo.message}
        type={toastInfo.type}
        onClose={() => setToastInfo({ message: '', type: 'success' })}
      />
    </div>
  );
}
