import { ArrowDown } from 'lucide-react';

const CODE_SYMBOLS = [
  { text: '</>', className: 'left-[6%] top-[18%] text-7xl md:text-9xl -rotate-12' },
  { text: '!==', className: 'right-[8%] top-[22%] text-6xl md:text-8xl rotate-6' },
  { text: '=>', className: 'left-[12%] bottom-[16%] text-6xl md:text-8xl rotate-3' },
  { text: '{...}', className: 'right-[10%] bottom-[20%] text-7xl md:text-9xl -rotate-6' },
  { text: '++', className: 'left-[46%] top-[12%] text-5xl md:text-7xl rotate-12' },
  { text: '==', className: 'right-[38%] bottom-[8%] text-5xl md:text-7xl -rotate-3' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none">
        {CODE_SYMBOLS.map(({ text, className }) => (
          <span
            key={text}
            className={`absolute font-mono font-bold text-zinc-800/30 ${className}`}
          >
            {text}
          </span>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950" />
      </div>

      <div className="w-full">
        <p className="mb-4 font-mono text-sm text-zinc-500 md:text-base">
          Olá, eu sou
        </p>

        <h1
          id="hero-title"
          className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tighter text-zinc-100 md:text-8xl lg:text-9xl"
        >
          Raphael Ferraz
        </h1>

        <p className="mt-6 text-xl text-zinc-400 md:text-2xl">
          Estudante de Engenharia de Software · Desenvolvedor Backend com Python e Django
        </p>

        <a
          href="#projects"
          className="group mt-12 inline-flex items-center gap-3 border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-widest text-zinc-100 transition-colors duration-300 hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Ver projetos
          <ArrowDown
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}
