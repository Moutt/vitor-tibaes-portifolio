import { useState } from 'react'
import { PinOff } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { skillCategories, dailyTools } from '@/data/portfolio'

const BAR_COLORS: Record<string, { gradient: string; dimmed: string; text: string; badge: string }> = {
  'from-orange-500 to-amber-500':  { gradient: 'from-orange-500 to-amber-500',  dimmed: 'bg-amber-500/20',   text: 'text-amber-400',   badge: 'border-amber-500/40 text-amber-300 bg-amber-500/10' },
  'from-blue-500 to-cyan-500':     { gradient: 'from-blue-500 to-cyan-500',     dimmed: 'bg-cyan-500/20',    text: 'text-cyan-400',    badge: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10' },
  'from-purple-500 to-pink-500':   { gradient: 'from-purple-500 to-pink-500',   dimmed: 'bg-pink-500/20',    text: 'text-pink-400',    badge: 'border-pink-500/40 text-pink-300 bg-pink-500/10' },
  'from-green-500 to-emerald-500': { gradient: 'from-green-500 to-emerald-500', dimmed: 'bg-emerald-500/20', text: 'text-emerald-400', badge: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
  'from-rose-500 to-red-500':      { gradient: 'from-rose-500 to-red-500',      dimmed: 'bg-rose-500/20',    text: 'text-rose-400',    badge: 'border-rose-500/40 text-rose-300 bg-rose-500/10' },
}

const Y_LABEL_W = 'w-44'
const maxSkills  = Math.max(...skillCategories.map(c => c.skills.length))
const X_TICKS    = Array.from({ length: maxSkills + 1 }, (_, i) => i)

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [pinnedIdx,  setPinnedIdx]  = useState<number | null>(null)

  // Hover takes priority for bar highlight; pinned stays visible underneath
  const highlightIdx = hoveredIdx ?? pinnedIdx

  const togglePin = (index: number) =>
    setPinnedIdx(prev => (prev === index ? null : index))

  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Competências
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Habilidades
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}Técnicas
              </span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Passe o mouse ou use os botões abaixo para ver as ferramentas de cada categoria
            </p>
          </div>

          {/* Chart */}
          <div>

            {/* Filter buttons — always visible above the chart */}
            <div className="flex flex-wrap gap-2 mb-6 pl-[calc(11rem+0.75rem)]">
              {skillCategories.map((category, index) => {
                const colors   = BAR_COLORS[category.color]
                const isPinned = pinnedIdx === index
                return (
                  <button
                    key={index}
                    onClick={() => togglePin(index)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                      isPinned
                        ? `bg-gradient-to-r ${colors.gradient} border-transparent text-white shadow-sm`
                        : 'border-border/50 text-muted-foreground hover:border-border hover:text-foreground bg-secondary/30'
                    }`}
                  >
                    {isPinned && <PinOff className="h-3 w-3" />}
                    {category.title}
                  </button>
                )
              })}
            </div>

            <div className="space-y-2">
              {skillCategories.map((category, index) => {
                const colors      = BAR_COLORS[category.color]
                const pct         = (category.skills.length / maxSkills) * 100
                const isHighlight = highlightIdx === index
                const isPinned    = pinnedIdx === index
                const isDimmed    = highlightIdx !== null && !isHighlight
                const showTools   = hoveredIdx === index || isPinned

                return (
                  <div key={index}>
                    {/* Row */}
                    <div
                      className="flex items-center gap-3 cursor-default group"
                      onMouseEnter={() => setHoveredIdx(index)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      {/* Y-axis label */}
                      <div className={`${Y_LABEL_W} shrink-0 text-right`}>
                        <span className={`text-xs font-medium transition-all duration-200 ${
                          isHighlight ? `${colors.text} font-semibold` :
                          isDimmed    ? 'text-muted-foreground/25' :
                                        'text-muted-foreground/70 group-hover:text-muted-foreground'
                        }`}>
                          {category.title}
                        </span>
                      </div>

                      {/* Bar track */}
                      <div className="flex-1 flex items-center gap-2 h-7">
                        <div className="relative flex-1 h-full flex items-center">
                          {/* Grid lines */}
                          {X_TICKS.slice(1).map((t) => (
                            <div
                              key={t}
                              className="absolute top-0 bottom-0 border-l border-border/20 pointer-events-none"
                              style={{ left: `${(t / maxSkills) * 100}%` }}
                            />
                          ))}
                          {/* Bar */}
                          <div
                            className={`h-5 rounded-sm transition-all duration-300 ${
                              isHighlight ? `bg-gradient-to-r ${colors.gradient} opacity-100` :
                              isDimmed    ? `${colors.dimmed} opacity-30` :
                                            `${colors.dimmed} group-hover:bg-gradient-to-r group-hover:${colors.gradient} group-hover:opacity-90`
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>

                        {/* Skill count */}
                        <span className={`text-xs tabular-nums font-mono w-4 shrink-0 transition-all duration-200 ${
                          isHighlight ? colors.text :
                          isDimmed    ? 'text-muted-foreground/15' :
                                        'text-muted-foreground/40 group-hover:text-muted-foreground/70'
                        }`}>
                          {category.skills.length}
                        </span>
                      </div>
                    </div>

                    {/* Tools — visible when hovered OR pinned */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      showTools ? 'max-h-24 opacity-100 mt-2 mb-1' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="flex flex-wrap gap-1.5 pl-[calc(11rem+0.75rem)]">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className={`text-xs ${colors.badge}`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* X-axis */}
            <div className="flex items-start mt-1">
              <div className={`${Y_LABEL_W} shrink-0 mr-3`} />
              <div className="flex-1 mr-14 relative h-5">
                <div className="absolute top-0 left-0 right-0 border-t border-border/50" />
                {X_TICKS.map((t) => (
                  <div
                    key={t}
                    className="absolute top-0 flex flex-col items-center"
                    style={{ left: `${(t / maxSkills) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="w-px h-1.5 bg-border/50" />
                    <span className="text-[10px] text-muted-foreground/40 mt-0.5 font-mono">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground/40 text-center mt-1 ml-44 font-mono">
              número de habilidades
            </p>
          </div>

          {/* Daily tools */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Principais ferramentas que utilizo diariamente
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {dailyTools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-foreground font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                  {tool}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
