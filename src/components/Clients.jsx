import React from 'react';
import { useI18n } from '../i18n';

const logos = [
  { src: '/logos/chef.jpeg', name: 'Chef' },
  { src: '/logos/elfarmshia.png', name: 'El Farmashia' },
  { src: '/logos/nagham.PNG', name: 'Nagham' },
  { src: '/logos/nibras.png', name: 'Nibras' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM.jpeg', name: 'Taxi Kurir' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM (1).jpeg', name: 'Taxi Vip' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM (2).jpeg', name: 'Taxi Bil' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.59 PM.jpeg', name: 'Tor Taxi' },
];

export default function Clients() {
  const { t } = useI18n();

  return (
    <section id="partners" className="relative overflow-hidden bg-white py-28">

      {/* Section heading */}
      <div className="relative z-10 mx-auto mb-16 max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {t.partners.badge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t.partners.title}{' '}
            <span className="text-brand-600">{t.partners.titleAccent}</span>
          </h2>
          <p className="text-base text-slate-500 sm:text-lg">{t.partners.desc}</p>
        </div>
      </div>

      {/* ── Marquee Track ── */}
      <div className="clients-marquee-wrap relative overflow-hidden">

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling strip */}
        <div className="clients-marquee-inner flex items-center">
          {[0, 1, 2].map((set) => (
            <div
              key={set}
              className="clients-marquee-set flex shrink-0 items-center gap-14 px-8"
              aria-hidden={set > 0}
            >
              {logos.map((logo, i) => (
                <div
                  key={`${set}-${i}`}
                  className="clients-logo-pill group flex shrink-0 flex-col items-center gap-3"
                >
                  {/* Circle */}
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-md shadow-slate-200/80 ring-1 ring-slate-200/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-brand-500/15 group-hover:ring-2 group-hover:ring-brand-400/50 sm:h-36 sm:w-36">
                    {/* subtle inner glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-50/0 to-brand-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <img
                      src={encodeURI(logo.src)}
                      alt={logo.name}
                      className="h-20 w-20 rounded-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24"
                      draggable={false}
                    />
                  </div>
                  {/* Client name */}
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 group-hover:text-brand-500"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
