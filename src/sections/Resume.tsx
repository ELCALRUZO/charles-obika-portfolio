import AnimatedSection from '../components/AnimatedSection'
import { Download, FileText, Eye } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Document</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my professional experience, skills, and achievements.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative rounded-2xl border border-dark-border bg-dark-card/50 p-8 md:p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl" />
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white mt-4">Charles Obika · CV</h3>
                <p className="text-sm text-muted-gray mt-1">Senior Full Stack Engineer · 10+ Years Experience</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                  <a
                    href="/resume/Charles-Obika-Resume.pdf"
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <a
                    href="/resume/Charles-Obika-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-border text-white font-medium rounded-lg hover:border-gold/50 hover:bg-white/5 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    View Online
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-dark-border">
                  <p className="text-xs text-muted-gray">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
