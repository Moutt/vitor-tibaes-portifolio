import { useState } from 'react'

// ─── Timeline configuration ────────────────────────────────────────────────
// All positions in months from Nov 2024 (month 0)
// End: Sep 2026 (month 22)
const TOTAL_MONTHS = 22

// SVG layout constants
const VB_W   = 1000   // viewBox width
const VB_H   = 240    // viewBox height
const PAD_L  = 20     // left padding
const PAD_R  = 20     // right padding
const CHART_W = VB_W - PAD_L - PAD_R    // 960
const TRAJ_Y_START = 155   // y at month 0 (older, lower)
const TRAJ_Y_END   = 55    // y at month 22 (current, higher)
const AXIS_Y = 185          // horizontal axis line y
const LABEL_Y = 205         // year label y

function getX(month: number) {
  return PAD_L + (month / TOTAL_MONTHS) * CHART_W
}
function getY(month: number) {
  return TRAJ_Y_START - (month / TOTAL_MONTHS) * (TRAJ_Y_START - TRAJ_Y_END)
}

// ─── Event data ────────────────────────────────────────────────────────────
interface ChartEvent {
  id: string
  type: 'company' | 'achievement'
  month: number
  label: string
  logo?: string
  color: string
  bgColor: string
}

const EVENTS: ChartEvent[] = [
  // ── Prometeon ──
  {
    id: 'prometeon',
    type: 'company',
    month: 0,
    label: 'Prometeon Tyre Group',
    logo: '/vitor-tibaes-portifolio/logos/prometeon.png',
    color: '#6366f1',
    bgColor: '#1e1b4b',
  },
  { id: 'p1', type: 'achievement', month: 0.8, label: 'Dashboards em Power BI, Grafana e Dremio', color: '#818cf8', bgColor: '#312e81' },
  { id: 'p2', type: 'achievement', month: 1.8, label: 'Automação com Power Automate e Power Apps', color: '#818cf8', bgColor: '#312e81' },
  { id: 'p3', type: 'achievement', month: 2.8, label: 'Consultas em bancos SQL Server', color: '#818cf8', bgColor: '#312e81' },
  { id: 'p4', type: 'achievement', month: 3.8, label: 'Prototipação UI/UX no Figma', color: '#818cf8', bgColor: '#312e81' },
  { id: 'p5', type: 'achievement', month: 4.8, label: 'Análise e tratamento de dados multi-fonte', color: '#818cf8', bgColor: '#312e81' },

  // ── Itaú ──
  {
    id: 'itau',
    type: 'company',
    month: 6,
    label: 'Itaú Unibanco',
    logo: '/vitor-tibaes-portifolio/logos/itau.png',
    color: '#f97316',
    bgColor: '#431407',
  },
  { id: 'i1', type: 'achievement', month: 8,  label: 'Pipelines ETL com Python, SQL e AWS Glue / S3 / Athena', color: '#fb923c', bgColor: '#431407' },
  { id: 'i2', type: 'achievement', month: 11, label: 'Dashboards gerenciais no Amazon QuickSight', color: '#fb923c', bgColor: '#431407' },
  { id: 'i3', type: 'achievement', month: 14, label: 'Soluções analíticas alinhadas ao negócio', color: '#fb923c', bgColor: '#431407' },
  { id: 'i4', type: 'achievement', month: 17, label: 'Estruturação de Data Lake na AWS com governança', color: '#fb923c', bgColor: '#431407' },
  { id: 'i5', type: 'achievement', month: 20, label: 'Migração de dados SharePoint → AWS', color: '#fb923c', bgColor: '#431407' },
]

// Build polyline path through all events in chronological order
const allPoints = EVENTS.map(e => ({ x: getX(e.month), y: getY(e.month) }))
const polylinePoints = allPoints.map(p => `${p.x},${p.y}`).join(' ')

// Year grid lines (Jan of each year within range)
const YEAR_LINES = [
  { label: 'Nov 2024', month: 0 },
  { label: 'Jan 2025', month: 2 },
  { label: 'Jan 2026', month: 14 },
  { label: 'Atual',    month: 22 },
]

