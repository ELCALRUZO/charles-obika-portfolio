import {
  ArrowDown,
  Mail,
  Download,
  ChevronRight
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection'

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20 md:pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                Available for opportunities
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                Charles
                <br />
                <span className="gradient-text">Obika</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-xl md:text-2xl font-medium text-muted-gray mt-4">
                Senior Full Stack Engineer
                <span className="text-white/40 mx-3">·</span>
                <span className="text-gold">AI & Distributed Systems</span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-base md:text-lg text-muted-gray mt-4 max-w-xl leading-relaxed">
                Architecting high-throughput distributed systems, AI-driven platforms, 
                and event-driven microservices at scale. 
                <span className="block mt-1 text-white/70">
                  10+ years · FinTech · HealthTech · Enterprise SaaS
                </span>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300"
                >
                  View My Work
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-dark-border text-white font-medium rounded-lg hover:border-gold/50 hover:bg-white/5 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com/ELCALRUZO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-muted-gray hover:text-white"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/charles-obika-b01836135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-muted-gray hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" /> 
                </a>
                <a
                  href="mailto:chijiokeobika1@gmail.com"
                  className="p-2.5 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 text-muted-gray hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <span className="h-6 w-px bg-dark-border" />
                <span className="text-sm text-muted-gray">
                  <span className="text-gold">+234</span> 703 442 8605
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Profile Image - Replaces Terminal */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.4} direction="right">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-2xl opacity-60" />
                
                {/* Main image container */}
                <div className="relative bg-dark-card border border-dark-border rounded-2xl p-3 overflow-hidden">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/10 to-transparent rounded-bl-2xl pointer-events-none" />
                  
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-dark">
                    <img
                      src="/profile/charles-obika.jpg"
                      alt="Charles Obika - Senior Full Stack Engineer"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-dark/90 backdrop-blur-sm border border-dark-border rounded-full px-3 py-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/80 font-medium">Open to work</span>
                  </div>

                  {/* Years of experience badge */}
                  <div className="absolute top-4 left-4 bg-gold text-dark font-bold text-sm px-3 py-1.5 rounded-lg border border-dark/20">
                    10+ Years
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.7}>
          <div className="flex justify-center mt-12 lg:mt-16">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-1 text-muted-gray hover:text-white transition-colors group"
              aria-label="Scroll down"
            >
              <span className="text-xs uppercase tracking-widest text-muted-gray/60">Scroll</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}