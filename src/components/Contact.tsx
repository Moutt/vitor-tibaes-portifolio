import { Card, CardContent } from '@/components/ui/card'
import { contactInfo } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary-foreground">
              Vamos
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}Conversar?
              </span>
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              Estou disponível para oportunidades e sempre aberto para discutir novos projetos e
              ideias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-primary-foreground/5 border-primary/20 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all"
              >
                <CardContent className="p-6">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/50">{item.label}</p>
                        <p className="text-primary-foreground font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/20">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/50">{item.label}</p>
                        <p className="text-primary-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
