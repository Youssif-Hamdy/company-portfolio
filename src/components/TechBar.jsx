import React from 'react';
import { Atom, Braces, Database, Figma, GitBranch, Layers3, Server, Sparkles } from 'lucide-react';

const tech = [
  ['React', Atom],
  ['Next.js', Layers3],
  ['Node.js', Server],
  ['TypeScript', Braces],
  ['PostgreSQL', Database],
  ['Figma', Figma],
  ['Docker', GitBranch],
  ['AI / ML', Sparkles],
  ['Tailwind CSS', Layers3],
  ['Vite', Sparkles],
];

function TechItem({ name, Icon }) {
  return (
    <div className="marquee-item flex shrink-0 items-center gap-2 px-3 sm:gap-2.5 sm:px-6">
      <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-600" />
      </span>
      <span className="whitespace-nowrap text-xs sm:text-sm font-bold text-slate-700">{name}</span>
      <span className="mx-1 sm:mx-2 text-cyan-400/70">•</span>
    </div>
  );
}

export default function TechBar() {
  const sets = [0, 1, 2];

  return (
    <section className="tech-marquee relative z-20 overflow-hidden border-y border-slate-200 bg-white py-2.5 sm:py-3">
      <div className="marquee-fade-start pointer-events-none absolute inset-y-0 start-0 z-10 w-12 sm:w-28" />
      <div className="marquee-fade-end pointer-events-none absolute inset-y-0 end-0 z-10 w-12 sm:w-28" />

      <div className="marquee-viewport overflow-hidden">
        <div className="marquee-inner flex w-max items-center">
          {sets.map((set) => (
            <div key={set} className="marquee-set flex shrink-0 items-center" aria-hidden={set > 0}>
              {tech.map(([name, Icon]) => (
                <TechItem key={`${set}-${name}`} name={name} Icon={Icon} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
