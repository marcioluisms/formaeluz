import Countdown from './Countdown'
import { WhatsAppIcon } from './WhatsAppIcon'

export default function Hero() {
  return (
    <section
      className="relative min-h-[105vh] flex flex-col pt-24 pb-20 px-margin-mobile md:px-margin-desktop bg-black text-surface bg-cover bg-bottom"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/forma-e-luz-decoracao-de-natal-capa.webp')",
      }}
    >
      {/* Preload hint para a imagem LCP */}
      <link
        rel="preload"
        as="image"
        href="/forma-e-luz-decoracao-de-natal-capa.webp"
      />
      <div className="max-w-container-max mx-auto w-full relative z-10 flex flex-col items-center text-center gap-8 flex-1 justify-end">
        <h1 className="font-display-lg text-display-md text-brand-gold max-w-4xl">
          Decoração de Natal para o seu espaço
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl text-surface-variant">
          Do projeto à desmontagem, sem complicação.
        </p>
        <a
          className="bg-primary text-on-primary hover:opacity-90 transition-opacity px-8 py-4 rounded font-label-md text-label-md flex items-center justify-center gap-2 shadow-lg w-full sm:w-max"
          href="https://wa.me/5511973559896"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          Solicitar orçamento
        </a>
        <Countdown />
      </div>
    </section>
  )
}
