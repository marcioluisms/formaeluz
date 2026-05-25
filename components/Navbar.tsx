'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className="bg-brand-dark-green/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-brand-gold/20 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16 relative z-50">
        <div className="flex items-center">
          <a href="/" aria-label="Voltar para o início" onClick={closeMenu}>
            <img src="/decoracao-de-natal-forma-e-luz.webp" alt="Forma & Luz" width={200} height={48} className="h-10 md:h-12 object-contain" />
          </a>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {['como-funciona', 'segmentos', 'projetos', 'diferenciais'].map((id) => (
            <a
              key={id}
              className="font-label-md text-label-md text-surface hover:text-brand-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded py-1 px-2 capitalize"
              href={`#${id}`}
            >
              {id === 'como-funciona' ? 'Como funciona' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <a
          className="hidden md:inline-flex bg-primary text-on-primary hover:bg-primary/90 transition-all duration-200 px-6 py-2.5 rounded font-label-md text-label-md items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          href="https://wa.me/5511973559896"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          Solicitar Orçamento
        </a>

        <button
          className="md:hidden text-surface hover:text-brand-gold p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full transition-colors"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-brand-dark-green/95 backdrop-blur-lg flex flex-col items-center justify-start pt-12 pb-6 px-6 gap-8 overflow-y-auto w-full border-t border-brand-gold/10"
          >
            {[
              { id: 'como-funciona', label: 'Como funciona' },
              { id: 'segmentos', label: 'Segmentos' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'diferenciais', label: 'Diferenciais' },
            ].map(({ id, label }) => (
              <a
                key={id}
                className="font-headline-sm text-2xl text-surface hover:text-brand-gold transition-colors w-full text-center py-4 border-b border-brand-gold/10"
                href={`#${id}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}

            <a
              className="mt-8 flex justify-center bg-brand-gold text-brand-dark-green hover:bg-brand-gold/90 transition-all duration-200 px-8 py-4 rounded font-label-md text-label-md items-center gap-2 w-full max-w-sm mx-auto shadow-lg"
              href="https://wa.me/5511973559896"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
