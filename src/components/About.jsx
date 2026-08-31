import React from 'react';
import { Target, Eye, Code, Cpu, Server, Globe, Smartphone, Database, Cloud, Palette, Terminal } from 'lucide-react';
import { companyDetails, techStack, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function About() {
  const { locale, t } = useI18n();

  const getTechIcon = (name) => {
    switch (name) {
      case 'React':
      case 'Next.js':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Tailwind CSS':
        return <Palette className="w-5 h-5 text-sky-400" />;
      case 'Node.js':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Flutter':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'PostgreSQL':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'AWS & Docker':
        return <Cloud className="w-5 h-5 text-amber-500" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative border-b border-t border-slate-200 bg-white py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <span className="section-badge">{t.about.badge}</span>
          <h2 className="section-title">
            {t.about.title} <span className="glow-gradient-text">{t.about.titleAccent}</span>
          </h2>
          <p className="section-desc">{t.about.desc}</p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="glass-card group relative overflow-hidden rounded-2xl border-slate-800 p-8 transition-all hover:border-cyan-500/40">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-600 transition-transform group-hover:scale-110">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">{t.about.visionTitle}</h3>
            <p className="text-base leading-relaxed text-slate-600">{t.about.visionText}</p>
          </div>

          <div className="glass-card group relative overflow-hidden rounded-2xl border-slate-800 p-8 transition-all hover:border-brand-500/40">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">{t.about.missionTitle}</h3>
            <p className="text-base leading-relaxed text-slate-600">{t.about.missionText}</p>
          </div>
        </div>

        <div className="glass-panel rounded-3xl border-slate-800 p-8 sm:p-10">
          <div className="mb-8 text-center sm:text-start">
            <h3 className="mb-2 flex items-center justify-center gap-3 text-xl font-bold text-slate-900 sm:justify-start sm:text-2xl">
              <Cpu className="h-6 w-6 text-cyan-400" />
              <span>{t.about.stackTitle}</span>
            </h3>
            <p className="text-sm text-slate-400">{t.about.stackDesc}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="glass-card group flex items-center gap-3 rounded-xl border-slate-800/80 p-4 transition-all hover:border-cyan-500/30"
              >
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 transition-colors group-hover:border-brand-400/60">
                  {getTechIcon(tech.name)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-brand-600">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] font-medium text-slate-400">{L(tech.category, locale)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
