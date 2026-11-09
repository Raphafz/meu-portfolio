const TECHNOLOGIES = [
  'Python',
  'Django',
  'JavaScript',
  'Git',
  'GitHub',
  'Desenvolvimento Web',
  'Backend',
  'Lógica de Programação',
  'Redes',
  'Hardware',
  'IA',
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-24"
    >
      <h2
        id="about-title"
        className="mb-8 font-display text-4xl font-black uppercase tracking-tighter text-zinc-100 md:text-6xl"
      >
        Sobre
      </h2>

      <p className="max-w-3xl text-lg/relaxed text-zinc-300">
        Estudante de Engenharia de Software na Univassouras, com formação técnica em Informática e foco em
        desenvolvimento backend com Python e Django. Tenho experiência em desenvolvimento web, criação de
        aplicações e versionamento com Git e GitHub, além de vivência prática com suporte técnico,
        manutenção de computadores e resolução de problemas.
      </p>

      <ul aria-label="Tecnologias e ferramentas" className="mt-10 flex flex-wrap gap-3">
        {TECHNOLOGIES.map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
