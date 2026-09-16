import { useState, useEffect } from 'react'
import { Mail, ChevronDown } from 'lucide-react'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { Button } from '@/components/ui/button'

// Each line: plain text for typing + colored JSX for after it's fully typed
const JSON_LINES = [
  {
    plain: '"cargo": "Analista de Dados",',
    node: (
      <>
        <span className="text-primary-foreground/30">"cargo": </span>
        <span className="text-primary-foreground/80">"Analista de Dados"</span>
        <span className="text-primary-foreground/25">,</span>
      </>
    ),
  },
  {
    plain: '"empresa": "Itaú Unibanco",',
    node: (
      <>
        <span className="text-primary-foreground/30">"empresa": </span>
        <span className="text-primary font-medium">"Itaú Unibanco"</span>
        <span className="text-primary-foreground/25">,</span>
      </>
    ),
  },
  {
    plain: '"stack": ["AWS", "Python", "SQL", "Excel"],',
    node: (
      <>
        <span className="text-primary-foreground/30">"stack": </span>
        <span className="text-primary-foreground/25">{'['}</span>
        <span className="text-accent font-medium">"AWS"</span>
        <span className="text-primary-foreground/25">, </span>
        <span className="text-accent font-medium">"Python"</span>
        <span className="text-primary-foreground/25">, </span>
        <span className="text-accent font-medium">"SQL"</span>
        <span className="text-primary-foreground/25">, </span>
        <span className="text-accent font-medium">"Excel"</span>
        <span className="text-primary-foreground/25">{']'}</span>
        <span className="text-primary-foreground/25">,</span>
      </>
    ),
  },
  {
    plain: '"foco": "Dados → Insights estratégicos"',
    node: (
      <>
        <span className="text-primary-foreground/30">"foco": </span>
        <span className="text-primary-foreground/80">"Dados → Insights estratégicos"</span>
      </>
    ),
  },
]

const TYPING_SPEED = 32  // ms per character
const LINE_PAUSE   = 120 // ms pause between lines

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [showOpen,  setShowOpen]  = useState(false)
  const [lineIdx,   setLineIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [showClose, setShowClose] = useState(false)

  // Step 1 — show opening brace after a short delay
  useEffect(() => {
    const t = setTimeout(() => setShowOpen(true), 400)
    return () => clearTimeout(t)
  }, [])

  // Step 2 — type each line character by character
  useEffect(() => {
    if (!showOpen) return

    if (lineIdx >= JSON_LINES.length) {
      // All lines done → show closing brace
      const t = setTimeout(() => setShowClose(true), LINE_PAUSE)
      return () => clearTimeout(t)
    }

    const lineLen = JSON_LINES[lineIdx].plain.length

    if (charIdx < lineLen) {
      const t = setTimeout(() => setCharIdx(c => c + 1), TYPING_SPEED)
      return () => clearTimeout(t)
    } else {
      // Line complete → move to next
      const t = setTimeout(() => {
        setLineIdx(l => l + 1)
        setCharIdx(0)
      }, LINE_PAUSE)
      return () => clearTimeout(t)
    }
  }, [showOpen, lineIdx, charIdx])

  const isTypingDone = showClose

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

          {/* JSON typewriter */}
          <div className="inline-block text-left mb-10 font-mono text-sm md:text-base">

            {/* Opening brace */}
            {showOpen && (
              <div className="text-primary-foreground/25 mb-1">{'{'}</div>
            )}

            {/* Lines */}
            <div className="pl-5 space-y-1">
              {JSON_LINES.map((line, i) => {
                if (i < lineIdx) {
                  // Fully typed — render with colors
                  return <div key={i}>{line.node}</div>
                }
                if (i === lineIdx && !isTypingDone) {
                  // Currently typing — plain text + blinking cursor
                  return (
                    <div key={i} className="text-primary-foreground/65">
                      {line.plain.slice(0, charIdx)}
                      <span className="inline-block w-[2px] h-[1em] bg-primary/70 ml-px align-middle animate-pulse" />
                    </div>
                  )
                }
                return null // hidden
              })}
            </div>

            {/* Closing brace */}
            {showClose && (
              <div className="text-primary-foreground/25 mt-1">{'}'}</div>
            )}
          </div>

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
