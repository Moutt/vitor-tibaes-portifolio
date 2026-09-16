import { Calendar } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/portfolio'
import CareerChart from '@/components/CareerChart'

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Trajetória
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Experiência
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}Profissional
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Minha jornada na área de dados, construindo soluções analíticas em grandes empresas
            </p>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  exp.current
                    ? 'border-primary/50 shadow-lg shadow-primary/10'
                    : 'border-border/50'
                }`}
              >
                {exp.current && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
                )}

                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company logo */}
                      <div
                        className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center ${
                          exp.current ? 'ring-2 ring-primary/40' : 'ring-1 ring-border/50'
                        } bg-white`}
                      >
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <span className="text-xl font-bold text-muted-foreground">
                            {exp.company[0]}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-muted-foreground">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <Badge className="bg-accent text-accent-foreground">Atual</Badge>
                      )}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career trajectory chart */}
          <CareerChart />

        </div>
      </div>
    </section>
  )
}
