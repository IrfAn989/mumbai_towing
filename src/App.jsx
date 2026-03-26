import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import HeroSlideshow from './components/HeroSlideshow'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCtaBar from './components/MobileCtaBar'
import PopupCTA from './components/PopupCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-white pb-20 lg:pb-0">
      <Navbar />
      <main>
        <HeroSlideshow />
        <TrustBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCtaBar />
      <PopupCTA />
      <SpeedInsights />
    </div>
  )
}

export default App
