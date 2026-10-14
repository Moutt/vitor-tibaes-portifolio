import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import {
  X, ChevronLeft, ChevronRight, Trophy, Users, Cpu, Volleyball, Bike,
  Monitor, Files, BarChart3, ArrowRight,
} from 'lucide-react'

const BASE = '/vitor-tibaes-portifolio'

/* ---------- building blocks ---------- */

function SlideFrame({ eyebrow, title, children }: { eyebrow: string; title?: ReactNode; children: ReactNode }) {
  return (
    <div className="relative w-full h-full bg-gradient-dark overflow-hidden flex flex-col p-5 md:p-10">
      {/* grid background, same as the Hero */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(oklch(0.55 0.18 260 / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.55 0.18 260 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <header className="relative mb-3 md:mb-6">
        <span className="text-primary font-medium text-[10px] md:text-sm uppercase tracking-wider">{eyebrow}</span>
        {title && <h2 className="text-2xl md:text-5xl font-bold mt-1 text-primary-foreground leading-tight">{title}</h2>}
      </header>

      <div className="relative flex-1 min-h-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

function Grad({ children }: { children: ReactNode }) {
  return (
    <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {children}
    </span>
  )
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-primary/20 bg-primary-foreground/5 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}

function IconChip({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="p-2.5 md:p-3.5 rounded-xl bg-primary/15 border border-primary/20 text-primary">{children}</div>
      {label && <span className="text-[9px] md:text-xs text-primary-foreground/50">{label}</span>}
    </div>
  )
}

function Img({ src, alt, className, fallback }: { src: string; alt: string; className?: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <>{fallback}</>
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}

const ico = 'w-5 h-5 md:w-7 md:h-7'

/* ---------- slides ---------- */

function SlideAbout1() {
  return (
    <SlideFrame eyebrow="Apresentação" title={<>Sobre <Grad>mim</Grad></>}>
      <div className="flex items-center gap-6 md:gap-12">
        <div className="p-1 bg-gradient-primary" style={{ clipPath: 'polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%)' }}>
          <div
            className="w-32 h-32 md:w-60 md:h-60 bg-card overflow-hidden"
            style={{ clipPath: 'polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%)' }}
          >
            <Img
              src={`${BASE}/presentation/foto.jpg`}
              alt="Vitor Tibães"
              className="w-full h-full object-cover"
              fallback={
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-primary-foreground bg-gradient-primary">
                  VT
                </div>
              }
            />
          </div>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-2xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Vitor Tibães<br /><Grad>Santos</Grad>
          </h3>
          <p className="font-mono text-[11px] md:text-base text-primary-foreground/60">
            <span className="text-primary-foreground/30">"cargo": </span>
            <span className="text-primary-foreground/80">"Analista de Dados"</span>
          </p>
          <p className="font-mono text-[11px] md:text-base text-primary-foreground/60">
            <span className="text-primary-foreground/30">"empresa": </span>
            <span className="text-primary font-medium">"Itaú Unibanco"</span>
          </p>
        </div>
      </div>
    </SlideFrame>
  )
}

function SlideAbout2() {
  return (
    <SlideFrame eyebrow="Perfil" title={<>Pontos <Grad>fortes</Grad></>}>
      <div className="w-full max-w-3xl space-y-4 md:space-y-8">
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <Card className="p-3 md:p-6 border-primary/40">
            <h3 className="font-semibold text-sm md:text-xl text-primary mb-2 md:mb-3">Pontos fortes</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {['Curioso', 'Proativo', 'Resiliente'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-primary-foreground text-sm md:text-xl font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />{t}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-3 md:p-6">
            <h3 className="font-semibold text-sm md:text-xl text-accent mb-2 md:mb-3">Em desenvolvimento</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {['Delegar tarefas', 'Visibilidade interna'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-primary-foreground/80 text-xs md:text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />{t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="flex items-center justify-center gap-6">
          <IconChip label="Vôlei"><Volleyball className={ico} /></IconChip>
          <IconChip label="Ciclismo"><Bike className={ico} /></IconChip>
        </div>
      </div>
    </SlideFrame>
  )
}

function SlideGraduation() {
  return (
    <SlideFrame eyebrow="Formação" title={<Grad>Graduação</Grad>}>
      <div className="w-full max-w-3xl space-y-4 md:space-y-8">
        <div className="flex items-center justify-between gap-3 md:gap-8">
          <div className="bg-white rounded-xl p-2 md:p-4 flex-1 max-w-[40%] flex items-center justify-center border border-primary/30">
            <img src={`${BASE}/presentation/prouni.png`} alt="ProUni" className="w-full max-h-14 md:max-h-28 object-contain" />
          </div>
          <ArrowRight className="w-8 h-8 md:w-14 md:h-14 text-primary flex-shrink-0" />
          <div className="p-0.5 rounded-3xl bg-gradient-primary">
            <img src={`${BASE}/presentation/mack_logo.png`} alt="Mackenzie" className="w-20 h-20 md:w-36 md:h-36 object-contain rounded-3xl bg-white" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <IconChip label="Hackathon"><Trophy className={ico} /></IconChip>
          <IconChip label="Networking"><Users className={ico} /></IconChip>
          <IconChip label="IA & ML"><Cpu className={ico} /></IconChip>
          <IconChip label="Vôlei"><Volleyball className={ico} /></IconChip>
        </div>
      </div>
    </SlideFrame>
  )
}

function SlideCareer() {
  return (
    <SlideFrame eyebrow="Trajetória" title={<>Começo de <Grad>carreira</Grad></>}>
      <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-3xl">
        <Card className="p-3 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4">
          <div className="p-3 md:p-5 rounded-xl bg-primary/15 border border-primary/20 text-primary">
            <Monitor className="w-10 h-10 md:w-16 md:h-16" />
          </div>
          <div className="text-base md:text-3xl font-bold text-primary-foreground">dev full-stack</div>
          <Files className="w-6 h-6 md:w-9 md:h-9 text-primary-foreground/40" />
        </Card>

        <Card className="p-3 md:p-6 flex flex-col items-center text-center gap-2 md:gap-4 border-primary/40">
          <svg viewBox="0 0 200 100" className="w-full max-h-24 md:max-h-36">
            <circle cx="35" cy="32" r="20" fill="none" className="stroke-primary-foreground/10" strokeWidth="10" />
            <circle cx="35" cy="32" r="20" fill="none" className="stroke-primary" strokeWidth="10" strokeDasharray="75 126" transform="rotate(-90 35 32)" />
            <circle cx="35" cy="32" r="20" fill="none" className="stroke-accent" strokeWidth="10" strokeDasharray="30 126" strokeDashoffset="-75" transform="rotate(-90 35 32)" />
            {[28, 46, 36, 58, 46, 70].map((h, i) => (
              <rect key={i} x={80 + i * 19} y={72 - h} width="12" height={h} rx="2" className={i % 2 ? 'fill-accent' : 'fill-primary'} />
            ))}
            <line x1="75" y1="72" x2="195" y2="72" className="stroke-primary-foreground/30" strokeWidth="1" />
            <polyline points="86,58 105,44 124,50 143,28 162,36 181,12" fill="none" className="stroke-primary-foreground/80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {[84, 92].map((y) => (
              <g key={y}>
                <rect x="10" y={y} width="55" height="4" rx="2" className="fill-primary-foreground/15" />
                <rect x="75" y={y} width="35" height="4" rx="2" className="fill-primary/40" />
                <rect x="120" y={y} width="75" height="4" rx="2" className="fill-primary-foreground/15" />
              </g>
            ))}
          </svg>
          <div className="flex items-center gap-2 text-base md:text-3xl font-bold text-primary-foreground">
            <BarChart3 className="w-5 h-5 md:w-8 md:h-8 text-primary" />
            analista de dados
          </div>
        </Card>
      </div>
    </SlideFrame>
  )
}

function SlideDream() {
  const P = `${BASE}/presentation`
  const certs = ['generative_ai', 'business_analytics', 'dea_foundation', 'fundamentos_dados', 'lean']
  return (
    <SlideFrame eyebrow="Objetivo" title={<Grad>Impactos reais</Grad>}>
      <div className="w-full max-w-4xl space-y-3 md:space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-white rounded-xl p-2 border border-primary/30">
            <img src={`${P}/tools.png`} alt="Ferramentas" className="h-10 md:h-20 object-contain" />
          </div>
          <img src={`${BASE}/logos/itau.png`} alt="Itaú" className="w-16 h-16 md:w-32 md:h-32 object-contain rounded-2xl" />
          <div className="bg-white rounded-xl p-2 border border-primary/30">
            <img src={`${P}/aws.png`} alt="AWS" className="h-10 md:h-20 object-contain" />
          </div>
        </div>
        <Card className="p-2 md:p-4 flex items-center justify-center gap-2 md:gap-5 flex-wrap">
          {certs.map((c) => (
            <img key={c} src={`${P}/${c}_certificate.png`} alt={c} className="h-12 md:h-24 object-contain" />
          ))}
        </Card>
      </div>
    </SlideFrame>
  )
}

const SLIDES = [SlideAbout1, SlideAbout2, SlideGraduation, SlideCareer, SlideDream]

/* ---------- main ---------- */

export default function Presentation({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  const last = SLIDES.length - 1
  const next = () => setIdx((i) => Math.min(i + 1, last))
  const prev = () => setIdx((i) => Math.max(i - 1, 0))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const Slide = SLIDES[idx]

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-3 md:p-8">
      <button
        onClick={onClose}
        aria-label="Sair da apresentação"
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground/70 hover:bg-primary/20 hover:text-primary-foreground transition-all"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="w-full max-w-5xl aspect-[16/9] min-h-[340px] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10">
        <Slide />
      </div>

      <div className="flex items-center gap-4 text-primary-foreground">
        <button onClick={prev} disabled={idx === 0} aria-label="Anterior" className="p-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 disabled:opacity-30 transition-all">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-gradient-primary' : 'w-2 bg-primary-foreground/30'}`}
            />
          ))}
        </div>
        <button onClick={next} disabled={idx === last} aria-label="Próximo" className="p-2 rounded-full bg-gradient-primary hover:opacity-90 disabled:opacity-30 transition-all">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>,
    document.body,
  )
}
