import { GraduationCap, Calendar, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { education } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="formacao" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Formação
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Educação
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}Acadêmica
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  edu.current ? 'border-primary/50' : 'border-border/50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div
                      className={`p-4 rounded-xl ${
                        edu.current ? 'bg-gradient-primary' : 'bg-muted'
                      } self-start`}
                    >
                      <GraduationCap
                        className={`h-8 w-8 ${
                          edu.current ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        {edu.highlight && (
                          <Badge className="bg-accent text-accent-foreground">
                            <Award className="h-3 w-3 mr-1" />
                            {edu.highlight}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-lg">{edu.degree}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <Badge variant={edu.current ? 'default' : 'secondary'}>
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
