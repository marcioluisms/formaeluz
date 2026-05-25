import { Tractor, ShieldCheck, CalendarCheck, Clock, FileText, Leaf } from 'lucide-react'

export default function Differentials() {
  const items = [
    {
      icon: <ShieldCheck className="text-brand-gold w-8 h-8" />,
      title: 'Você não assume nenhum risco operacional',
      desc: 'Toda a equipe trabalha com equipamentos de proteção individual e coletiva, com supervisão técnica em cada etapa. Acidentes em obra são responsabilidade nossa, não sua.',
    },
    {
      icon: <CalendarCheck className="text-brand-gold w-8 h-8" />,
      title: 'Serviço completo de aluguel',
      desc: 'Projeto, montagem, manutenção e desmontagem, tudo incluso. Você não compra, não guarda, não gerencia. Assina o contrato e recebe o espaço decorado. Ao final da temporada, recebe o espaço limpo de volta.',
    },
    {
      icon: <Clock className="text-brand-gold w-8 h-8" />,
      title: 'Trabalhamos quando o seu espaço permite, inclusive à noite',
      desc: 'Condomínios, shoppings e lojas têm restrições de horário. Nossa equipe adapta o cronograma para trabalhar no turno que menos interfere na operação, inclusive madrugadas e fins de semana.',
    },
    {
      icon: <FileText className="text-brand-gold w-8 h-8" />,
      title: 'Alvarás, concessionárias, órgãos públicos: nossa responsabilidade',
      desc: 'Para projetos em vias públicas, coordenamos com a companhia de energia, secretaria de trânsito e demais órgãos envolvidos. Você não precisa entender de burocracia técnica.',
    },
    {
      icon: <Leaf className="text-brand-gold w-8 h-8" />,
      title: 'Cada planta tratada com o mesmo cuidado da decoração',
      desc: 'Projetos em jardins, shoppings e áreas verdes exigem atenção especial. Usamos equipamentos próprios para proteger as plantas durante todo o processo. A estética e o bem-estar do espaço são preservados.',
    },
    {
      icon: <Tractor className="text-brand-gold w-8 h-8" />,
      title: 'Gruas e cestas elevatórias',
      desc: 'Temos equipamentos para projetos em altura.',
    },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto" id="diferenciais">
      <h2 className="font-headline-lg text-headline-lg text-ink text-center mb-16">
        O que faz a diferença quando o projeto é grande.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            {item.icon}
            <h3 className="font-headline-sm text-headline-sm text-ink">{item.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 bg-surface-container border-l-4 border-primary-container p-8">
        <p className="font-headline-sm text-headline-sm text-ink italic">
          &ldquo;Serviço completo de decoração natalina corporativa em São Paulo, com manutenção durante toda a temporada.&rdquo;
        </p>
      </div>
    </section>
  )
}
