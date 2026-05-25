import { WhatsAppIcon } from './WhatsAppIcon'

const steps = [
  {
    num: '01',
    title: 'Primeiro contato',
    desc: 'Você manda uma mensagem. A gente cuida do resto. Não precisa ter nada pronto. Mande o tamanho aproximado do espaço pelo WhatsApp, ou preencha o formulário abaixo. Nossa equipe entra em contato em até 24h úteis.',
  },
  {
    num: '02',
    title: 'Visita técnica e proposta',
    desc: 'Nossa equipe visita o espaço e apresenta o projeto personalizado. Fazemos uma visita para entender as dimensões, a estrutura e o estilo do ambiente. Em seguida, apresentamos uma proposta com conceito visual e valores.',
  },
  {
    num: '03',
    title: 'Aprovação',
    desc: 'Você aprova. O contrato é assinado. Daqui em diante é conosco. Sem burocracia excessiva. Aprovado o projeto, assinamos o contrato e toda a coordenação passa para nossa equipe.',
  },
  {
    num: '04',
    title: 'Montagem',
    desc: 'Chegamos no dia e horário combinado, e entregamos o espaço decorado. Nossa equipe chega com equipamentos, materiais e cronograma definido. Trabalhamos no horário que melhor funciona para o seu espaço, inclusive fora do expediente comercial.',
  },
  {
    num: '05',
    title: 'Temporada + desmontagem',
    desc: 'Manutenção durante o período. E desmontagem quando o Natal acabar. Qualquer problema durante a temporada, nossa equipe resolve. No fim do período, desmontamos tudo e entregamos o espaço limpo, sem deixar nada para você guardar ou descartar.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto" id="como-funciona">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-ink">
          Do primeiro contato ao Natal perfeito. Sem complicação.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12 mb-16">
        {steps.map((step, i) => (
          <div key={step.num} className="flex flex-col gap-4 relative">
            {i !== steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-12 w-full h-[1px] bg-brand-gold/30" />
            )}
            <div className="w-12 h-12 rounded-full bg-brand-dark-green text-surface flex items-center justify-center font-label-md text-label-md relative z-10 shrink-0 border-2 border-brand-gold/20">
              {step.num}
            </div>
            <h3 className="font-headline-sm text-headline-sm text-ink mt-2">{step.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          className="inline-flex justify-center bg-brand-dark-green text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-dark-green transition-colors px-8 py-4 rounded font-label-md text-label-md items-center gap-2 w-full sm:w-max"
          href="https://wa.me/5511973559896"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          Começar agora, é só mandar uma mensagem
        </a>
      </div>
    </section>
  )
}
