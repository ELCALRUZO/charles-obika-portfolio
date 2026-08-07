import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.substring(1))
      const scrollY = window.scrollY + 120
      
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActive(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-surface/95 backdrop-blur-lg border-b border-dark-border' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#home" 
            className="text-xl font-bold tracking-tight"
            onClick={(e) => handleClick(e, '#home')}
          >
            <span className="gradient-text">CO</span>
            <span className="text-white ml-1 font-light">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === item.href.substring(1)
                    ? 'text-gold bg-gold/10'
                    : 'text-muted-gray hover:text-white hover:bg-white/5'
                }`}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bg-dark-surface/98 backdrop-blur-lg border-b border-dark-border transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[calc(100vh-64px)] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-custom py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                active === item.href.substring(1)
                  ? 'text-gold bg-gold/10'
                  : 'text-muted-gray hover:text-white hover:bg-white/5'
              }`}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}