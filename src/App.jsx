import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      // Hero Animation
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      })

      // About Animation
      gsap.from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      // Projects Animation
      gsap.from(projectsRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-primary text-white font-sans">
      {/* Header */}
      <header ref={headerRef} className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Juan Camacho
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre mí</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a></li>
              <li><a href="https://github.com/JuanCamacho198" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h2 className="hero-text text-5xl md:text-7xl font-bold mb-6">
          Ingeniero de Software
        </h2>
        <p className="hero-text text-xl md:text-2xl text-gray-400 max-w-2xl mb-8">
          Especializado en crear experiencias web excepcionales con tecnologías modernas.
        </p>
        <div className="hero-text flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105">
            Ver Proyectos
          </a>
          <a href="https://github.com/JuanCamacho198" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full font-semibold transition-all">
            GitHub
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sobre mí</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Soy un apasionado Ingeniero de Software con experiencia en el desarrollo de aplicaciones web completas.
                Me encanta resolver problemas complejos y aprender nuevas tecnologías.
              </p>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-400">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'Python', 'SQL', 'React', 'Next.js', 'NestJS', 'Tailwind CSS', 'Prisma', 'Neon DB'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm hover:border-blue-400/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-primary rounded-lg border border-white/10">
                <h4 className="text-xl font-bold mb-4">Enfoque</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Desarrollo Full Stack
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Arquitectura de Software
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Optimización y Rendimiento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Proyectos Destacados</h3>
          <div className="max-w-4xl mx-auto">
            <div className="group relative rounded-xl overflow-hidden bg-secondary border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">E-commerce Refrielectricos v2</h4>
                    <p className="text-blue-400 text-sm">Proyecto Estrella</p>
                  </div>
                  <a href="https://github.com/JuanCamacho198/Pagina_Web_Refrielectricos-v2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-300 mb-6">
                  Una plataforma de comercio electrónico completa y moderna.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'NestJS', 'Tailwind', 'Neon DB', 'Prisma'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-black/30 rounded-full text-xs text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Juan Camacho. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
