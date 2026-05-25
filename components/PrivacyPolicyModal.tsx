'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const policyText = `Política de Privacidade — Forma & Luz
Última atualização: 23 de maio de 2026

A Forma & Luz Decorações respeita a sua privacidade e leva a sério a proteção dos seus dados pessoais. Esta Política explica, de forma simples e direta, quais dados coletamos quando você entra em contato pelo nosso site, para que servem e quais são os seus direitos como titular, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).


1. Quem é o controlador dos dados
Forma & Luz Decorações Ltda. CNPJ: 29.030.511/0001-38  E-mail de contato: contato@formaeluz.com.br WhatsApp/Telefone: (11) 97355-9896.

A Forma & Luz é a controladora dos dados pessoais coletados por este site e é responsável por garantir que esses dados sejam tratados de acordo com a LGPD.


2. Quais dados coletamos
Coletamos apenas os dados que você nos fornece voluntariamente ao preencher o formulário de orçamento da nossa landing page:

• Nome
• Empresa ou condomínio
• Tipo de espaço (condomínio, shopping, espaço público, loja ou outro)
• Cidade
• WhatsApp/telefone
• Mensagem (campo opcional, com informações que você decidir compartilhar sobre o seu projeto)

Não utilizamos cookies de rastreamento, pixels de publicidade nem ferramentas de analytics neste site. Não coletamos dados de navegação, localização ou qualquer informação além do que você digita no formulário.


3. Para que usamos os seus dados
Os dados coletados são utilizados exclusivamente para:

• Entrar em contato com você para responder à sua solicitação de orçamento;
• Entender o escopo do seu projeto e elaborar uma proposta personalizada;
• Manter o histórico do atendimento, caso você queira retomar a conversa em uma próxima temporada.

Não enviamos comunicações de marketing, newsletters ou mensagens promocionais sem que você tenha pedido expressamente.


4. Base legal para o tratamento
O tratamento dos seus dados é realizado com base em duas hipóteses previstas na LGPD:

• Procedimentos preliminares relacionados a contrato (art. 7º, V) — quando você solicita um orçamento, precisamos dos seus dados para entrar em contato e avaliar a contratação;
• Consentimento (art. 7º, I) — ao enviar o formulário, você consente expressamente com o uso dos seus dados para os fins descritos acima.


5. Com quem compartilhamos seus dados
Não compartilhamos seus dados com terceiros. As informações ficam restritas à equipe interna da Forma & Luz responsável pelo atendimento comercial e pela elaboração de propostas.

Os dados podem ser fornecidos a autoridades públicas apenas se houver obrigação legal, ordem judicial ou requisição formal de órgão competente.


6. Por quanto tempo guardamos os seus dados
Mantemos seus dados pelo prazo de 12 meses a partir do último contato, período suficiente para acompanhar um ciclo completo da temporada de Natal. Após esse prazo, os dados são eliminados de forma segura, salvo se houver obrigação legal de retenção (por exemplo, registros fiscais quando o orçamento se converter em contrato).

Você pode solicitar a exclusão antes desse prazo a qualquer momento.


7. Como protegemos seus dados
Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. O acesso às informações é restrito aos profissionais que precisam delas para o atendimento.


8. Seus direitos como titular
A LGPD garante a você, a qualquer momento, os seguintes direitos:

• Confirmar se tratamos os seus dados;
• Acessar os dados que temos sobre você;
• Corrigir dados incompletos, desatualizados ou incorretos;
• Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade com a LGPD;
• Solicitar a portabilidade dos seus dados;
• Revogar o consentimento e pedir a exclusão dos seus dados;
• Obter informações sobre com quem compartilhamos seus dados (no nosso caso, com ninguém);
• Ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências da recusa.

Para exercer qualquer um desses direitos, basta enviar uma mensagem para contato@formaeluz.com.br identificando-se e indicando o pedido. Responderemos em até 15 dias.


9. Encarregado de Proteção de Dados (DPO)
O canal oficial para todas as questões relacionadas ao tratamento dos seus dados pessoais é:

E-mail: contato@formaeluz.com.br


10. Alterações desta Política
Esta Política pode ser atualizada periodicamente para refletir mudanças nos nossos serviços ou na legislação. A data da última revisão estará sempre indicada no topo do documento. Recomendamos consultá-la sempre que entrar em contato conosco pelo site.


11. Lei aplicável e foro
Esta Política é regida pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas decorrentes deste documento, com renúncia a qualquer outro, por mais privilegiado que seja.



Forma & Luz Decorações Ltda. — Decoração natalina corporativa em São Paulo.`

export default function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-4xl max-h-full bg-surface rounded-2xl shadow-2xl flex flex-col overflow-hidden text-ink"
          >
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-brand-dark-green/10">
              <h2 className="font-headline-md text-2xl text-brand-dark-green">Política de Privacidade</h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-full hover:bg-brand-dark-green/5 text-on-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-8 whitespace-pre-wrap font-body-md text-base leading-relaxed text-on-surface-variant">
              {policyText}
            </div>
            <div className="p-6 md:p-8 border-t border-brand-dark-green/10 flex justify-end">
              <button
                onClick={onClose}
                className="bg-brand-dark-green text-surface hover:bg-brand-dark-green/90 px-6 py-3 rounded font-label-md transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold w-full sm:w-auto"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
