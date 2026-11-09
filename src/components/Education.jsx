const EDUCATION = [
  {
    id: 1,
    degree: 'Engenharia de Software',
    institution: 'Univassouras',
    period: 'Cursando — 3º período',
  },
  {
    id: 2,
    degree: 'Técnico em Informática',
    institution: 'Univassouras',
    period: 'Concluído',
  },
  {
    id: 3,
    degree: 'Cursos complementares',
    institution: 'CS50 Harvard · Python · JavaScript · Hardware · Especialista em IA · Pacote Office',
    period: '',
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-24"
    >
      <h2
        id="education-title"
        className="mb-12 font-display text-4xl font-black uppercase tracking-tighter text-zinc-100 md:text-6xl"
      >
        Formação
      </h2>

      <ol className="ml-3 border-l border-zinc-800 md:ml-0">
        {EDUCATION.map(({ id, degree, institution, period }) => (
          <li key={id} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(0.375rem+0.5px)] top-2 h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950"
            />
            <h3 className="text-xl font-bold text-zinc-100">{degree}</h3>
            <p className="font-medium text-zinc-400">{institution}</p>
            {period && <p className="mt-1 font-mono text-xs text-zinc-500">{period}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
