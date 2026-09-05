import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { companyDetails, L } from '../data/projectsData';
import { useI18n } from '../i18n';

export default function Contact() {
  const { locale, t } = useI18n();
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

    const selectedOption = t.serviceOptions.find((opt) => opt.value === formData.service);
    const serviceName = selectedOption ? selectedOption.label : formData.service;

    const messageLines = locale === 'ar'
      ? [
          `مرحباً أورقيفا! أود طلب استشارة ومشروع جديد:`,
          `• الاسم: ${formData.name}`,
          `• الهاتف: ${formData.phone}`,
          `• البريد: ${formData.email}`,
          `• الخدمة المطلوبة: ${serviceName}`,
          `• تفاصيل المشروع:`,
          `${formData.message}`,
        ]
      : [
          `Hello ORQEVA! I would like to request a consultation for a new project:`,
          `• Name: ${formData.name}`,
          `• Phone: ${formData.phone}`,
          `• Email: ${formData.email}`,
          `• Service Needed: ${serviceName}`,
          `• Project Details:`,
          `${formData.message}`,
        ];

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/201019948341?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'web-dev', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50/80 py-28 border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-600 ring-1 ring-cyan-200/60">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-brand-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t.contact.titleAccent}
            </span>
          </h2>
          <p className="text-base text-slate-500 sm:text-lg leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-2xl hover:ring-slate-300">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-cyan-400 to-blue-600" />

              <h3 className="mb-8 border-b border-slate-100 pb-4 text-2xl font-extrabold tracking-tight text-slate-900">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-6">
                {/* Direct Chat CTA */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/60 transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.phone}</h4>
                    <a
                      href="https://wa.me/201019948341"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1.5 text-base font-bold text-slate-900 transition-colors duration-300 hover:text-emerald-600"
                    >
                      <span>{t.contact.whatsapp}</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-200/60 transition-transform duration-300 group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.email}</h4>
                    <a
                      href={`mailto:${companyDetails.email}`}
                      className="mt-0.5 inline-block text-base font-bold text-slate-900 transition-colors duration-300 hover:text-brand-600"
                    >
                      {companyDetails.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-200/60 transition-transform duration-300 group-hover:scale-105">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.location}</h4>
                    <p className="mt-0.5 text-base font-bold text-slate-900">{L(companyDetails.location, locale)}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-200/60 transition-transform duration-300 group-hover:scale-105">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.contact.hours}</h4>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">{t.contact.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/201019948341"
              target="_blank"
              rel="noreferrer"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-2xl hover:shadow-emerald-600/35 active:scale-[0.99]"
            >
              <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span>{t.contact.whatsapp}</span>
              <Sparkles className="h-4 w-4 text-emerald-200 opacity-80" />
            </a>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200/80 transition-all duration-500 hover:shadow-2xl hover:ring-slate-300">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

              {submitted ? (
                <div className="animate-fadeIn space-y-6 py-16 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-100">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">{t.contact.successTitle}</h3>
                    <p className="mx-auto max-w-md text-base text-slate-600 leading-relaxed">
                      {t.contact.successText}
                    </p>
                  </div>
                  <a
                    href="https://wa.me/201019948341"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{t.contact.whatsapp}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                      {t.contact.formTitle}
                    </h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-200/60">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      WhatsApp Direct
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePh}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t.contact.phonePh}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPh}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        {t.contact.service}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t.contact.messagePh}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-4 text-base font-extrabold text-white shadow-xl shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-600/35 active:scale-[0.99]"
                  >
                    <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>{t.contact.submit}</span>
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
