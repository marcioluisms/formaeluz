import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Segments from '@/components/Segments'
import Portfolio from '@/components/Portfolio'
import Differentials from '@/components/Differentials'
import Clients from '@/components/Clients'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Segments />
        <Portfolio />
        <Differentials />
        <Clients />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
