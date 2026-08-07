import AnimatedSection from '../components/AnimatedSection'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    name: 'IBM RAG and Agentic AI Professional Certificate',
    issuer: 'IBM',
    year: '2026'
  },
  {
    name: 'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI',
    issuer: 'IBM',
    year: '2026'
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2024'
  },
  {
    name: 'Certified PCI Security Manager',
    issuer: 'PCI Security Standards Council',
    year: '2023'
  },
  {
    name: 'IBM Certified Full Stack Developer',
    issuer: 'IBM',
    year: '2022'
  },
  {
    name: 'Jobberman Soft Skills Program',
    issuer: 'Jobberman',
    year: '2021'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Credentials</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Professional Development</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="p-5 rounded-xl border border-dark-border bg-dark-card/50 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-sm leading-tight">{cert.name}</h3>
                    <p className="text-sm text-muted-gray mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Calendar className="w-3.5 h-3.5 text-muted-gray" />
                      <span className="text-xs text-muted-gray">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 p-5 rounded-xl border border-dark-border bg-dark-card/30">
            <p className="text-sm text-muted-gray text-center">
              <span className="text-gold">Education:</span> B.Sc. Computer Science &amp; Information Technology · Bowen University, Nigeria · 2018
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}