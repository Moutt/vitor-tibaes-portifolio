import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import {
  X, ChevronLeft, ChevronRight, Trophy, Users, Cpu, Volleyball, Bike,
  Monitor, Files, BarChart3, ArrowRight,
} from 'lucide-react'

const BASE = '/vitor-tibaes-portifolio'
const ORANGE = '#f7941d'

/* ---------- building blocks ---------- */

function WavePanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative h-full ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f7941d" />
            <stop offset="55%" stopColor="#fb9f1c" />
            <stop offset="100%" stopColor="#ffc247" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 H78 C96,18 62,34 74,52 C86,70 58,86 70,100 H0 Z"
          fill="url(#wave-grad)"
        />
      </svg>
      <div className="relative h-full flex items-center justify-center px-8 pr-[22%]">{children}</div>
    </div>
  )
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-white font-bold text-3xl md:text-5xl leading-tight text-center drop-shadow-sm">
      {children}
    </h2>
  )
}

function SplitSlide({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[40%_60%] w-full h-full bg-[#f1f2f4] text-[#f7941d]">
      <WavePanel>
        <Title>{title}</Title>
      </WavePanel>
      <div className="relative flex items-center justify-center p-6 md:p-10">{children}</div>
    </div>
  )
}

function Img({ src, alt, className, fallback }: { src: string; alt: string; className?: string; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <>{fallback}</>
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}

const iconCls = 'w-10 h-10 md:w-14 md:h-14'
const shadowCard = { boxShadow: `6px 6px 0 ${ORANGE}` }

/* ---------- slides ---------- */

function SlideAbout1() {
  return (
    <SplitSlide title={<>SOBRE<br />MIM</>}>
      <div className="flex flex-col items-center gap-8">
        <div
          className="w-44 h-44 md:w-64 md:h-64 bg-gray-300 overflow-hidden"
          style={{ clipPath: 'polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%)' }}
        >
          <Img
            src={`${BASE}/presentation/foto.jpg`}
            alt="Vitor Tibães"
            className="w-full h-full object-cover"
            fallback={
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white bg-gradient-to-br from-orange-400 to-amber-300">
                VT
              </div>
            }
          />
        </div>
        <p className="text-[#555] text-center text-sm md:text-lg max-w-md">
          Vitor Tibães Santos · Analista de Dados · Itaú Unibanco
        </p>
      </div>
    </SplitSlide>
  )
}

function SlideAbout2() {
  return (
    <SplitSlide title={<>Sobre<br />mim</>}>
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-xl md:text-3xl mb-2">Pontos fortes:</h3>
            <ul className="list-disc pl-6 text-lg md:text-2xl font-semibold space-y-1">
              <li>Curioso</li>
              <li>Proativo</li>
              <li>Resiliente</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-xl mb-2">Pontos em desenvolvimento:</h3>
            <ul className="list-disc pl-6 text-base md:text-lg space-y-1">
              <li>Delegar tarefas</li>
              <li>Visibilidade interna</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Volleyball className={iconCls} />
          <Bike className={iconCls} />
        </div>
      </div>
    </SplitSlide>
  )
}

function SlideGraduation() {
  return (
    <SplitSlide title="Graduação">
      <div className="grid grid-cols-2 gap-6 md:gap-10 items-center w-full max-w-3xl">
        <div className="bg-white rounded-lg p-3 flex items-center justify-center" style={shadowCard}>
          <img src={`${BASE}/presentation/prouni.png`} alt="ProUni" className="w-full max-h-24 md:max-h-32 object-contain" />
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center">
          <Trophy className="w-9 h-9 md:w-12 md:h-12" />
          <Users className="w-9 h-9 md:w-12 md:h-12" />
          <Volleyball className="w-9 h-9 md:w-12 md:h-12" />
          <Cpu className="w-9 h-9 md:w-12 md:h-12" />
        </div>
        <div className="flex justify-center">
          <svg viewBox="0 0 120 90" className="w-24 md:w-36" fill="none" stroke={ORANGE} strokeWidth="5" strokeLinecap="round">
            <path d="M15 5 C10 55 50 80 100 62" />
            <path d="M82 50 L102 62 L80 76" />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src={`${BASE}/presentation/mack_logo.png`} alt="Mackenzie" className="w-24 h-24 md:w-36 md:h-36 object-contain rounded-3xl" />
        </div>
      </div>
    </SplitSlide>
  )
}

function SlideCareer() {
  return (
    <SplitSlide title={<>Começo de<br />carreira<br />profissional</>}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 items-center w-full max-w-3xl">
        <div className="bg-[#e8eefb] rounded-lg p-5 flex justify-center" style={shadowCard}>
          <Monitor className="w-16 h-16 md:w-24 md:h-24 text-[#3b6fd4]" />
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold">dev full-stack</div>
          <Files className="w-12 h-12 md:w-16 md:h-16 mx-auto mt-3" />
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold mb-3">analista de dados</div>
          <div className="flex justify-center gap-6">
            <BarChart3 className="w-12 h-12 md:w-16 md:h-16" />
            <div className="flex items-end gap-1">
              <span className="w-3 h-8 md:h-12 bg-[#f2c811] rounded-sm" />
              <span className="w-3 h-12 md:h-16 bg-[#e8a500] rounded-sm" />
              <span className="w-3 h-10 md:h-14 bg-[#f2c811] rounded-sm" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3" style={shadowCard}>
          <svg viewBox="0 0 200 110" className="w-full">
            {/* donut */}
            <circle cx="40" cy="35" r="20" fill="none" stroke="#e5e7eb" strokeWidth="10" />
            <circle cx="40" cy="35" r="20" fill="none" stroke="#f7941d" strokeWidth="10" strokeDasharray="75 126" transform="rotate(-90 40 35)" />
            <circle cx="40" cy="35" r="20" fill="none" stroke="#3b82f6" strokeWidth="10" strokeDasharray="30 126" strokeDashoffset="-75" transform="rotate(-90 40 35)" />
            {/* bars */}
            {[30, 50, 38, 62, 48, 74].map((h, i) => (
              <rect key={i} x={85 + i * 18} y={70 - h} width="11" height={h} rx="2" fill={i % 2 ? '#fbbf24' : '#f7941d'} />
            ))}
            <line x1="80" y1="70" x2="195" y2="70" stroke="#9ca3af" strokeWidth="1" />
            {/* trend line */}
            <polyline points="85,60 103,45 121,52 139,30 157,38 175,14" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* table rows */}
            {[82, 92, 102].map((y) => (
              <g key={y}>
                <rect x="10" y={y} width="50" height="5" rx="2" fill="#e5e7eb" />
                <rect x="70" y={y} width="30" height="5" rx="2" fill="#fcd9a8" />
                <rect x="110" y={y} width="80" height="5" rx="2" fill="#e5e7eb" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </SplitSlide>
  )
}

function Blob({ className }: { className: string }) {
  return (
    <div
      className={`absolute bg-gradient-to-br from-[#f7941d] to-[#ffc247] ${className}`}
      style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' }}
    />
  )
}

function SlideDream() {
  const P = `${BASE}/presentation`
  const certs = [
    'generative_ai',
    'business_analytics',
    'dea_foundation',
    'fundamentos_dados',
    'lean',
  ]
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex flex-col items-center justify-center gap-3 md:gap-5 p-4">
      <Blob className="-top-10 left-0 w-56 h-36" />
      <Blob className="-bottom-10 -right-6 w-72 h-40" />

      <h2 className="relative text-3xl md:text-5xl font-extrabold text-[#ff6200] text-center leading-tight tracking-wide">
        UM GRANDE<br />SONHO
      </h2>
      <img src={`${BASE}/logos/itau.png`} alt="Itaú" className="relative w-16 h-16 md:w-28 md:h-28 object-contain" />

      <div className="relative flex items-center justify-center gap-2 md:gap-4">
        {certs.map((c) => (
          <img key={c} src={`${P}/${c}_certificate.png`} alt={c} className="h-14 md:h-24 object-contain" />
        ))}
      </div>

      <img src={`${P}/aws.png`} alt="AWS" className="absolute top-4 right-4 md:top-8 md:right-10 w-24 md:w-40 object-contain" />
      <img src={`${P}/tools.png`} alt="Ferramentas" className="absolute bottom-4 left-4 md:bottom-8 md:left-10 w-24 md:w-40 object-contain" />
    </div>
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
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-3 md:p-8">
      <button
        onClick={onClose}
        aria-label="Sair da apresentação"
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative w-full max-w-5xl aspect-[2/1] min-h-[320px] rounded-lg overflow-hidden shadow-2xl">
        <Slide />
        {idx < last && (
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute bottom-3 right-3 text-[#ff6a1a] hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 48 40" className="w-10 h-9 md:w-14 md:h-12">
              <polygon points="0,0 24,20 0,40" fill="#f26d21" />
              <polygon points="22,6 44,20 22,34" fill="#fbc98b" />
            </svg>
          </button>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
        <button onClick={prev} disabled={idx === 0} aria-label="Anterior" className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-[#f7941d]' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
        <button onClick={next} disabled={idx === last} aria-label="Próximo" className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30">
          <ChevronRight className="h-5 w-5" />
        </button>
        <ArrowRight className="hidden" />
      </div>
    </div>,
    document.body,
  )
}
