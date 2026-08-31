import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { companyDetails, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function Contact() {
  const { locale, t } = useI18n();
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web-dev',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'web-dev', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative border-t border-slate-200 bg-slate-50 py-24">
      <div className="ambient-glow-cyan top-1/4 right-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <span className="section-badge">{t.contact.badge}</span>
          <h2 className="section-title">
            {t.contact.title} <span className="glow-gradient-text">{t.contact.titleAccent}</span>
          </h2>
          <p className="section-desc">{t.contact.desc}</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="glass-card space-y-8 rounded-3xl border-slate-800 p-8">
              <h3 className="mb-6 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-900">
                {t.contact.infoTitle}
              </h3>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-cyan-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-400">{t.contact.phone}</h4>
                  <a
                    href={companyDetails.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="dir-ltr inline-block text-lg font-bold text-slate-900 transition-colors hover:text-brand-600"
                  >
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-brand-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-400">{t.contact.email}</h4>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-base font-bold text-slate-900 transition-colors hover:text-brand-600"
                  >
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-emerald-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-400">{t.contact.location}</h4>
                  <p className="text-base font-bold text-slate-900">{L(companyDetails.location, locale)}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-amber-500">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-slate-400">{t.contact.hours}</h4>
                  <p className="text-sm font-bold text-slate-900">{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            <a
              href={companyDetails.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500"
            >
              <MessageSquare className="h-5 w-5" />
              <span>{t.contact.whatsapp}</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel relative rounded-3xl border-slate-800 p-8 sm:p-10">
              {submitted ? (
                <div className="animate-fadeIn space-y-4 py-16 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-950 text-emerald-400">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{t.contact.successTitle}</h3>
                  <p className="mx-auto max-w-md text-base text-slate-600">{t.contact.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="border-b border-slate-200 pb-4 text-2xl font-bold text-slate-900">
                    {t.contact.formTitle}
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600">{t.contact.name}</label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePh}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600">{t.contact.phoneLabel}</label>
                      <input
                        type="tel"
                        required
                        placeholder={t.contact.phonePh}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600">{t.contact.emailLabel}</label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPh}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-600">{t.contact.service}</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-field"
                      >
                        {t.serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-600">{t.contact.message}</label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t.contact.messagePh}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gradient-button flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base font-bold text-white shadow-lg shadow-cyan-500/25"
                  >
                    <Send className="h-5 w-5" />
                    <span>{t.contact.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
