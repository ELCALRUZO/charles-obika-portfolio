import AnimatedSection from '../components/AnimatedSection'
import { Award, Cpu, Shield, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">About</span>
          </div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Excellence</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-gray leading-relaxed">
                I'm a Senior Full Stack Engineer with <span className="text-white font-medium">10+ years</span> of 
                experience designing, building, and scaling high-throughput distributed systems, 
                AI-driven platforms, and event-driven microservices.
              </p>
              <p className="text-base text-muted-gray leading-relaxed">
                My work spans <span className="text-white/80">FinTech</span>, <span className="text-white/80">HealthTech</span>, 
                and <span className="text-white/80">Enterprise SaaS</span>, with a focus on mission-critical financial 
                infrastructure — including NIBSS integrations, real-time KYC/AML platforms, 
                and LLM-powered document intelligence pipelines.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
                  <p className="text-2xl font-bold text-gold">9+</p>
                  <p className="text-sm text-muted-gray">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-dark-card border border-dark-border">
                  <p className="text-2xl font-bold text-gold">99.99%</p>
                  <p className="text-sm text-muted-gray">Uptime Achieved</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Distributed Systems</h3>
                    <p className="text-sm text-muted-gray mt-1">Event-driven microservices, Kafka, RabbitMQ, Kubernetes</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">AI &amp; LLM Integration</h3>
                    <p className="text-sm text-muted-gray mt-1">RAG pipelines, OpenAI, LangChain, Vector DBs</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Security &amp; Compliance</h3>
                    <p className="text-sm text-muted-gray mt-1">PCI DSS, OWASP, JWT, OAuth2, KYC/AML</p>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Cloud Architecture</h3>
                    <p className="text-sm text-muted-gray mt-1">AWS (Certified), Azure, Docker, Kubernetes, Terraform</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}