import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, Headphones, Lock, Star, Quote } from 'lucide-react';
import { whyChooseUs, testimonials, L } from '../data/projectsData';
import { useI18n } from '../i18n';

const iconMap = {
  ShieldCheck,
  Clock,
  Headphones,
  Lock,
};

function TimelineStep({ item, index, locale, visible, isLast }) {
  const Icon = iconMap[item.icon] || ShieldCheck;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`timeline-step relative ${visible ? 'timeline-step-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`flex flex-col items-center gap-6 md:flex-row md:gap-10 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        <div className={`flex-1 ${isEven ? 'md:text-end' : 'md:text-start'} text-center md:text-inherit`}>
          <div className="timeline-card glass-card rounded-2xl border-slate-800 p-6 md:p-7">
            <span className="mb-2 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-black text-cyan-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{L(item.title, locale)}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{L(item.desc, locale)}</p>
          </div>
        </div>

        <div className="relative z-10 flex shrink-0 flex-col items-center">
          <div className="timeline-node flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-cyan-400/70 bg-white shadow-neon-cyan">
            <div className="timeline-node-ring absolute inset-0 rounded-full" />
            <div className="timeline-node-pulse absolute inset-0 rounded-full" />
            <Icon className="relative z-10 h-7 w-7 text-cyan-400" />
          </div>
          {!isLast && <div className={`timeline-connector mt-0 h-16 w-0.5 md:hidden ${visible ? 'timeline-connector-active' : ''}`} />}
        </div>

        <div className="hidden flex-1 md:block" />
      </div>
    </div>
  );
}

export default function WhyUs() {
  const { locale, t } = useI18n();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="relative overflow-hidden py-24">
      <div className="ambient-glow-blue top-1/3 right-0" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
            <span className="section-badge">{t.whyUs.badge}</span>
            <h2 className="section-title">
              {t.whyUs.title} <span className="glow-gradient-text">{t.whyUs.titleAccent}</span>
            </h2>
            <p className="section-desc">{t.whyUs.desc}</p>
          </div>

          <div className="timeline-path relative mx-auto max-w-3xl">
            <svg
              className="timeline-svg pointer-events-none absolute inset-0 hidden h-full w-full md:block"
              viewBox="0 0 100 400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className={`timeline-svg-path ${visible ? 'timeline-svg-path-active' : ''}`}
                d="M 50 0 Q 85 50 50 100 T 50 200 T 50 300 T 50 400"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="0.6"
                strokeDasharray="4 3"
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            <div className={`timeline-line hidden md:block ${visible ? 'timeline-line-active' : ''}`} />

            <div className="relative space-y-12 md:space-y-16">
              {whyChooseUs.map((item, idx) => (
                <TimelineStep
                  key={idx}
                  item={item}
                  index={idx}
                  locale={locale}
                  visible={visible}
                  isLast={idx === whyChooseUs.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-12">
          <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
            <span className="section-badge">{t.whyUs.testimonialBadge}</span>
            <h2 className="section-title">
              {t.whyUs.testimonialTitle}{' '}
              <span className="glow-gradient-text">{t.whyUs.testimonialAccent}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="glass-card relative flex flex-col justify-between rounded-2xl border-slate-800 p-8"
              >
                <Quote className="absolute left-6 top-6 h-10 w-10 text-brand-500/20" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed text-slate-600">
                    &ldquo;{L(testi.text, locale)}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
                  <img
                    src={testi.avatar}
                    alt={L(testi.name, locale)}
                    className="h-11 w-11 rounded-full border border-cyan-500/30 object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{L(testi.name, locale)}</h4>
                    <p className="text-xs text-slate-400">{L(testi.role, locale)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
