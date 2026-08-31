import React from 'react';
import { useI18n } from '../i18n';

const logos = [
  { src: '/logos/chef.jpeg', name: 'Chef' },
  { src: '/logos/elfarmshia.png', name: 'El Farmashia' },
  { src: '/logos/nagham.PNG', name: 'Nagham' },
  { src: '/logos/nibras.png', name: 'Nibras' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM.jpeg', name: 'Partner 5' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM (1).jpeg', name: 'Partner 6' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.58 PM (2).jpeg', name: 'Partner 7' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.59 PM.jpeg', name: 'Partner 8' },
  { src: '/logos/WhatsApp Image 2026-08-31 at 1.37.59 PM (1).jpeg', name: 'Partner 9' },
];

export default function Clients() {
  const { t } = useI18n();
  const sets = [0, 1, 2];

  return (
    <section id="partners" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-700">
            {t.partners.badge}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            {t.partners.title} <span className="text-brand-600">{t.partners.titleAccent}</span>
          </h2>
          <p className="text-lg text-slate-600">
            {t.partners.desc}
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden group">
        <div className="marquee-viewport overflow-hidden">
          <div className="marquee-inner flex w-max items-center group-hover:[animation-play-state:paused]">
            {sets.map((set) => (
              <div key={set} className="marquee-set flex shrink-0 items-center" aria-hidden={set > 0}>
                {logos.map((logo, i) => (
                  <div
                    key={`${set}-${logo.name}-${i}`}
                    className="mx-4 sm:mx-6 flex h-24 w-36 sm:w-44 shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm border border-slate-100/80"
                  >
                    <img
                      src={encodeURI(logo.src)}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
