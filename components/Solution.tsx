import React from 'react'
import { Building, DraftingCompass, HardHat, Recycle, ShieldCheck, Wrench } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

export default function Solution() {
  return (
    <section className="relative border-y border-outline-variant/30" id="solucao">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/forma-e-luz-decoracao-de-natal-2.webp"
          alt="Decoração de natal para empresas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full h-full py-section-gap px-margin-mobile md:px-margin-desktop" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 bg-brand-dark-green/90 -z-10" />

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg text-surface mb-6 drop-shadow-md">
              Decoração completa. Do projeto à desmontagem. Você só aprecia.
            </h2>
            <p className="font-body-lg text-body-lg text-surface/90 max-w-2xl mx-auto drop-shadow">
              Você aluga a decoração de Natal mais adequada para o seu espaço. Nós cuidamos de cada etapa: projeto, equipamentos, montagem, manutenção e desmontagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: <DraftingCompass className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Projeto personalizado',
                desc: 'Decoração pensada para o seu espaço, não para qualquer espaço. Cada projeto começa com uma visita técnica. Entendemos as dimensões, o estilo do ambiente e o orçamento disponível. O resultado é uma proposta exclusiva, não um catálogo padrão.',
              },
              {
                icon: <ShieldCheck className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Equipe certificada',
                desc: 'Sua responsabilidade operacional zero. Nossa equipe trabalha com EPI e EPC em todos os projetos, sob supervisão técnica constante. Você não assume nenhum risco de acidente, toda a responsabilidade operacional é nossa.',
              },
              {
                icon: <Wrench className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Manutenção durante toda a temporada',
                desc: 'A decoração fica bonita do primeiro ao último dia. Lâmpada queimada, estrutura com problema, peça danificada, nossa equipe resolve. Você não precisa ligar para fornecedor, não precisa esperar, não precisa se preocupar.',
              },
              {
                icon: <Recycle className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Desmontagem e entrega limpa',
                desc: 'O espaço volta exatamente como estava, ou melhor. Ao final da temporada, desmontamos tudo, retiramos todo o material e entregamos o ambiente limpo. Você não guarda uma caixa, não descarta nada, não gerencia nenhuma etapa de saída.',
              },
              {
                icon: <Building className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Modelo de aluguel',
                desc: 'A cada Natal, um conceito novo. Sem custo de estoque. Você não compra enfeites, não imobiliza capital, não tem depreciação. E a cada ano, pode escolher um conceito novo, sempre atual, sempre no padrão do seu espaço.',
              },
              {
                icon: <HardHat className="text-brand-gold w-6 h-6 shrink-0" />,
                title: 'Montagem com equipamentos',
                desc: 'Gruas e cestas elevatórias para projetos que exigem altura. Temos equipamentos para instalações em prédios altos, fachadas e estruturas complexas.',
              },
            ].map((item) => (
              <div key={item.title} className="relative p-8 rounded-2xl flex flex-col gap-6 items-start group">
                <div className="absolute inset-0 bg-black/80 rounded-2xl -z-10" style={{ mixBlendMode: 'destination-out' as React.CSSProperties['mixBlendMode'] }} />
                <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl pointer-events-none -z-10 transition-colors group-hover:border-brand-gold/50" />
                <div className="relative z-10 flex flex-col gap-6 w-full">
                  <div className="bg-brand-gold/10 p-4 rounded-full w-max">{item.icon}</div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-surface mb-3">{item.title}</h4>
                    <p className="font-body-md text-body-md text-surface/90 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              className="inline-flex justify-center bg-brand-gold text-brand-dark-green transition-colors px-8 py-4 rounded font-label-md text-label-md items-center gap-2 hover:opacity-90 w-full sm:w-max"
              href="https://wa.me/5511973559896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
