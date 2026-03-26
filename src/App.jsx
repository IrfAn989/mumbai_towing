import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import HeroSlideshow from './components/HeroSlideshow'
import TrustBar from './components/TrustBar'

// Lazy load below-the-fold components for better performance
const Services = lazy(() => import('./components/Services'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const ServiceAreas = lazy(() => import('./components/ServiceAreas'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))
const MobileCtaBar = lazy(() => import('./components/MobileCtaBar'))
const PopupCTA = lazy(() => import('./components/PopupCTA'))

// Minimal loading fallback
const LoadingFallback = () => <div className="min-h-[200px]" aria-hidden="true" />

function App() {
  return (
    <div className="min-h-screen w-full bg-white pb-20 lg:pb-0">
      <Navbar />
      <main>
        <HeroSlideshow />
        <TrustBar />
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <WhyUs />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <ServiceAreas />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <MobileCtaBar />
        <PopupCTA />
      </Suspense>
    </div>
  )
}

export default App
