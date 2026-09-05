import { Badge } from '@/components/ui/badge'
import { skillCategories, dailyTools } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stack completa para análise de dados, desde extração até visualização
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${category.color} mb-6`} />
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

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
