'use client'

import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import PrivacyPolicyModal from './PrivacyPolicyModal'

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  return (
    <footer className="bg-[#2A0003] text-surface/80 w-full pt-16 pb-8 border-t border-brand-gold/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="md:col-span-5 flex flex-col gap-6">
          <a href="#" aria-label="Voltar para o início" className="w-max inline-block focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
            <img src="/decoracao-de-natal-forma-e-luz.webp" alt="Forma & Luz" className="h-12 object-contain" />
          </a>
          <p className="font-body-md text-base leading-relaxed text-surface/90 max-w-sm">
            Decoração natalina corporativa em São Paulo. Serviço completo, do projeto à desmontagem, criando ambientes que encantam e inspiram.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h3 className="font-headline-sm text-lg text-brand-gold mb-2">Navegação</h3>
          {[
            { href: '#como-funciona', label: 'Como funciona' },
            { href: '#segmentos', label: 'Segmentos atendidos' },
            { href: '#projetos', label: 'Nossos projetos' },
            { href: '#diferenciais', label: 'Diferenciais' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-brand-gold hover:translate-x-1 transition-all w-max focus:outline-none focus:ring-2 focus:ring-brand-gold rounded">
              {label}
            </a>
          ))}
        </div>

        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="font-headline-sm text-lg text-brand-gold mb-2">Contato</h3>
          <a
            href="https://wa.me/5511973559896"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-brand-gold transition-colors w-max focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>(11) 97355-9896</span>
          </a>
          <a
            href="mailto:contato@formaeluz.com.br"
            className="flex items-center gap-3 hover:text-brand-gold transition-colors w-max focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span>contato@formaeluz.com.br</span>
          </a>
          <div className="flex items-start gap-3 mt-2">
            <MapPin className="w-5 h-5 shrink-0 text-brand-gold mt-1" />
            <span className="text-surface/80">Atendimento em São Paulo capital e Região Metropolitana.</span>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface/60">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <p>© 2026 Forma &amp; Luz Decorações. Todos os direitos reservados.</p>
          <span className="hidden md:inline text-surface/30">|</span>
          <p>CNPJ: 29.030.511/0001-38</p>
        </div>
        <button
          onClick={() => setIsPrivacyModalOpen(true)}
          className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1 cursor-pointer bg-transparent border-0"
        >
          Política de Privacidade
        </button>
      </div>

      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </footer>
  )
}
