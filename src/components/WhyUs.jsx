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

        {/* ── Testimonials Section ── */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-600 ring-1 ring-cyan-200/60">
              {t.whyUs.testimonialBadge}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.whyUs.testimonialTitle}{' '}
              <span className="bg-gradient-to-r from-brand-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {t.whyUs.testimonialAccent}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 hover:ring-cyan-400/50"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Subtle background glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/10" />

                <div className="relative z-10 space-y-5">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Quote Icon watermark */}
                  <Quote className="h-8 w-8 text-brand-500/25 transition-colors duration-300 group-hover:text-cyan-500/40" />

                  {/* Testimonial text */}
                  <p
                    className="text-sm font-medium leading-[1.8] text-slate-700 sm:text-[15px]"
                    style={{ fontFamily: locale === 'ar' ? "'Tajawal', sans-serif" : "'Plus Jakarta Sans', sans-serif" }}
                  >
                    &ldquo;{L(testi.text, locale)}&rdquo;
                  </p>
                </div>

                {/* Client Profile with Partner Logo */}
                <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 ring-2 ring-slate-200/80 shadow-md transition-all duration-300 group-hover:ring-cyan-500/50">
                    <img
                      src={encodeURI(testi.avatar)}
                      alt={L(testi.name, locale)}
                      className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                      {L(testi.name, locale)}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400">
                      {L(testi.role, locale)}
                    </p>
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
