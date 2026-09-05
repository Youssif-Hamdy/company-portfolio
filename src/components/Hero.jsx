import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';

const SLIDE_MS = 7000;

export default function Hero() {
  const { locale, t } = useI18n();
  const slides = t.heroSlides;
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (next) => {
    const target = (next + slides.length) % slides.length;
    if (target === index) return;
    setTransitioning(true);
    setTimeout(() => {
      setIndex(target);
      setTransitioning(false);
    }, 100);
  };

  const isAr = locale === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">

      {/* Background Image Carousel */}
      {slides.map((slide, i) => (
        <div
          key={`slide-${i}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 0 }}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover object-center transition-transform duration-[12000ms] ease-out ${
              i === index ? 'scale-[1.06]' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Overlays — heavy on text side, fades to transparent on right */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-slate-950/20" />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: isAr
            ? 'linear-gradient(to left, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.78) 40%, rgba(2,6,23,0.35) 65%, transparent 100%)'
            : 'linear-gradient(to right, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.78) 40%, rgba(2,6,23,0.35) 65%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(2,6,23,0.90) 0%, transparent 45%)' }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-16">
          <div className="max-w-[640px]">

            {/* Eyebrow label */}
            <p
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '0.3em' }}
            >
              ORQEVA — {isAr ? 'وكالة برمجيات وذكاء اصطناعي' : 'Software & AI Agency'}
            </p>

            {/* Main Headline */}
            <h1
              className={`leading-[1.08] tracking-[-0.02em] text-white ${
                isAr
                  ? 'text-4xl font-extrabold sm:text-5xl lg:text-6xl'
                  : 'text-[2.85rem] font-extrabold sm:text-6xl lg:text-[5rem]'
              }`}
              style={{
                fontFamily: isAr
                  ? "'Cairo', sans-serif"
                  : "'Bricolage Grotesque', 'Plus Jakarta Sans', sans-serif",
                lineHeight: isAr ? '1.18' : '1.06',
              }}
            >
              <span
                key={`title-${index}`}
                className="block transition-opacity duration-700"
                style={{ opacity: transitioning ? 0 : 1 }}
              >
                {slides[index].title}
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              key={`text-${index}`}
              className="mt-6 max-w-md text-base font-normal leading-[1.8] text-white/80 sm:text-lg"
              style={{
                fontFamily: isAr ? "'Tajawal', sans-serif" : "'Plus Jakarta Sans', sans-serif",
                transition: 'opacity 0.7s ease',
                opacity: transitioning ? 0 : 1,
                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
              }}
            >
              {slides[index].text}
            </p>

            {/* CTA Buttons - Clean, no raw phone numbers exposed */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-2xl shadow-slate-950/40 transition-all duration-300 hover:bg-slate-100 hover:shadow-white/20 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif" }}
              >
                <span>{isAr ? 'خدماتنا المتكاملة' : 'Our Services'}</span>
              </a>
            </div>

            {/* Slide counter — minimal, premium */}
            <div className="mt-14 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-500 ${
                      i === index
                        ? 'h-[3px] w-8 bg-white'
                        : 'h-[3px] w-4 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <span
                className="text-[11px] font-light tracking-widest text-slate-500 tabular-nums"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                0{index + 1} / 0{slides.length}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Prev / Next arrows — discreet, bottom-right */}
      <div className={`absolute bottom-8 z-30 flex items-center gap-2 ${isAr ? 'left-8' : 'right-8'}`}>
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </section>
  );
}
