import { Card, CardContent } from '@/components/ui/card'
import { pillars } from '@/data/portfolio'

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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Graduando em{' '}
                <span className="text-foreground font-medium">Ciência da Computação</span> na
                Universidade Presbiteriana Mackenzie (bolsista ProUni) e atualmente trabalhando com
                Análise de Dados no{' '}
                <span className="text-primary font-medium">Itaú Unibanco</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha experiência abrange ambientes Cloud (AWS) e ferramentas de Business
                Intelligence. Atuo em{' '}
                <span className="text-foreground font-medium">
                  extração, tratamento (ETL) e visualização de dados
                </span>{' '}
                utilizando Python, SQL, Amazon Athena, Glue, S3 e QuickSight.
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

            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <pillar.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
