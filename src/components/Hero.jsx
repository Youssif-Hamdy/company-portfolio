import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n';

const SLIDE_MS = 6500;

export default function Hero() {
  const { t } = useI18n();
  const slides = t.heroSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (next) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-900">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <picture>
            <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
            <img
              src={slide.image}
              alt=""
              className={`h-full w-full object-cover object-center transition-transform duration-[8000ms] ease-out ${i === index ? 'scale-110' : 'scale-100'}`}
            />
          </picture>
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />

      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl transform transition-all duration-700">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-cyan-400 drop-shadow-md">
              ORQEVA
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              {slides[index].title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 drop-shadow sm:text-xl">
              {slides[index].text}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#partners" className="gradient-button rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-1">
                {t.heroCtaPartners}
              </a>
              <a
                href="#contact"
                className="rounded-xl border-2 border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/25 hover:-translate-y-1"
              >
                {t.newProject}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur transition-all hover:bg-black/40 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-10 bg-cyan-400' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur transition-all hover:bg-black/40 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
