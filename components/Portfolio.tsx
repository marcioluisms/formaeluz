'use client'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { WhatsAppIcon } from './WhatsAppIcon'

const projects = [
  { id: 1, image: '/decoracao-de-natal-para-empresas-volks.webp', alt: 'Decoração de Natal para empresa – projeto Volkswagen, Forma & Luz São Paulo' },
  { id: 2, image: '/decoracao-de-natal-forma-e-luz-arvore-1.webp', alt: 'Árvore de Natal decorativa para espaço corporativo – Forma & Luz' },
  { id: 4, image: '/decoracao-de-natal-forma-e-luz-galeria.webp', alt: 'Decoração natalina em galeria comercial – Forma & Luz São Paulo' },
  { id: 5, image: '/decoracao-de-natal-forma-e-luz-galeria-2.webp', alt: 'Iluminação natalina em galeria comercial – projeto Forma & Luz' },
  { id: 6, image: '/decoracao-de-natal-forma-e-luz-galeria-3.webp', alt: 'Decoração de Natal em galeria – Forma & Luz decorações corporativas' },
  { id: 7, image: '/decoracao-de-natal-forma-e-luz-hotel.webp', alt: 'Decoração de Natal para hotel em São Paulo – Forma & Luz' },
  { id: 8, image: '/decoracao-de-natal-forma-e-luz-jardim.webp', alt: 'Decoração natalina em jardim corporativo – Forma & Luz São Paulo' },
  { id: 9, image: '/decoracao-de-natal-forma-e-luz-praca.webp', alt: 'Iluminação natalina em praça pública – projeto Forma & Luz São Paulo' },
  { id: 10, image: '/decoracao-de-natal-forma-e-luz-praca-2.webp', alt: 'Decoração de Natal em praça – Forma & Luz decorações para prefeituras' },
  { id: 11, image: '/decoracao-de-natal-forma-e-luz-praca-3.webp', alt: 'Iluminação de Natal em espaço público – Forma & Luz São Paulo' },
  { id: 12, image: '/decoracao-de-natal-forma-e-luz-predio.webp', alt: 'Decoração natalina em fachada de prédio – Forma & Luz São Paulo' },
  { id: 13, image: '/decoracao-de-natal-forma-e-luz-presente-1.webp', alt: 'Enfeites e presentes natalinos decorativos para empresa – Forma & Luz' },
  { id: 14, image: '/decoracao-de-natal-forma-e-luz-tunel-1.webp', alt: 'Túnel de luz natalino para espaço corporativo – Forma & Luz São Paulo' },
  { id: 15, image: '/decoracao-de-natal-forma-e-luz-comercial-11.webp', alt: 'Decoração de Natal para espaço comercial – Forma & Luz São Paulo' },
  { id: 16, image: '/decoracao-de-natal-forma-e-luz-condominio-11.webp', alt: 'Decoração natalina para condomínio comercial – Forma & Luz São Paulo' },
  { id: 17, image: '/decoracao-de-natal-forma-e-luz-empresa-11.webp', alt: 'Decoração de Natal para empresa corporativa – Forma & Luz São Paulo' },
  { id: 18, image: '/decoracao-de-natal-forma-e-luz-empresa-12.webp', alt: 'Projeto natalino corporativo em empresa – Forma & Luz São Paulo' },
  { id: 19, image: '/decoracao-de-natal-forma-e-luz-empresa-13.webp', alt: 'Iluminação de Natal para empresa em São Paulo – Forma & Luz' },
  { id: 20, image: '/decoracao-de-natal-forma-e-luz-empresa-14.webp', alt: 'Decoração natalina corporativa completa – Forma & Luz São Paulo' },
  { id: 21, image: '/decoracao-de-natal-forma-e-luz-empresa-15.webp', alt: 'Cenário natalino para empresa – projeto Forma & Luz São Paulo' },
  { id: 22, image: '/decoracao-de-natal-forma-e-luz-mackenzie.webp', alt: 'Decoração de Natal Universidade Mackenzie – projeto Forma & Luz São Paulo' },
  { id: 23, image: '/decoracao-de-natal-forma-e-luz-netflix.webp', alt: 'Decoração de Natal Netflix Brasil – projeto Forma & Luz São Paulo' },
  { id: 24, image: '/decoracao-de-natal-forma-e-luz-parque-1.webp', alt: 'Decoração natalina em parque – Forma & Luz São Paulo' },
  { id: 25, image: '/decoracao-de-natal-forma-e-luz-pousada-11.webp', alt: 'Decoração de Natal para pousada e hotel – Forma & Luz São Paulo' },
  { id: 26, image: '/decoracao-de-natal-forma-e-luz-praca-11.webp', alt: 'Decoração natalina em praça pública São Paulo – Forma & Luz' },
  { id: 27, image: '/decoracao-de-natal-forma-e-luz-praca-12.webp', alt: 'Iluminação de Natal em praça – Forma & Luz decorações para prefeituras' },
  { id: 28, image: '/decoracao-de-natal-forma-e-luz-praca-13.webp', alt: 'Projeto de iluminação natalina em praça São Paulo – Forma & Luz' },
  { id: 29, image: '/decoracao-de-natal-forma-e-luz-praca-14.webp', alt: 'Decoração de Natal em espaço público – Forma & Luz São Paulo' },
  { id: 30, image: '/decoracao-de-natal-forma-e-luz-praca-15.webp', alt: 'Iluminação natalina em praça e rua – projeto Forma & Luz São Paulo' },
  { id: 32, image: '/decoracao-de-natal-forma-e-luz-residencial-1.webp', alt: 'Decoração de Natal para condomínio residencial – Forma & Luz São Paulo' },
]

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight' && selectedIndex !== null)
        setSelectedIndex((selectedIndex + 1) % projects.length)
      if (e.key === 'ArrowLeft' && selectedIndex !== null)
        setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % projects.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-brand-dark-green" id="projetos">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-surface mb-6">Nossos projetos falam por si.</h2>
          <p className="font-body-lg text-body-lg text-surface/80 max-w-2xl mx-auto">
            Projetos executados pela equipe Forma &amp; Luz, da visita técnica à entrega final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl border border-outline-variant/30 aspect-[4/3] cursor-pointer bg-black/20"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark-green/0 group-hover:bg-brand-dark-green/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-black/50 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-label-md text-sm backdrop-blur-sm">
                  Ampliar
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            className="inline-flex justify-center bg-brand-gold text-brand-dark-green hover:opacity-90 transition-opacity px-8 py-4 rounded font-label-md text-label-md items-center gap-2 w-full sm:w-max"
            href="https://wa.me/5511973559896"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            Quer um projeto assim? Fale pelo WhatsApp
          </a>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-50 p-2 transition-colors"
            onClick={() => setSelectedIndex(null)}
            aria-label="Fechar galeria"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            className="absolute left-2 md:left-8 text-white/50 hover:text-white z-50 p-2 transition-colors"
            onClick={prevImage}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center pointer-events-none">
            <img
              src={projects[selectedIndex].image}
              alt={projects[selectedIndex].alt}
              className="max-w-full max-h-full object-contain drop-shadow-2xl pointer-events-auto rounded"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute right-2 md:right-8 text-white/50 hover:text-white z-50 p-2 transition-colors"
            onClick={nextImage}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
          </button>
        </div>
      )}
    </section>
  )
}
