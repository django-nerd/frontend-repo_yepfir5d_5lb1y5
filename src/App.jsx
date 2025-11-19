import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Dashboards from './components/Dashboards'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-amber-500" />
            <span className="font-semibold">TalentOps</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300/90">
            <a href="#dashboards" className="hover:text-white">Dashboards</a>
            <a href="#assistant" className="hover:text-white">AI Assistant</a>
          </nav>
          <a href="#dashboards" className="text-xs px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20">Launch</a>
        </div>
      </header>

      <Hero />
      <FeatureGrid />
      <Dashboards />
      <CTA />

      <footer className="py-10 border-t border-white/10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} TalentOps — Built with love.
      </footer>
    </div>
  )
}

export default App
