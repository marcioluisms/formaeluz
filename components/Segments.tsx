export default function Segments() {
  const cards = [
    {
      tag: 'Condomínios Comerciais',
      image: '/forma-e-luz-decoracao-de-natal-comercio.webp',
      alt: 'Decoração de Natal em condomínio comercial São Paulo, Forma & Luz',
      title: 'Decoração de Natal para condomínios comerciais em São Paulo',
      desc: 'Respeitamos a rotina do prédio. Trabalhamos no horário que melhor funciona para moradores e lojistas, inclusive à noite e nos fins de semana. A montagem é discreta, sem interferência na operação, e entregamos o espaço limpo ao final.\n\nO síndico não precisa acompanhar cada etapa: assumimos toda a responsabilidade operacional, da montagem à desmontagem.',
    },
    {
      tag: 'Shoppings e Centros Comerciais',
      image: '/forma-e-luz-decoracao-de-natal-shopping.webp',
      alt: 'Decoração de Natal em shopping center São Paulo, projeto Forma & Luz',
      title: 'Decoração natalina para shoppings e centros comerciais',
      desc: 'Entendemos que o shopping tem um padrão. E que a janela de montagem é pequena.\n\nChegamos com cronograma fechado, equipe dimensionada e equipamentos adequados. Trabalhamos na madrugada quando necessário, sem atrasar a abertura das lojas. E cuidamos de cada planta e área verde como se fosse nossa.',
    },
    {
      tag: 'Redes de Lojas e Franquias',
      image: '/forma-e-luz-decoracao-de-natal-lojas.webp',
      alt: 'Decoração de Natal para rede de lojas e franquias São Paulo, Forma & Luz',
      title: 'Decoração de Natal para redes de lojas e franquias',
      desc: 'Cada unidade decorada com o mesmo conceito e o mesmo padrão, sem você precisar gerenciar fornecedores em cada ponto de venda.\n\nE a cada Natal, um conceito novo: sem guardar enfeites nas lojas, sem desgaste de estoque, sem repetir o mesmo projeto de anos anteriores.',
    },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container w-full" id="segmentos">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-ink text-center mb-16">
          Para cada espaço, um projeto sob medida.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group overflow-hidden rounded-2xl border border-brand-dark-green/10 bg-surface flex flex-col h-full hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
                <img
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={card.image}
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm text-brand-dark-green font-label-md text-label-md px-4 py-1.5 rounded-full shadow-sm">
                  {card.tag}
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="font-headline-sm text-headline-sm text-ink mb-4">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow whitespace-pre-line">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
