import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AvaIA from './components/AvaIA.jsx'
import WhatIsPlayer from './components/WhatIsPlayer.jsx'
import Squad from './components/Squad.jsx'
import Method from './components/Method.jsx'
import Evolution from './components/Evolution.jsx'
import DeveloperPath from './components/DeveloperPath.jsx'
import Leadership from './components/Leadership.jsx'
import Partners from './components/Partners.jsx'
import Stacks from './components/Stacks.jsx'
import SignupForm from './components/SignupForm.jsx'
import FAQ from './components/FAQ.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import PrivacyPage from './components/PrivacyPage.jsx'
import TermsPage from './components/TermsPage.jsx'

// Hash routing simple. Rutas: "" (landing) | "#/privacidad" | "#/terminos"
function getRoute() {
  const h = window.location.hash || ''
  if (h.startsWith('#/privacidad')) return 'privacy'
  if (h.startsWith('#/terminos')) return 'terms'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === 'privacy') {
    return (
      <>
        <Navbar />
        <main><PrivacyPage /></main>
        <SiteFooter />
      </>
    )
  }

  if (route === 'terms') {
    return (
      <>
        <Navbar />
        <main><TermsPage /></main>
        <SiteFooter />
      </>
    )
  }

  // Default: landing
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AvaIA />
        <WhatIsPlayer />
        <Squad />
        <Method />
        <Evolution />
        <DeveloperPath />
        <Leadership />
        <Partners />
        <Stacks />
        <SignupForm />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
