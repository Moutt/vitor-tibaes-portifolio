import { Mail, ChevronDown } from 'lucide-react'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(oklch(0.55 0.18 260 / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, oklch(0.55 0.18 260 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            Vitor Tibães
            <span className="block text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Santos
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/70 mb-6 font-light">
            Analista de Dados
          </p>

          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformando dados em insights estratégicos através de
            <span className="text-accent font-medium"> AWS</span>,
            <span className="text-primary font-medium"> Python</span> e
            <span className="text-primary font-medium"> SQL</span>. Atualmente no{' '}
            <span className="font-medium text-primary-foreground/80">Itaú Unibanco</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-8"
              onClick={() => scrollTo('#contato')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary-foreground hover:bg-primary/10"
              onClick={() => scrollTo('#experiencia')}
            >
              Ver Experiência
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/vitor-tib%C3%A3es-a8a2a2235/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground/70 hover:bg-primary/20 hover:text-primary-foreground transition-all"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:vitortibaes@gmail.com"
              className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground/70 hover:bg-primary/20 hover:text-primary-foreground transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollTo('#sobre')}
            className="p-2 rounded-full text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
