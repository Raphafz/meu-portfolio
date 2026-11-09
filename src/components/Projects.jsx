const PROJECTS = [
  {
    id: 1,
    title: 'AthleTech — Sistema de Gestão para Academias',
    description:
      'Aplicação web para organizar a gestão de academias em um só lugar, com cadastros e operações CRUD, lógica de negócio estruturada em Django e interface interativa com JavaScript.',
    technologies: ['Python', 'Django', 'JavaScript', 'CRUD'],
    href: 'https://github.com/Raphafz/Projeto-AthleTech',
  },
  {
    id: 2,
    title: 'FinControl — Gestão Financeira',
    description:
      'Desenvolvido durante um minicurso na faculdade. Plataforma web que resolve o meio-termo entre planilhas simples demais e ERPs complexos: consolida contas e cartões em um painel, automatiza despesas recorrentes e projeta o fluxo de caixa dos próximos meses.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Docker'],
    href: 'https://github.com/Raphafz/FinControl',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-24"
    >
      <h2
        id="projects-title"
        className="mb-12 font-display text-4xl font-black uppercase tracking-tighter text-zinc-100 md:text-6xl"
      >
        Projetos
      </h2>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map(({ id, title, description, technologies, href }) => (
          <li key={id} className="list-none">
            <article className="relative flex h-full overflow-hidden border border-zinc-800/50 bg-zinc-900/40 p-8 transition-colors duration-300 hover:border-zinc-500">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-8xl font-black leading-none text-zinc-800/20 md:text-9xl"
              >
                {String(id).padStart(2, '0')}
              </span>

              <div className="relative z-10 flex w-full flex-col">
                <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-100">
                  {title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{description}</p>

                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-fit font-mono text-sm text-zinc-300 underline-offset-4 transition-colors duration-300 hover:text-zinc-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100"
                  >
                    Ver no GitHub →
                  </a>
                )}

                <ul
                  aria-label={`Tecnologias usadas em ${title}`}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-zinc-800 px-3 py-1 font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
