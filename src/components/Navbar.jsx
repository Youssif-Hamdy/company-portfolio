import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, ArrowRight, Languages } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'services', 'partners', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['hero', 'about', 'services', 'partners', 'why-us', 'contact'].map((id, index) => ({
    id,
    href: `#${id}`,
    name: t.nav[index],
  }));
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const overHero = !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/25'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className={`logo-wrap relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 sm:h-16 sm:w-16 ${
                overHero
                  ? 'group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]'
                  : 'group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.35)]'
              }`}
            >
              <img
                src="/logo1.png"
                alt="ORQEVA"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span
              className={`font-extrabold text-xl tracking-[0.18em] transition-colors sm:text-2xl ${
                overHero ? 'text-white group-hover:text-cyan-300' : 'nav-brand-text group-hover:text-cyan-400'
              }`}
            >
              ORQEVA
            </span>
          </a>

          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-all duration-500 ${
              overHero
                ? 'border-white/20 bg-white/10'
                : 'border-slate-200 bg-white/80'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                      : overHero
                        ? 'text-white/85 hover:text-white hover:bg-white/15'
                        : 'nav-link-idle'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
              className={`nav-icon-btn inline-flex h-10 items-center gap-1 rounded-full border px-3 text-xs font-bold transition-all ${
                overHero ? 'nav-icon-btn-hero' : 'nav-icon-btn-solid'
              }`}
              aria-label="Change language"
            >
              <Languages className="h-4 w-4" />
              {locale === 'ar' ? 'EN' : 'ع'}
            </button>
            <a
              href="#contact"
              className="gradient-button text-white font-bold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>{t.newProject}</span>
              <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl border focus:outline-none transition-all ${
              overHero
                ? 'border-white/25 bg-white/10 text-white hover:bg-white/20'
                : 'border-slate-200 bg-white text-slate-700 hover:text-brand-600 hover:border-brand-400'
            }`}
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn ${
            overHero ? 'border-white/15 bg-slate-950/80 backdrop-blur-xl' : 'glass-panel border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                activeSection === link.id
                  ? 'bg-brand-600/30 text-brand-700 border border-brand-500/30'
                  : overHero
                    ? 'text-white/85 hover:bg-white/10 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-brand-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
              className={`w-full rounded-xl border py-3 text-sm font-bold transition-all ${
                overHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600'
              }`}
            >
              {locale === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full gradient-button text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t.newProject}</span>
              <Arrow className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
