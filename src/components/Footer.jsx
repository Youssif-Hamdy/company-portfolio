import React from 'react';
import { Facebook, ArrowLeft, ArrowRight } from 'lucide-react';
import { companyDetails, L } from '../data/projectsData';
import { useI18n } from '../i18n';

// TikTok icon (not in lucide-react)
function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.66a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
    </svg>
  );
}

// Instagram icon (not in lucide-react)
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

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
              <div className="logo-wrap flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-14 sm:w-14">
                <img
                  src="/logo.svg"
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
                [Facebook, companyDetails.socials.facebook, 'Facebook'],
                [TikTokIcon, companyDetails.socials.tiktok, 'TikTok'],
                [InstagramIcon, companyDetails.socials.instagram, 'Instagram'],
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

        <div className="flex flex-col items-center justify-center gap-4 pt-8 text-xs text-slate-400">
          <p>
            © {currentYear} {L(companyDetails.name, locale)}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
