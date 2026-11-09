const EXPERIENCES = [
  {
    id: 1,
    role: 'Estagiário Técnico — Suporte e Operação',
    company: 'EUVATAR',
    period: '2025',
    highlights: [
      'Manutenção de equipamentos e suporte técnico.',
      'Testes operacionais e identificação de falhas.',
      'Atendimento ao público em ambiente tecnológico.',
    ],
  },
  {
    id: 2,
    role: 'Técnico em Manutenção de Computadores',
    company: 'Freelancer',
    period: '2018 — Atual',
    highlights: [
      'Montagem, manutenção e upgrade de computadores.',
      'Diagnóstico de problemas de hardware e software.',
      'Suporte técnico ao cliente.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-24"
    >
      <h2
        id="experience-title"
        className="mb-12 font-display text-4xl font-black uppercase tracking-tighter text-zinc-100 md:text-6xl"
      >
        Experiência
      </h2>

      <ol className="ml-3 border-l border-zinc-800 md:ml-0">
        {EXPERIENCES.map(({ id, role, company, period, highlights }) => (
          <li key={id} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(0.375rem+0.5px)] top-2 h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950"
            />
            <h3 className="text-xl font-bold text-zinc-100">{role}</h3>
            <p className="font-medium text-zinc-400">{company}</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">{period}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400 marker:text-zinc-600">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
