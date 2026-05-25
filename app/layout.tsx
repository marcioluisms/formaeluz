import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forma & Luz | Decoração de Natal Corporativa em São Paulo',
  description:
    'Decoração de Natal para empresas, shoppings, condomínios e espaços públicos em São Paulo. Projeto personalizado, montagem, manutenção e desmontagem. Solicite um orçamento.',
  keywords:
    'decoração de natal corporativa, decoração natalina para empresas, decoração natal São Paulo, decoração natal shopping, iluminação natalina, decoração natal condomínio',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.formaeluz.com.br/' },
  openGraph: {
    type: 'website',
    url: 'https://www.formaeluz.com.br/',
    title: 'Forma & Luz | Decoração de Natal Corporativa em São Paulo',
    description:
      'Do projeto à desmontagem, sem complicação. Decoração natalina para empresas, shoppings e condomínios em São Paulo.',
    images: [
      {
        url: 'https://www.formaeluz.com.br/forma-e-luz-decoracao-de-natal-capa.webp',
        width: 1200,
        height: 630,
        alt: 'Forma & Luz – Decoração de Natal Corporativa em São Paulo',
      },
    ],
    locale: 'pt_BR',
    siteName: 'Forma & Luz Decorações',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forma & Luz | Decoração de Natal Corporativa em São Paulo',
    description:
      'Do projeto à desmontagem, sem complicação. Decoração natalina para empresas, shoppings e condomínios em São Paulo.',
    images: ['https://www.formaeluz.com.br/forma-e-luz-decoracao-de-natal-capa.webp'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Forma & Luz Decorações',
  description:
    'Empresa especializada em decoração de Natal corporativa para empresas, shoppings, condomínios, prefeituras e espaços públicos em São Paulo. Serviço completo: projeto, montagem, manutenção e desmontagem.',
  url: 'https://www.formaeluz.com.br',
  telephone: '+55-11-97355-9896',
  email: 'contato@formaeluz.com.br',
  logo: 'https://www.formaeluz.com.br/favicon.png',
  image: 'https://www.formaeluz.com.br/forma-e-luz-decoracao-de-natal-capa.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'São Paulo e Região Metropolitana',
  },
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para Google Fonts — elimina latência de DNS/TLS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Carregar fontes com display=swap para não bloquear renderização */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
