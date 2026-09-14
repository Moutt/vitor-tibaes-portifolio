import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/portfolio'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
)


interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset carousel index when project changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [project])

  // Close on ESC key
  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, currentIndex])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  const next = useCallback(() => {
    if (!project) return
    setCurrentIndex((i) => (i + 1) % project.media.length)
  }, [project])

  const prev = useCallback(() => {
    if (!project) return
    setCurrentIndex((i) => (i - 1 + project.media.length) % project.media.length)
  }, [project])

  if (!project) return null

  const currentMedia = project.media[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border/50 flex-shrink-0">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors flex-shrink-0"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">

          {/* Media carousel */}
          {project.media.length > 0 && (
            <div className="relative bg-black/30 group">
              {/* Media item */}
              <div className="aspect-video w-full flex items-center justify-center overflow-hidden">
                {currentMedia.type === 'image' ? (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={currentMedia.src}
                    poster={currentMedia.poster}
                    controls
                    className="w-full h-full object-contain bg-black"
                  />
                )}
              </div>

              {/* Navigation arrows — only if more than 1 item */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Mídia ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs">
                    {currentIndex + 1} / {project.media.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Thumbnail strip — only if more than 1 item */}
          {project.media.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto border-b border-border/50">
              {project.media.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentIndex
                      ? 'border-primary shadow-md shadow-primary/20'
                      : 'border-border/50 hover:border-border opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center text-xs text-muted-foreground">
                      ▶ Vídeo
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              {project.longDescription.split('\n').map((line, i) =>
                line.trim() === '' ? null : (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm">
                    {line}
                  </p>
                )
              )}
            </div>

            {project.link && (
              <Button
                variant="outline"
                className="gap-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              >
                <GithubIcon className="h-4 w-4" />
                Ver no GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
