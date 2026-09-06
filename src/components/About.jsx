import React from 'react';
import { Target, Eye, Code, Cpu, Server, Globe, Smartphone, Database, Cloud, Palette, Terminal } from 'lucide-react';
import { companyDetails, techStack, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function About() {
  const { locale, t } = useI18n();

  const getTechIcon = (name) => {
    switch (name) {
      case 'React':
        return <Code className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600" />;
      case 'Next.js':
        return <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-slate-800" />;
      case 'Tailwind CSS':
        return <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-sky-500" />;
      case 'Node.js':
        return <Server className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />;
      case 'Python':
        return <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />;
      case 'Flutter':
        return <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />;
      case 'PostgreSQL':
        return <Database className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />;
      case 'AWS & Docker':
        return <Cloud className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />;
      default:
        return <Code className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600" />;
    }
  };

  return (
    <section id="about" className="relative border-b border-t border-slate-200 bg-white py-14 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-16">
          <span className="section-badge">{t.about.badge}</span>
          <h2 className="section-title">
            {t.about.title} <span className="glow-gradient-text">{t.about.titleAccent}</span>
          </h2>
          <p className="section-desc">{t.about.desc}</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-16 sm:gap-8 md:grid-cols-2">
          <div className="glass-card group relative overflow-hidden rounded-2xl border-slate-800 p-6 sm:p-8 transition-all hover:border-cyan-500/40">
            <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110">
              <Eye className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:mb-3 sm:text-2xl">{t.about.visionTitle}</h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{t.about.visionText}</p>
          </div>

          <div className="glass-card group relative overflow-hidden rounded-2xl border-slate-800 p-6 sm:p-8 transition-all hover:border-brand-500/40">
            <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
              <Target className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:mb-3 sm:text-2xl">{t.about.missionTitle}</h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{t.about.missionText}</p>
          </div>
        </div>

        <div className="glass-panel rounded-2xl sm:rounded-3xl border-slate-800 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm">
          <div className="mb-5 text-center sm:mb-8 sm:text-start">
            <h3 className="mb-2 flex items-center justify-center gap-2.5 text-lg font-bold text-slate-900 sm:justify-start sm:text-2xl">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-600 shadow-xs">
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span>{t.about.stackTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 sm:text-sm">{t.about.stackDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3.5 md:grid-cols-4 md:gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="glass-card group flex items-center gap-2.5 sm:gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-2.5 sm:p-3.5 md:p-4 transition-all duration-200 hover:border-cyan-500/40 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition-colors group-hover:border-brand-400/60 group-hover:bg-brand-50/50">
                  {getTechIcon(tech.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs sm:text-sm font-bold text-slate-900 transition-colors group-hover:text-brand-600" title={tech.name}>
                    {tech.name}
                  </h4>
                  <span className="truncate text-[10px] sm:text-[11px] font-medium text-slate-500 block">
                    {L(tech.category, locale)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
