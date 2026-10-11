import { useState, useEffect } from 'react'
import { Menu, X, Presentation as PresentationIcon } from 'lucide-react'
import { navLinks } from '@/data/portfolio'
import { Button } from '@/components/ui/button'
import Presentation from '@/components/Presentation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPresentation, setShowPresentation] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('#sobre')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Vitor Tibães
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" className="ml-2 bg-gradient-primary hover:opacity-90" onClick={() => setShowPresentation(true)}>
              <PresentationIcon className="mr-2 h-4 w-4" />
              Apresentação
            </Button>
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setIsMenuOpen(false); setShowPresentation(true) }}
                className="px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/50 rounded-lg text-left transition-colors"
              >
                Apresentação
              </button>
            </div>
          </div>
        )}
      </div>
      {showPresentation && <Presentation onClose={() => setShowPresentation(false)} />}
    </nav>
  )
}
