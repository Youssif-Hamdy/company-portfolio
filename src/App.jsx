import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechBar from './components/TechBar';
import { I18nProvider, useI18n } from './i18n';

function Site() {
  const { theme } = useI18n();
  return (
    <div
      className={`min-h-screen font-sans relative transition-colors selection:bg-brand-500 selection:text-white ${
        theme === 'dark' ? 'bg-[#070b14] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar />
      <main>
        <Hero />
        <TechBar />
        <About />
        <Services />
        <Clients />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}
