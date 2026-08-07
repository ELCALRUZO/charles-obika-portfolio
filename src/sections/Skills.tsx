import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { 
  Code2, Layout, Server, Database, Cloud, 
  Workflow, Brain, Shield, ChevronRight,
  GitBranch, Terminal, Layers
} from 'lucide-react'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'C#', 'JavaScript', 'TypeScript', 'Node.js', 'SQL', 'VB.NET']
  },
  {
    name: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Backend & Frameworks',
    icon: Server,
    skills: ['ASP.NET Core', 'FastAPI', 'Flask', 'Django', 'Express.js', 'NestJS']
  },
  {
    name: 'AI & LLMs',
    icon: Brain,
    skills: ['OpenAI / Azure OpenAI', 'LangChain', 'RAG', 'Embeddings', 'Vector DBs (Pinecone, Qdrant)', 'Cursor', 'Claude Code']
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Redis', 'Vector DBs']
  },
  {
    name: 'Cloud & Containers',
    icon: Cloud,
    skills: ['AWS (Lambda, ECS, S3, IAM, RDS)', 'Azure (App Services, Functions, AKS, OpenAI)', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    name: 'DevOps & CI/CD',
    icon: GitBranch,
    skills: ['GitHub Actions', 'Jenkins', 'Azure DevOps', 'Nginx', 'Dynatrace', 'OpenTelemetry', 'Serilog']
  },
  {
    name: 'Messaging & Streaming',
    icon: Layers,
    skills: ['RabbitMQ', 'Kafka', 'Celery', 'Async Workers', 'Background Tasks']
  },
  {
    name: 'APIs & Integration',
    icon: Terminal,
    skills: ['REST', 'OpenAPI/Swagger', 'Webhooks', 'OAuth2', 'Payment Gateways (NIBSS, Stripe, PayPal, Paystack)']
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    skills: ['PCI DSS', 'OWASP Top 10', 'JWT', 'OAuth2', 'Rate Limiting', 'KYC/AML', 'Data Encryption']
  },
  {
    name: 'Architecture',
    icon: Workflow,
    skills: ['Distributed Systems', 'Event-Driven Architecture', 'Microservices', 'DDD', 'Clean Architecture']
  }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="section-title">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Full-stack engineering across modern languages, frameworks, cloud platforms, and AI infrastructure.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            return (
              <AnimatedSection key={index} delay={index * 0.03}>
                <div 
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-gold/50 bg-dark-card' 
                      : 'border-dark-border bg-dark-card/50 hover:border-dark-border/80 hover:bg-dark-card'
                  }`}
                  onClick={() => setActiveCategory(isActive ? null : index)}
                  onMouseEnter={() => setActiveCategory(index)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isActive ? 'bg-gold/10 text-gold' : 'bg-dark text-muted-gray'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-white text-sm">{category.name}</h3>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-muted-gray transition-transform duration-300 ${
                      isActive ? 'rotate-90 text-gold' : ''
                    }`} />
                  </div>
                  <div className={`mt-3 flex flex-wrap gap-1.5 transition-all duration-300 ${
                    isActive ? 'opacity-100 max-h-40' : 'opacity-70 max-h-10 overflow-hidden'
                  }`}>
                    {category.skills.slice(0, isActive ? undefined : 3).map((skill) => (
                      <span 
                        key={skill}
                        className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
                          isActive ? 'bg-gold/10 text-gold' : 'bg-dark text-muted-gray'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {!isActive && category.skills.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-muted-gray">+{category.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}