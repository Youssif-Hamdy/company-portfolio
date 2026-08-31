import React from 'react';
import { Github, Linkedin, Twitter, Facebook, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { companyDetails, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function Footer() {
  const { locale, t } = useI18n();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pb-8 pt-16 text-slate-600">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-200 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="logo-wrap flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-16">
                <img
                  src="/logo1.png"
                  alt="ORQEVA"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-[0.18em] text-slate-900">ORQEVA</span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              {L(companyDetails.tagline, locale)} {L(companyDetails.description, locale)}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                [Github, companyDetails.socials.github, 'Github'],
                [Linkedin, companyDetails.socials.linkedin, 'Linkedin'],
                [Twitter, companyDetails.socials.twitter, 'Twitter'],
                [Facebook, companyDetails.socials.facebook, 'Facebook'],
              ].map(([Icon, href, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-600 transition-all hover:border-brand-400 hover:text-brand-600"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <h4 className="mb-4 text-base font-bold text-slate-900">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm font-medium">
              {t.nav.map((link, i) => {
                const ids = ['hero', 'about', 'services', 'partners', 'why-us', 'contact'];
                return (
                  <li key={ids[i]}>
                    <a href={`#${ids[i]}`} className="transition-colors hover:text-brand-600">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-4">
            <h4 className="mb-4 text-base font-bold text-slate-900">{t.footer.newsletter}</h4>
            <p className="text-xs text-slate-400 sm:text-sm">{t.footer.newsletterDesc}</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPh}
                className="form-field text-xs"
              />
              <button
                type="submit"
                className="gradient-button flex shrink-0 items-center gap-1 rounded-xl px-4 py-2.5 text-xs font-bold text-white"
              >
                <span>{t.footer.subscribe}</span>
                <Arrow className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            © {currentYear} {L(companyDetails.name, locale)}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1">
            <span>{t.footer.builtBy}</span>
            <Heart className="inline h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span className="font-semibold text-slate-900">ORQEVA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