// ─── Component ─────────────────────────────────────────────────────────────
export default function CareerChart() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeEvent = EVENTS.find(e => e.id === activeId) ?? null

  return (
    <div className="mt-16">
      <p className="text-sm text-muted-foreground/60 text-center mb-4">
        Passe o mouse ou toque nos pontos para ver os detalhes de cada etapa
      </p>

      <div className="relative w-full" onMouseLeave={() => setActiveId(null)}>
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full"
          style={{ overflow: 'visible' }}
        >
          {/* ── Grid / year lines ── */}
          {YEAR_LINES.map(({ label, month }) => {
            const x = getX(month)
            return (
              <g key={label}>
                <line
                  x1={x} y1={30} x2={x} y2={AXIS_Y}
                  stroke="oklch(0.4 0 0 / 0.25)"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
                <text
                  x={x} y={LABEL_Y}
                  textAnchor="middle"
                  fontSize={11}
                  fill="oklch(0.6 0 0)"
                  fontFamily="monospace"
                >
                  {label}
                </text>
              </g>
            )
          })}

          {/* ── Horizontal axis ── */}
          <line
            x1={PAD_L} y1={AXIS_Y} x2={VB_W - PAD_R} y2={AXIS_Y}
            stroke="oklch(0.4 0 0 / 0.4)"
            strokeWidth={1.5}
          />

          {/* ── Trajectory line (shadow + main) ── */}
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="oklch(0.55 0.18 260 / 0.15)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="oklch(0.55 0.18 260 / 0.5)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ── Dots ── */}
          {EVENTS.map((ev) => {
            const cx = getX(ev.month)
            const cy = getY(ev.month)
            const isActive = activeId === ev.id
            const isCompany = ev.type === 'company'
            const r = isCompany ? 18 : 7

            return (
              <g
                key={ev.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActiveId(ev.id)}
                onClick={() => setActiveId(activeId === ev.id ? null : ev.id)}
              >
                {/* Glow ring when active */}
                {isActive && (
                  <circle
                    cx={cx} cy={cy}
                    r={r + 8}
                    fill={ev.color + '30'}
                    stroke={ev.color + '60'}
                    strokeWidth={1.5}
                  />
                )}

                {/* Vertical drop line to axis */}
                <line
                  x1={cx} y1={cy + r}
                  x2={cx} y2={AXIS_Y}
                  stroke={isActive ? ev.color : 'oklch(0.4 0 0 / 0.2)'}
                  strokeWidth={isActive ? 1.5 : 1}
                  strokeDasharray={isCompany ? '' : '3 3'}
                />

                {/* Background circle */}
                <circle
                  cx={cx} cy={cy} r={r}
                  fill={isActive ? ev.bgColor : 'oklch(0.15 0.005 260)'}
                  stroke={ev.color}
                  strokeWidth={isCompany ? 2.5 : 1.5}
                  opacity={isActive ? 1 : 0.8}
                />

                {/* Company logo image */}
                {isCompany && ev.logo && (
                  <>
                    <defs>
                      <clipPath id={`clip-${ev.id}`}>
                        <circle cx={cx} cy={cy} r={15} />
                      </clipPath>
                    </defs>
                    <image
                      href={ev.logo}
                      x={cx - 15} y={cy - 15}
                      width={30} height={30}
                      clipPath={`url(#clip-${ev.id})`}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </>
                )}

                {/* Achievement dot — inner fill */}
                {!isCompany && (
                  <circle
                    cx={cx} cy={cy} r={3}
                    fill={ev.color}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {/* ── Tooltip panel ── */}
        {activeEvent && (
          <div
            className="mt-3 mx-auto max-w-2xl px-4 py-3 rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm text-sm transition-all"
            style={{ borderColor: activeEvent.color + '50' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: activeEvent.color }}
              />
              <span className="text-foreground/90 font-medium">
                {activeEvent.type === 'company' ? activeEvent.label : activeEvent.label}
              </span>
              {activeEvent.type === 'company' && (
                <span className="ml-auto text-xs text-muted-foreground/50 font-mono">
                  {activeEvent.id === 'prometeon' ? 'Nov/2024 – Abr/2025' : 'Mai/2025 – Atual'}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

