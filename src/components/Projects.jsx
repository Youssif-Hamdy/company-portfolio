import React, { useState } from 'react';
import { Info, X, Code2, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects, projectCategories, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function Projects() {
  const { locale, t } = useI18n();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  const getCategoryLabel = (catId) => L(projectCategories.find((c) => c.id === catId)?.label, locale);

  return (
    <section id="projects" className="relative border-b border-t border-slate-900 bg-slate-950/70 py-24">
      <div className="ambient-glow-violet top-10 right-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
          <span className="rounded-full border border-cyan-800/40 bg-cyan-950/60 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-cyan-400">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t.projects.title} <span className="glow-gradient-text">{t.projects.titleAccent}</span>
          </h2>
          <p className="text-base text-slate-400 sm:text-lg">{t.projects.desc}</p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-card text-slate-300 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {L(cat.label, locale)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card group flex flex-col justify-between overflow-hidden rounded-2xl border-slate-800 transition-all duration-300 hover:border-cyan-500/40"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={L(project.title, locale)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  <span className="absolute right-3 top-3 rounded-full border border-cyan-500/30 bg-slate-900/90 px-3 py-1 text-xs font-bold text-cyan-400 backdrop-blur-md">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>

                <div className="space-y-3 p-6">
                  <div className="text-xs font-semibold text-brand-400">
                    {t.projects.client}: {L(project.client, locale)}
                  </div>
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {L(project.title, locale)}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                    {L(project.shortDesc, locale)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:border-cyan-400 hover:bg-slate-800"
                >
                  <Info className="h-4 w-4 text-cyan-400" />
                  <span>{t.projects.viewDetails}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border-cyan-500/30 p-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-xl border border-cyan-500/30 bg-cyan-950 p-3 text-cyan-400">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{t.projects.addTitle}</h4>
              <p className="text-xs text-slate-400 sm:text-sm">
                {t.projects.addDesc}{' '}
                <code className="dir-ltr inline-block rounded bg-slate-900 px-2 py-0.5 text-cyan-300">
                  src/data/projectsData.js
                </code>
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="gradient-button flex shrink-0 items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white sm:text-sm"
          >
            <span>{t.projects.addCta}</span>
            <Arrow className="h-4 w-4" />
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex animate-fadeIn items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="glass-panel relative max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-3xl border-slate-700 p-6 sm:p-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute left-6 top-6 rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700">
              <img
                src={selectedProject.image}
                alt={L(selectedProject.title, locale)}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                <span>
                  {t.projects.modalClient}: {L(selectedProject.client, locale)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">{L(selectedProject.title, locale)}</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {L(selectedProject.fullDesc, locale) || L(selectedProject.shortDesc, locale)}
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                {t.projects.modalTech}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white"
              >
                {t.projects.close}
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="gradient-button flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-bold text-white"
              >
                <span>{t.projects.similar}</span>
                <Arrow className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
