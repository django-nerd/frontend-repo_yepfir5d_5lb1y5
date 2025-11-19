import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Dashboards from './components/Dashboards'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen app-bg text-white">
      <header className="sticky top-0 z-30 surface border-b border-subtle">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-amber-500" />
            <span className="font-semibold">TalentOps</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#dashboards" className="hover:text-white">Dashboards</a>
            <a href="#assistant" className="hover:text-white">AI Assistant</a>
          </nav>
          <a href="#dashboards" className="btn-ghost text-xs">Launch</a>
        </div>
      </header>

      <Hero />
      <FeatureGrid />
      <Dashboards />
      <CTA />

      <footer className="py-10 border-t border-subtle text-center text-white/60 text-sm">
        © {new Date().getFullYear()} TalentOps — Built with love.
      </footer>
    </div>
  )
}

export default App
