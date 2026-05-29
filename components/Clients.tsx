const clients = [
  { name: 'Clube Paineiras', src: '/cliente-paineiras.webp' },
  { name: 'Volkswagen', src: '/cliente-volks.webp' },
  { name: 'B3', src: '/cliente-b3.webp' },
  { name: 'Banco do Brasil', src: '/cliente-bb.webp' },
  { name: 'Brookfield', src: '/cliente-brookfield.webp' },
  { name: 'Globo', src: '/cliente-globo.webp' },
  { name: 'Holambra', src: '/cliente-holambra.webp' },
  { name: 'Itaú', src: '/cliente-itau.webp' },
  { name: 'Mackenzie', src: '/cliente-mackenzie.webp' },
  { name: 'MSC', src: '/cliente-msc.webp' },
  { name: 'Netflix', src: '/cliente-netflix.webp' },
]

export default function Clients() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-brand-dark-green border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-surface/80 mb-12">
          Eles já passaram o Natal nas mãos da Forma &amp; Luz Concept.
        </h2>
        <div className="relative flex overflow-hidden min-h-[100px] w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center w-max animate-infinite-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex-shrink-0 flex items-center justify-center mx-4 sm:mx-8 md:mx-10"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
