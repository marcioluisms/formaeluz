import { Phone, Mail, Clock } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

export default function Contact() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-brand-dark-green relative overflow-hidden" id="orcamento">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#6c511a 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="max-w-5xl mx-auto relative z-10 bg-surface p-8 md:p-12 shadow-xl rounded-2xl border border-brand-gold/20 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="font-headline-md text-headline-md text-ink mb-4">
            Solicite seu orçamento. Sem compromisso.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Decoração de Natal completa para o seu espaço, do projeto à desmontagem. Fale pelo WhatsApp ou preencha o formulário abaixo.
          </p>
          <div className="bg-brand-dark-green text-surface p-6 rounded-2xl border border-brand-gold/30">
            <h3 className="font-headline-sm text-headline-sm mb-2 text-brand-gold">A forma mais rápida de começar</h3>
            <p className="font-body-md text-body-md mb-6 opacity-90">
              A maioria dos nossos projetos começa com uma mensagem de texto. Mande o tipo e o tamanho do espaço, a gente responde com as próximas etapas.
            </p>
            <a
              className="flex justify-center font-label-md text-label-md items-center gap-2 bg-brand-gold text-brand-dark-green px-6 py-3 rounded hover:bg-brand-gold/90 transition-colors w-full sm:w-max"
              href="https://wa.me/5511973559896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              Falar pelo WhatsApp: (11) 97355-9896
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-gold" />
              <span>(11) 97355-9896</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold" />
              <span>contato@formaeluz.com.br</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-gold" />
              <span>Segunda a sexta, das 9h às 18h. Atendimento por WhatsApp também nos fins de semana.</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form action="https://formsubmit.co/contato@formaeluz.com.br" method="POST" className="flex flex-col gap-6">
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">Nome</label>
              <input
                name="Nome"
                className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors outline-none"
                placeholder="Ex: Maria Silva"
                type="text"
                required
              />
            </div>
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">Empresa/Condomínio</label>
              <input
                name="Empresa_Condominio"
                className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors outline-none"
                placeholder="Ex: Condomínio Central ou Rede XYZ"
                type="text"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">Tipo de espaço</label>
                <input
                  name="Tipo_Espaco"
                  className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors outline-none"
                  placeholder="Condomínio / Shopping / Espaço público / Loja / Outro"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">Cidade</label>
                <input
                  name="Cidade"
                  className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors outline-none"
                  placeholder="Ex: São Paulo"
                  type="text"
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">WhatsApp/Telefone</label>
              <input
                name="WhatsApp"
                className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors outline-none"
                placeholder="Ex: (11) 99999-9999"
                type="tel"
                required
              />
            </div>
            <div>
              <label className="font-label-md text-label-md text-on-surface-variant mb-1 block">Mensagem</label>
              <textarea
                name="Mensagem"
                className="w-full bg-surface border-0 border-b-2 border-brand-dark-green/20 focus:border-brand-gold focus:ring-0 px-0 py-2 font-body-md text-ink placeholder-on-surface-variant/50 transition-colors resize-none outline-none"
                placeholder="Ex: Temos um hall de entrada de 8m de pé-direito..."
                rows={3}
              />
            </div>
            <button
              className="bg-primary text-on-primary py-4 px-8 font-label-md text-label-md rounded hover:opacity-90 transition-opacity mt-2 cursor-pointer w-full"
              type="submit"
            >
              Enviar
            </button>
            <p className="text-sm text-center text-on-surface-variant/80 mt-2">
              Seus dados são usados apenas para entrar em contato com você. Não compartilhamos com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
