import AnimatedSection from '../components/AnimatedSection' 
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react'; 
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('chijioekobika1@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="container-custom">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-sm font-medium uppercase tracking-wider">Connect</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, technical challenges, and engineering partnerships.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="p-5 rounded-xl border border-dark-border bg-dark-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-gray">Email</p>
                    <p className="text-white font-medium truncate">chijiokeobika1@gmail.com</p>
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors mt-1"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy email
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-dark-border bg-dark-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-gray">Phone</p>
                    <p className="text-white font-medium">+234 703 442 8605</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-dark-border bg-dark-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold/10 text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-gray">Location</p>
                    <p className="text-white font-medium">Lagos, Nigeria</p>
                    <p className="text-sm text-muted-gray mt-1">Open to remote opportunities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-dark-border bg-dark-card/50">
                <h3 className="text-lg font-semibold text-white mb-4">Connect Online</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/charles-obika-b01836135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <FaLinkedin className="w-5 h-5 text-gold" />
                      <span className="text-white group-hover:text-gold transition-colors">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-gray group-hover:text-gold transition-colors" />
                  </a>
                  <a
                    href="https://github.com/ELCALRUZO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub className="w-5 h-5 text-gold" />
                      <span className="text-white group-hover:text-gold transition-colors">GitHub</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-gray group-hover:text-gold transition-colors" />
                  </a>
                  <a
                    href="mailto:chijioekobika1@gmail.com"
                    className="flex items-center justify-between p-4 rounded-lg border border-dark-border hover:border-gold/50 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5 text-gold" />
                      <span className="text-white group-hover:text-gold transition-colors">Send Email</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-gray group-hover:text-gold transition-colors" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-dark-border bg-dark-card/50 text-center">
                <p className="text-sm text-muted-gray">
                  <span className="text-gold">✦</span> Available for senior engineering roles, 
                  technical consulting, and architecture leadership.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}