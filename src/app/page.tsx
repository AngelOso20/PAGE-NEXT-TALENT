import NavMenu from '@/components/NavMenu/NavMenu'
import HeroSection from '@/components/HeroSection/HeroSection'
import PlansSection from '@/components/PlansSection/PlansSection'
import ProblemSection from '@/components/ProblemSection/ProblemSection'
import SolutionSection from '@/components/SolutionSection/SolutionSection'
import ImpactSection from '@/components/ImpactSection/ImpactSection'
import SavingsSection from '@/components/SavingsSection/SavingsSection'
import BlogSection from '@/components/BlogSection/BlogSection'

export default function Home() {
  return (
    <main>
      <NavMenu />
      <HeroSection />
      <PlansSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <SavingsSection />
      <BlogSection />
    </main>
  )
}

