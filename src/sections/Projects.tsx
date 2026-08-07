import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import {  ChevronRight, Zap, TrendingUp, Clock, Users,Layers } from 'lucide-react'

const projects = [
  {
    title: 'LLM-Powered Document Intelligence Pipeline',
    company: 'Turing',
    problem: 'Manual document processing was slow and error-prone, with critical data trapped in unstructured formats across 10,000+ documents monthly.',
    solution: 'Built a production RAG system using FastAPI, OpenAI embeddings, and Pinecone/Qdrant vector databases with semantic chunking and embedding optimisation.',
    contribution: 'Architected the end-to-end pipeline, implemented semantic chunking strategies, tuned vector indices, and deployed with zero-downtime rolling updates.',
    technologies: ['FastAPI', 'OpenAI', 'LangChain', 'Pinecone', 'Qdrant', 'Redis', 'Celery', 'Docker', 'Kubernetes'],
    outcomes: [
      { label: 'Accuracy', value: '94%', icon: TrendingUp },
      { label: 'Documents/Month', value: '10,000+', icon: Users },
      { label: 'Latency Reduction', value: '62%', icon: Clock },
    ]
  },
  {
    title: 'Event-Driven Payment Orchestration Engine',
    company: 'EgolePay',
    problem: 'Monolithic payment processing caused bottlenecks, poor fault tolerance, and 24-hour settlement delays for millions of daily transactions.',
    solution: 'Architected event-driven microservices with RabbitMQ, .NET Core, and PostgreSQL — decoupling payment processing, reconciliation, and notification services.',
    contribution: 'Designed the event-driven architecture, implemented idempotent APIs with compensating transactions, and built automated reconciliation pipelines.',
    technologies: ['.NET Core', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Kubernetes (EKS)', 'AWS', 'Dynatrace'],
    outcomes: [
      { label: 'TPS Peak', value: '500+', icon: Zap },
      { label: 'Fault Tolerance', value: '40%', icon: TrendingUp },
      { label: 'Settlement', value: 'Near Real-Time', icon: Clock },
    ]
  },
  {
    title: 'Real-Time KYC Integration Platform',
    company: 'Premium Trust Bank',
    problem: 'Manual customer verification took hours, creating friction and drop-off during onboarding for 200,000+ customers.',
    solution: 'Built high-availability integration layer connecting core banking to multiple KYC/AML providers with circuit breakers, caching, and real-time webhooks.',
    contribution: 'Engineered the integration layer, implemented webhook processing with retry logic, designed caching strategies, and ensured PCI DSS compliance.',
    technologies: ['.NET Core', 'Python', 'Azure AKS', 'Redis', 'SQL Server', 'JWT', 'OAuth2'],
    outcomes: [
      { label: 'Onboarding Reduction', value: '45%', icon: Clock },
      { label: 'Uptime', value: '99.99%', icon: TrendingUp },
    ]
  },
  {
    title: 'Monolith to Microservices Migration',
    company: 'EgolePay',
    problem: 'Legacy payment gateway was difficult to maintain, with 2-week release cycles and rising infrastructure costs.',
    solution: 'Led migration to Kubernetes (EKS) with API gateway, service mesh, and distributed tracing — implementing HPA right-sizing and workload optimisation.',
    contribution: 'Architected the microservices migration strategy, implemented Kubernetes deployment pipelines, and optimised infrastructure costs.',
    technologies: ['Kubernetes (EKS)', 'AWS', 'Docker', 'API Gateway', 'Service Mesh', 'GitHub Actions'],
    outcomes: [
      { label: 'Release Lead Time', value: '3 Days', icon: Clock },
      { label: 'Cost Reduction', value: '25%', icon: TrendingUp },
    ]
  },
  {
    title: 'Premium Mobile — Digital Banking Application',
    company: 'Premium Trust Bank',
    problem: 'Customers needed a modern mobile banking experience with advanced financial products beyond basic transactions.',
    solution: 'Full-stack engineer on Nigeria\'s Premium Trust Bank mobile banking platform — delivering virtual card lifecycle management, investment booking workflows, and maker-checker approval systems.',
    contribution: 'Engineered the investment booking workflows, implemented maker-checker approval system, and built admin notification pipelines.',
    technologies: ['.NET Core', 'React.js', 'TypeScript', 'Azure AKS', 'SQL Server', 'Redis'],
    outcomes: [
      { label: 'Customers', value: '200,000+', icon: Users },
      { label: 'Products', value: 'Multiple', icon: Zap },
    ]
  },
  {
    title: 'Blayz Financial Ecosystem',
    company: 'Blayz',
    problem: 'Required a multi-service financial ecosystem spanning wallets, savings, investments, marketplace, and ride-hailing.',
    solution: 'Lead backend engineer on .NET 10 microservices architecture with MongoDB, SQL Server, and Azure — serving multiple financial services.',
    contribution: 'Architected the microservices, designed data models for multi-tenant financial services, and implemented secure API gateways.',
    technologies: ['.NET 10', 'MongoDB', 'SQL Server', 'Azure', 'Docker', 'Kubernetes'],
    outcomes: [
      { label: 'Services', value: '5+', icon: Layers },
      { label: 'Architecture', value: 'Microservices', icon: TrendingUp },
    ]
  }
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="section-title">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Delivering measurable impact through distributed systems, AI integration, and cloud-native architecture.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div 
                className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                  expanded === index 
                    ? 'border-gold/30 bg-dark-card' 
                    : 'border-dark-border bg-dark-card/50 hover:border-dark-border/80 hover:bg-dark-card'
                }`}
              >
                <button
                  className="w-full text-left p-5 md:p-6"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded">
                          {project.company}
                        </span>
                      </div>
                      <p className="text-sm text-muted-gray mt-1 line-clamp-2">{project.problem}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-muted-gray flex-shrink-0 transition-transform duration-300 ${
                      expanded === index ? 'rotate-90 text-gold' : ''
                    }`} />
                  </div>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${
                  expanded === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
                    <div>
                      <p className="text-sm text-white/80 font-medium mb-1">Solution</p>
                      <p className="text-sm text-muted-gray leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 font-medium mb-1">My Contribution</p>
                      <p className="text-sm text-muted-gray leading-relaxed">{project.contribution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 font-medium mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-muted-gray bg-dark border border-dark-border rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.outcomes && (
                      <div className="pt-2 flex flex-wrap gap-4">
                        {project.outcomes.map((outcome, i) => {
                          const Icon = outcome.icon
                          return (
                            <div key={i} className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-gold" />
                              <span className="text-sm text-white/90">{outcome.value}</span>
                              <span className="text-xs text-muted-gray">{outcome.label}</span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}