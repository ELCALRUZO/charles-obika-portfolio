import { Mail, ArrowUp } from 'lucide-react'
import {
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-dark-border bg-dark-surface/50">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-gray">
            © {new Date().getFullYear()} <span className="text-gold">Charles Obika</span> · Senior Full Stack Engineer
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ELCALRUZO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-gray hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/charles-obika-b01836135"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-gray hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:chijioekobika1@gmail.com"
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-gray hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="w-px h-6 bg-dark-border" />
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-gray hover:text-gold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}