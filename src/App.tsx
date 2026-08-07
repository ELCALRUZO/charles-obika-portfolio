import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-white">
        <ScrollProgress />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Certifications />
                <Resume />
                <Contact />
              </>
            } />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App