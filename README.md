# Portfólio — Raphael Ferraz

Portfólio pessoal de **Raphael Ferraz**, estudante de Engenharia de Software e desenvolvedor backend com Python e Django.

Single-page com estética minimalista, dark mode nativo, navegação com smooth scroll e header fixo com `backdrop-blur`.

## Seções

- **Hero:** apresentação com nome em destaque e fundo de símbolos de código.
- **Sobre:** biografia e badges de tecnologias.
- **Projetos:** grid de cards com índice gigante ao fundo.
- **Experiência:** timeline vertical.
- **Formação:** timeline com graduação, curso técnico e cursos complementares.
- **Footer:** links para GitHub e LinkedIn.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build     # build de produção em /dist
npm run preview   # pré-visualiza o build
```

## Estrutura

```
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
    ├── layout/Header.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    ├── Education.jsx
    └── Footer.jsx
```

## Acessibilidade

HTML5 semântico, `aria-label` nos controles, link "Pular para o conteúdo", foco visível e respeito a `prefers-reduced-motion`.

## Contato

- GitHub: [Raphafz](https://github.com/Raphafz)
- LinkedIn: [raphaelferrazz](https://linkedin.com/in/raphaelferrazz)
