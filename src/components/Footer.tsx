import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>© 2025 Vitor Tibães Santos. Feito com</span>
          <Heart className="h-4 w-4 text-accent fill-accent" />
        </div>
      </div>
    </footer>
  )
}
