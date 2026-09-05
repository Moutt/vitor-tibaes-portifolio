import { Cloud, Database, BarChart3, Code, Mail, Phone, MapPin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'

export interface Experience {
  company: string
  role: string
  period: string
  current: boolean
  description: string[]
  technologies: string[]
}

export interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  status: string
  highlight?: string
  current: boolean
}

export interface ContactInfo {
  icon: LucideIcon | React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string | null
}

export interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

export const pillars: Pillar[] = [
  { icon: Cloud, title: 'Cloud AWS', description: 'S3, Glue, Athena, QuickSight' },
  { icon: Database, title: 'ETL & Data Lake', description: 'Pipelines de dados escaláveis' },
  { icon: BarChart3, title: 'Business Intelligence', description: 'Power BI, Grafana, Dashboards' },
  { icon: Code, title: 'Programação', description: 'Python, SQL, Automação' },
]

export const experiences: Experience[] = [
  {
    company: 'Itaú Unibanco',
    role: 'Estágio em Análise de Dados',
    period: '05/2025 – Atual',
    current: true,
    description: [
      'Desenvolvimento de pipelines de dados e processos ETL utilizando Python, SQL e AWS (Glue, S3, Athena)',
      'Criação de dashboards gerenciais no Amazon QuickSight para acompanhamento de KPIs e OKRs',
      'Atuação próxima ao negócio, traduzindo demandas estratégicas em soluções analíticas',
      'Estruturação e gestão de Data Lake na AWS, incluindo controle de acessos e governança de dados',
      'Liderança na migração de dados do SharePoint para AWS, garantindo escalabilidade e democratização do acesso aos dados',
    ],
    technologies: ['Python', 'SQL', 'AWS Glue', 'S3', 'Athena', 'QuickSight', 'ETL', 'Data Lake'],
  },
  {
    company: 'Prometeon',
    role: 'Estágio Analista de Dados',
    period: '11/2024 – 04/2025',
    current: false,
    description: [
      'Desenvolvimento de dashboards interativos utilizando Power BI, Grafana e Dremio',
      'Automação de fluxos de trabalho com Power Automate e Power Apps para ganho de eficiência operacional',
      'Gerenciamento e consultas em bancos de dados utilizando SQL Server',
      'Criação e prototipação de soluções de UI/UX no Figma',
      'Análise e tratamento de dados provenientes de múltiplas fontes, incluindo Excel e SharePoint',
    ],
    technologies: ['Power BI', 'Grafana', 'Power Automate', 'Power Apps', 'SQL Server', 'Figma', 'Dremio'],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & Data Infrastructure',
    color: 'from-orange-500 to-amber-500',
    skills: ['AWS S3', 'AWS Glue', 'Amazon Athena', 'QuickSight', 'Data Lake', 'ETL'],
  },
  {
    title: 'Programação & Banco de Dados',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'SQL', 'SQL Server', 'Pandas', 'NumPy'],
  },
  {
    title: 'Business Intelligence',
    color: 'from-purple-500 to-pink-500',
    skills: ['Power BI', 'Grafana', 'Dremio', 'Dashboards', 'KPIs', 'OKRs'],
  },
  {
    title: 'Automação & Ferramentas',
    color: 'from-green-500 to-emerald-500',
    skills: ['Power Automate', 'Power Apps', 'SharePoint', 'Excel Avançado', 'Figma'],
  },
  {
    title: 'Soft Skills',
    color: 'from-rose-500 to-red-500',
    skills: ['Pensamento Analítico', 'Resolução de Problemas', 'Comunicação', 'Trabalho em Equipe', 'Gestão de Dados'],
  },
]

export const education: Education[] = [
  {
    institution: 'Universidade Presbiteriana Mackenzie',
    degree: 'Bacharelado em Ciência da Computação',
    period: 'Previsão: 02/2026',
    status: 'Em andamento',
    highlight: 'Bolsista ProUni',
    current: true,
  },
  {
    institution: 'ETEC Júlio de Mesquita',
    degree: 'Técnico em Automação Industrial',
    period: 'Conclusão: 12/2021',
    status: 'Concluído',
    current: false,
  },
]

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: 'Email', value: 'vitortibaes@gmail.com', href: 'mailto:vitortibaes@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+55 (11) 97258-2494', href: 'https://wa.me/5511972582494' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/vitor-tibães', href: 'https://linkedin.com/in/vitor-tib%C3%A3es-a8a2a2235/' },
  { icon: MapPin, label: 'Localização', value: 'São Paulo, SP - Brasil', href: null },
]

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
]

export const dailyTools = ['AWS', 'Python', 'SQL', 'Power BI', 'QuickSight']
