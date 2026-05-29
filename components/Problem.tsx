export default function Problem() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-ink mb-6">
          Antes de pensar na decoração, você já pensou em onde vai guardar tudo depois?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A decoração de Natal pode ser o ponto mais bonito do seu espaço. Ou pode ser mais uma fonte de estresse, custo e responsabilidade. Depende de como você resolve.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-12 bg-brand-gold/40" />
          <span className="h-2 w-2 rotate-45 bg-brand-gold" />
          <span className="h-px w-12 bg-brand-gold/40" />
        </div>

        <div className="mt-12 bg-surface-container border border-brand-gold/20 rounded-2xl p-8 md:p-12 flex flex-col items-center gap-6 shadow-sm">
          <p className="font-headline-md text-headline-md text-brand-dark-green">
            A Forma &amp; Luz Concept foi criada para resolver exatamente isso.
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Prefere comprar em vez de alugar? A gente também vende.
          </p>
        </div>
      </div>
    </section>
  )
}
