import { useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { pillars } from '@/data/portfolio'

type SortDir = 'none' | 'asc' | 'desc'

function MiniTable({ pillar }: { pillar: typeof pillars[number] }) {
  const [sortDir, setSortDir] = useState<SortDir>('none')

  const sortedItems = [...pillar.items].sort((a, b) => {
    if (sortDir === 'asc')  return a.localeCompare(b)
    if (sortDir === 'desc') return b.localeCompare(a)
    return 0
  })

  const nextSort = (): SortDir => {
    if (sortDir === 'none') return 'asc'
    if (sortDir === 'asc')  return 'desc'
    return 'none'
  }

  const SortIcon = sortDir === 'asc' ? ArrowUp : sortDir === 'desc' ? ArrowDown : ArrowUpDown

  return (
    <div className="rounded-xl border border-border/50 overflow-hidden bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">

      {/* Table header */}
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 bg-primary/10 border-b border-border/50">
        <div className="flex items-center gap-2">
          <pillar.icon className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-sm font-semibold text-foreground">{pillar.title}</span>
        </div>
        <button
          onClick={() => setSortDir(nextSort())}
          title={`Ordenar ${sortDir === 'asc' ? 'decrescente' : sortDir === 'desc' ? 'padrão' : 'crescente'}`}
          className={`p-1 rounded transition-colors ${
            sortDir !== 'none'
              ? 'text-primary bg-primary/15'
              : 'text-muted-foreground/50 hover:text-primary hover:bg-primary/10'
          }`}
        >
          <SortIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Table with full grid lines */}
      <table className="w-full text-sm border-collapse">
        <tbody>
          {sortedItems.map((item, i) => (
            <tr key={item} className="border-b border-border/60 last:border-b-0 hover:bg-secondary/30 transition-colors">
              <td className="px-3 py-2 text-center text-xs text-muted-foreground/50 font-mono select-none border-r border-border/60 w-8">
                {i + 1}
              </td>
              <td className="px-3 py-2 text-foreground/80">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Transformando Dados em
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}Decisões
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Bio text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mais de 3 anos trabalhando com dados e tecnologia, ambientes Cloud (AWS) e ferramentas de Business Intelligence. Atuo em{' '}
                <span className="text-foreground font-medium">
                  extração, tratamento (ETL) e visualização de dados
                </span>{' '}
                utilizando Excel, Python, SQL, Amazon Athena, Glue, S3 e QuickSight.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Possuo perfil analítico, com foco na padronização de dados, criação de dashboards e
                suporte à tomada de decisão estratégica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu TCC é focado em{' '}
                <span className="text-foreground font-medium">Inteligência Artificial e Machine Learning</span>
                , explorando aplicações práticas dessas tecnologias para análise e tomada de decisão baseada em dados.
              </p>
            </div>

            {/* Mini tables grid */}
            <div>
              {/* Hint text */}
              <p className="text-xs text-muted-foreground/50 text-right mb-3 flex items-center justify-end gap-1.5">
                <span>Clique em</span>
                <span className="inline-flex items-center justify-center w-4 h-4 rounded border border-border/60 bg-secondary/50">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                  </svg>
                </span>
                <span>para ordenar os itens</span>
              </p>

              <div className="grid grid-cols-2 gap-4">
                {pillars.map((pillar, index) => (
                  <MiniTable key={index} pillar={pillar} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
