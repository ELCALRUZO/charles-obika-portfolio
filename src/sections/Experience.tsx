import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { ChevronDown, MapPin, Calendar} from 'lucide-react'

const experiences = [
  {
    company: 'Premium Trust Bank',
    position: 'Senior Software Engineer - Full Stack & AI',
    location: 'Nigeria',
    period: 'March 2025 - Present',
    technologies: ['.NET Core 10', 'Python', 'React.js', 'TypeScript', 'PostgreSQL', 'SQL Server', 'Redis', 'Azure AKS', 'RabbitMQ', 'JWT', 'OAuth2', 'OpenTelemetry', 'Serilog'],
    achievements: [
      'Orchestrated a comprehensive performance optimisation initiative across payment and identity services, implementing Redis caching strategies and query optimisation techniques that reduced API p95 latency by 35%, directly enhancing the mobile experience for over 200,000 active banking customers',
      'Architected and deployed a resilient multi-region microservices mesh on Azure AKS, incorporating automated failover mechanisms, circuit breaker patterns, and health checks to guarantee 99.99% service availability for mission-critical financial workloads',
      'Engineered a real-time KYC/AML orchestration layer that seamlessly integrates core banking systems with multiple verification providers, employing intelligent caching, retry logic with exponential backoff, and webhook-driven workflows — slashing customer onboarding friction by 45%',
      'Designed and implemented a comprehensive security framework for REST APIs incorporating OAuth2, JWT-based authentication, granular rate limiting, and exhaustive audit logging — ensuring full alignment with PCI DSS Level 1 and CBN regulatory mandates',
      'Delivered the NIBSS NRS Webhook Notification Handler, a mission-critical component processing real-time transfer alerts with automated reconciliation and instant customer notifications, strengthening the bank\'s payment infrastructure reliability',
      'Spearheaded the enterprise-wide migration from .NET 6 to .NET 10 across 10+ microservices and shared NuGet packages, meticulously resolving breaking changes, dependency conflicts, and CI/CD pipeline failures with zero production incidents',
      'Accelerated engineering velocity by 30% through strategic adoption of AI-assisted development tools (Cursor, Claude Code) for debugging, refactoring, automated test generation, and code documentation, establishing new team productivity benchmarks',
      'Mentored and guided junior engineering talent through structured design reviews, Architectural Decision Record (ADR) documentation, pair programming sessions, and comprehensive code review processes, elevating overall team code quality and architectural understanding'
    ]
  },
  {
    company: 'Turing',
    position: 'FullStack Engineer(LLM) - AI & Distributed Systems',
    location: 'Remote (USA)',
    period: 'February 2025 - August 2025',
    technologies: ['Python','JavaScript', 'FastAPI', 'OpenAI API', 'LangChain', 'Pinecone', 'Qdrant', 'Redis', 'Celery', 'Docker', 'Kubernetes', 'GitHub Actions'],
    achievements: [
      'Architected and deployed a production-grade RAG (Retrieval-Augmented Generation) pipeline leveraging FastAPI, OpenAI embeddings, and Pinecone/Qdrant vector databases — processing 10,000+ documents monthly with 94% structured data extraction accuracy, revolutionising document intelligence capabilities',
      'Engineered a high-throughput asynchronous inference system using FastAPI, Celery distributed task queues, and Redis caching — achieving a 74% reduction in LLM response latency (4.2s → 1.1s) while maintaining consistency under variable load conditions',
      'Optimised vector search performance through sophisticated semantic chunking strategies, embedding normalisation techniques, and meticulous vector index tuning on Pinecone — delivering a 62% reduction in document retrieval latency for end-users',
      'Authored comprehensive technical documentation including OpenAPI specifications, Product Requirements Documents (PRDs), and detailed system design artefacts that enabled seamless integration across internal and external engineering teams',
      'Orchestrated zero-downtime production deployments through GitHub Actions CI/CD pipelines, Docker containerisation, and Kubernetes orchestration with rolling update strategies — ensuring continuous service availability during critical releases'
    ]
  },
  {
    company: 'EgolePay',
    position: 'Senior Full Stack Engineer',
    location: 'Nigeria (FinTech)',
    period: 'November 2021 - February 2025',
    technologies: ['.NET Core', 'Node.js', 'React.js', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Kubernetes (EKS)', 'AWS', 'OpenTelemetry', 'Serilog', 'Dynatrace', 'Docker', 'GitHub Actions'],
    achievements: [
      'Conceptualised and implemented an event-driven transaction orchestration engine powered by RabbitMQ and .NET Core, effectively decoupling payment processing, reconciliation, and notification services — achieving 40% improvement in fault tolerance and system resilience',
      'Designed and optimised the payment processing infrastructure to handle 500+ transactions per second (TPS) at peak, implementing idempotent API contracts, compensating transaction patterns, dead letter queue strategies, and automated daily reconciliation pipelines for data integrity assurance',
      'Integrated NIBSS EasyPay alongside multiple alternative payment gateways, engineering secure and idempotent webhook handlers with automated settlement workflows — compressing settlement windows from 24 hours to near real-time, dramatically improving merchant cash flow',
      'Led a strategic architectural transformation from monolithic payment gateway to microservices-based deployment on Kubernetes (EKS), implementing API gateway patterns, service mesh with Istio, and distributed tracing — compressing release lead time from 2 weeks to just 3 days',
      'Drove cloud cost optimisation initiatives through Kubernetes Horizontal Pod Autoscaler (HPA) right-sizing, EKS workload consolidation, and RDS query performance tuning — achieving 25% reduction in infrastructure expenditure while maintaining performance SLAs',
      'Architected a comprehensive observability stack leveraging OpenTelemetry for distributed tracing, Serilog for structured logging, and Dynatrace for application performance monitoring — enabling proactive issue detection and maintaining 99.99% system availability',
      'Developed merchant-facing React.js portals with TypeScript, featuring real-time transaction monitoring, comprehensive reporting dashboards, and frictionless self-service onboarding — driving 35% increase in merchant self-service adoption and reducing support tickets',
      'Cultivated engineering excellence by mentoring three team members through structured code reviews, technical knowledge sharing sessions, and Architectural Decision Records (ADRs) — boosting team delivery velocity by 20% while maintaining high code quality standards'
    ]
  },
  {
    company: 'Archimydes',
    position: 'Senior Software Engineer - Full Stack',
    location: 'Remote (USA)',
    period: 'February 2022 - July 2022',
    technologies: ['Node.js', 'React.js', 'TypeScript', 'PostgreSQL', 'AWS S3', 'Stripe', 'PayPal', 'Docker', 'OpenAPI'],
    achievements: [
      'Engineered scalable backend services powering e-commerce and social platforms with 500,000+ monthly active users, implementing robust caching strategies, database optimisation, and horizontal scaling to maintain performance during peak traffic periods',
      'Designed and deployed secure payment processing integrations with Stripe and PayPal, implementing idempotent webhook handling, automated refund workflows, and comprehensive fraud prevention measures — achieving zero payment incidents throughout the engagement',
      'Architected a scalable media handling infrastructure utilising AWS S3 pre-signed URLs with fine-grained access controls, coupled with an intelligent image optimisation pipeline — slashing media load times by 40% and significantly improving user experience metrics',
      'Maintained and evolved comprehensive OpenAPI documentation while contributing to semantic versioning strategies and release automation workflows across multiple engineering teams, ensuring API consistency and developer experience quality'
    ]
  },
  {
    company: 'Courteville Business Solutions',
    position: 'Software Engineer — Full Stack',
    location: 'Nigeria',
    period: 'June 2021 - November 2021',
    technologies: ['.NET Core', 'Node.js', 'React.js', 'SQL Server', 'REST APIs', 'VB.NET'],
    achievements: [
      'Architected and delivered RESTful APIs for utility payment processing, third-party data integration, and subscription lifecycle management — serving enterprise clients with high reliability and data consistency requirements',
      'Orchestrated the modernisation of legacy VB.NET systems to .NET Core, implementing comprehensive unit and integration testing strategies that increased test coverage by 25% and significantly reduced production defect rates',
      'Engineered React.js frontend components for enterprise billing dashboards and reporting interfaces, delivering intuitive data visualisation and real-time metrics that enhanced operational decision-making for business stakeholders'
    ]
  },
  {
    company: 'SYCOM EBS Technology',
    position: 'Software Engineer',
    location: 'Nigeria',
    period: 'January 2020 - June 2021',
    technologies: ['.NET Core', 'Node.js', 'SQL Server', 'REST APIs', 'MongoDB'],
    achievements: [
      'Led a comprehensive modernisation initiative, refactoring monolithic legacy systems into modular, maintainable microservices architecture — delivering 30% system performance improvement and significantly reducing deployment lead times',
      'Architected and integrated third-party communication services (SMS, email) for patient notifications, appointment scheduling automation, and billing alerts — enhancing patient engagement and operational efficiency',
      'Developed comprehensive healthcare data management interfaces for patient records, appointment scheduling, and clinical workflow management — supporting digital transformation across healthcare delivery'
    ]
  },
  {
    company: 'ITANDT Solutions',
    position: 'Software Engineer',
    location: 'Nigeria',
    period: 'September 2018 - January 2020',
    technologies: ['.NET Core', 'JavaScript', 'SQL Server', 'REST APIs', 'HTML5', 'CSS3'],
    achievements: [
      'Executed a strategic migration of legacy enterprise systems to .NET Core and SQL Server, establishing modular architecture patterns that significantly improved system reliability, maintainability, and long-term sustainability',
      'Designed and delivered patient-facing web interfaces for appointment booking, health records access, and billing management — delivering intuitive self-service capabilities that enhanced patient experience and reduced administrative overhead',
      'Architected reusable API integration modules consumed across multiple SaaS product lines, establishing standardised integration patterns that accelerated feature delivery and reduced development duplication'
    ]
  },
  {
    company: 'Fidelity Bank',
    position: 'Software Engineer',
    location: 'Nigeria',
    period: 'February 2017 - March 2018',
    technologies: ['.NET', 'SQL Server', 'VB.NET', 'REST APIs'],
    achievements: [
      'Contributed to the development and enhancement of .NET-based internal banking applications, including transaction reporting systems, account management portals, and customer-facing digital channels — gaining deep foundational experience in financial software engineering',
      'Supported API documentation initiatives, QA automation frameworks, and performance optimisation across internal and customer-facing banking applications, developing expertise in regulatory compliance and enterprise banking standards'
    ]
  }
]

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Career</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            10+ years of engineering leadership across FinTech, HealthTech, and Enterprise SaaS.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div 
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  expanded === index 
                    ? 'border-gold/30 bg-dark-card' 
                    : 'border-dark-border bg-dark-card/50 hover:border-dark-border/80'
                }`}
              >
                <button
                  className="w-full text-left p-5 md:p-6"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  aria-expanded={expanded === index}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg md:text-xl font-semibold text-white">{exp.company}</h3>
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded-full">
                          {exp.position.split(' - ')[0] || exp.position}
                        </span>
                      </div>
                      <p className="text-sm text-muted-gray mt-1">{exp.position}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-gray flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        expanded === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </div>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${
                  expanded === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono text-muted-gray bg-dark border border-dark-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-gray leading-relaxed">
                          <span className="text-gold mt-1.5 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
