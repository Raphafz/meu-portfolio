import Header from './components/layout/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-200 antialiased selection:bg-zinc-100 selection:text-zinc-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <main id="main" className="flex flex-col gap-8">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}
