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
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Contato', href: '#contato' },
]

export const dailyTools = ['AWS', 'Python', 'SQL', 'Power BI', 'QuickSight']

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string }

export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  media: ProjectMedia[]
  longDescription: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'google-trends-analytics',
    title: 'Análise de Tendências em Data Analytics',
    description:
      'Análise de tendências de busca no Google Trends sobre Data Analytics, com classificação automática, pipeline ETL e persistência em AWS S3.',
    thumbnail: '/vitor-tibaes-portifolio/projects/google-trends/dashboard.png',
    tags: ['Python', 'Pandas', 'SerpAPI', 'AWS S3', 'Google Trends'],
    longDescription:
      'Desenvolvi este projeto com o objetivo de analisar tendências de busca no Google Trends, explorando temas diversos a partir de dados. O foco desta análise foi Data Analytics — uma área em forte crescimento e cada vez mais estratégica para o mercado.\n\nA partir da coleta dos dados, identifiquei um alto interesse em tópicos como o Gartner Data & Analytics Summit, além de cursos e formações em Data Analytics — incluindo nomes que eu ainda não conhecia, como Harry Data Analytics. O projeto acabou sendo também uma ótima forma de expandir minha visão sobre o ecossistema de dados e oportunidades de aprendizado.\n\nStack e abordagem técnica:\n• Extração de dados via SerpAPI (Google Trends)\n• Tratamento e análise com Python e Pandas\n• Classificação automática das tendências (explosiva, em alta, estável)\n• Persistência dos dados em AWS S3, simulando uma camada bronze de um data lake\n• Criação de dashboard para visualização e análise dos insights\n\nPrincipais aprendizados:\n• Coleta e padronização de dados externos\n• Enriquecimento com metadados para rastreabilidade\n• Boas práticas de engenharia de dados e analytics\n• Uso de dados para apoiar decisões e direcionar aprendizado',
    media: [
      {
        type: 'image',
        src: '/vitor-tibaes-portifolio/projects/google-trends/dashboard.png',
        alt: 'Dashboard de Tendências Google Trends — Data Analytics',
      },
      {
        type: 'image',
        src: '/vitor-tibaes-portifolio/projects/google-trends/codigo.png',
        alt: 'Código Python — Extração e Classificação de Tendências',
      },
    ],
    link: 'https://github.com/Moutt/google_trends_searches',
  },
  {
    id: 'fpa-variance-analysis',
    title: 'FP&A Variance Analysis & Executive Intelligence',
    description:
      'Ecossistema analítico ponta a ponta para FP&A e Controle Orçamentário (OPEX): do pipeline ETL ao dashboard executivo com simulações de Monte Carlo.',
    thumbnail: '/vitor-tibaes-portifolio/projects/fpa-variance/dashboard.png',
    tags: ['Python', 'Pandas', 'DuckDB', 'AWS S3', 'FastAPI', 'Monte Carlo'],
    longDescription:
      'Projeto ponta a ponta focado em FP&A (Financial Planning & Analysis) e Controle Orçamentário (OPEX). O objetivo foi transformar dados financeiros brutos em um ecossistema analítico capaz de responder não apenas o que aconteceu, mas por que aconteceu e qual é o risco futuro.\n\nPrincipais destaques:\n• Curva ABC (Pareto): Identificação dos centros de custo críticos que concentram mais de 65% do OPEX corporativo (Operations, Finance e Marketing)\n• Detecção de Anomalias: Algoritmos baseados em Z-Score (|Z| ≥ 1.96) e IQR para mapear desvios fora da curva antes do fechamento do trimestre\n• Rigor Estatístico: Testes de Hipóteses (t pareado, Wilcoxon, ANOVA e Kruskal-Wallis) para validar se desvios eram aleatórios ou fruto de viés orçamentário estrutural\n• Simulação de Monte Carlo: 10.000 iterações estocásticas para quantificar a probabilidade de estouro do orçamento anual (~49%) e gerar intervalos de confiança a 95%\n\nArquitetura e Tecnologias:\n• Pipeline ETL modular em Python & Pandas\n• Integração de Data Lake na AWS S3 (camada Bronze)\n• Consultas analíticas in-memory de alta performance com DuckDB (SQL)\n• Dashboard Executivo web desenvolvido com FastAPI, Tailwind CSS e Apache ECharts\n\nO resultado é um diagnóstico com plano de ação em 5 pilares estratégicos: Rolling Forecast, ZBB e travas orçamentárias dinâmicas.',
    media: [
      {
        type: 'image',
        src: '/vitor-tibaes-portifolio/projects/fpa-variance/dashboard.png',
        alt: 'FP&A Intelligence — Dashboard Executivo',
      },
      {
        type: 'image',
        src: '/vitor-tibaes-portifolio/projects/fpa-variance/analise.png',
        alt: 'Matriz de Materialidade e Simulador What-If',
      },
      {
        type: 'video',
        src: '/vitor-tibaes-portifolio/projects/fpa-variance/demo.mp4',
        poster: '/vitor-tibaes-portifolio/projects/fpa-variance/dashboard.png',
      },
    ],
    link: 'https://github.com/Moutt/Financial-Planning-Analysis',
  },
]

