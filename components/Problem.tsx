import { AlertTriangle, Banknote, Clock, UserX } from 'lucide-react'

export default function Problem() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-ink mb-6">
          Antes de pensar na decoração, você já pensou em onde vai guardar tudo depois?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A decoração de Natal pode ser o ponto mais bonito do seu espaço. Ou pode ser mais uma fonte de estresse, custo e responsabilidade. Depende de como você resolve.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container p-8 border-t-2 border-primary-container flex flex-col gap-4">
          <Banknote className="text-primary w-8 h-8" />
          <h3 className="font-headline-sm text-headline-sm text-ink">Custo que não para</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Comprar enfeite caro para usar 30 dias no ano. Árvores, luzes, estruturas. Tudo com prazo de validade, tudo ocupando espaço no depósito nos outros 11 meses. E a cada ano que passa, a decoração envelhece, e fica cada vez mais fora do padrão do seu espaço.
          </p>
        </div>
        <div className="bg-surface-container p-8 border-t-2 border-primary-container flex flex-col gap-4">
          <AlertTriangle className="text-primary w-8 h-8" />
          <h3 className="font-headline-sm text-headline-sm text-ink">O risco que ninguém quer assumir</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Montar decoração em altura sem equipe treinada. Funcionários sem treinamento específico, sem EPI adequado, subindo em escadas instáveis. Um acidente e a responsabilidade é sua. É um risco que nenhum síndico ou gestor deveria correr.
          </p>
        </div>
        <div className="bg-surface-container p-8 border-t-2 border-primary-container flex flex-col gap-4">
          <UserX className="text-primary w-8 h-8" />
          <h3 className="font-headline-sm text-headline-sm text-ink">O fornecedor que some</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Contratar e torcer para que apareça na manutenção. Empresa pequena, sem estrutura. Monta rápido, some depois. Uma lâmpada queimada em dezembro vira um problema de semanas. E você ainda precisa perseguir o fornecedor.
          </p>
        </div>
        <div className="bg-surface-container p-8 border-t-2 border-primary-container flex flex-col gap-4">
          <Clock className="text-primary w-8 h-8" />
          <h3 className="font-headline-sm text-headline-sm text-ink">Tempo que o gestor não tem</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Coordenar tudo isso no meio do fim de ano. Orçamentos, contratos, cronogramas, alvarás, coordenação com a administração. Tudo isso no período mais movimentado do ano, quando você já tem dezenas de outras demandas.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center flex flex-col items-center gap-6">
        <p className="font-headline-md text-headline-md text-brand-dark-green border-b border-brand-gold pb-6 inline-block px-4">
          A Forma &amp; Luz foi criada para resolver exatamente isso.
        </p>
        <p className="font-headline-md text-headline-md text-brand-dark-green inline-block px-4">
          Prefere comprar em vez de alugar? A gente também vende.
        </p>
      </div>
    </section>
  )
}
