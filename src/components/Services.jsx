import React, { useEffect, useRef, useState } from 'react';
import { Globe, Smartphone, Layers, Cloud, Cpu, Palette, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { services, L } from '../data/projectsData';
import { useI18n } from '../i18n';

const iconMap = { Globe, Smartphone, Layers, Cloud, Cpu, Palette };

function ServiceRow({ service, index, locale, visible, ctaLabel }) {
  const Icon = iconMap[service.icon] || Globe;
  const features = L(service.features, locale);
  const featureList = Array.isArray(features) ? features : [];
  const isEven = index % 2 === 0;
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div
      className={`service-row flex flex-col items-center gap-8 md:flex-row md:gap-12 ${
        isEven ? '' : 'md:flex-row-reverse'
      } ${visible ? 'service-row-visible' : 'service-row-hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="service-orbit relative shrink-0">
        <div className="service-orbit-ring absolute inset-0 rounded-full" />
        <div className="service-orbit-core relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-200 bg-white shadow-neon-cyan sm:h-32 sm:w-32">
          <Icon className="h-10 w-10 text-cyan-400 sm:h-12 sm:w-12" />
        </div>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-[10px] font-black text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="glass-card flex-1 rounded-2xl border-slate-800 p-6 sm:p-8">
        <h3 className="mb-3 text-xl font-bold text-slate-900">{L(service.title, locale)}</h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600">{L(service.description, locale)}</p>
        <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {featureList.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 transition-all hover:border-brand-500 hover:bg-brand-600 hover:text-white"
        >
          <span>{ctaLabel}</span>
          <Arrow className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { locale, t } = useI18n();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="ambient-glow-cyan top-1/2 left-0 -translate-y-1/2" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <span className="section-badge">{t.services.badge}</span>
          <h2 className="section-title">
            {t.services.title} <span className="glow-gradient-text">{t.services.titleAccent}</span>
          </h2>
          <p className="section-desc">{t.services.desc}</p>
        </div>

        <div className="space-y-14 md:space-y-20">
          {services.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              locale={locale}
              visible={visible}
              ctaLabel={t.services.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
