import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Concept from '@/components/Concept'
import Features from '@/components/Features'
import Progress from '@/components/Progress'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Concept />
        <Features />
        <Progress />
        <Team />
      </main>
      <Footer />
    </>
  )
}