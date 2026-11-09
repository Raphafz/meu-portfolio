import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const linkClass =
    'text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors duration-300 hover:text-zinc-100 focus-visible:text-zinc-100 focus-visible:outline-none';

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold uppercase tracking-tight text-zinc-100 transition-opacity duration-300 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100"
          aria-label="Raphael Ferraz — voltar ao início"
        >
          RAPHAEL FERRAZ<span className="text-zinc-500">.dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="-mr-2 rounded p-2 text-zinc-300 transition-colors duration-300 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 md:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <ul
          className="overflow-hidden"
          {...(!open && { inert: '' })}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="border-t border-zinc-800/60">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`${linkClass} block px-6 py-4`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
