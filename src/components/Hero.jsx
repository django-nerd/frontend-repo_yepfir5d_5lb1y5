import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-[#0b0b1a] via-[#0f132b] to-[#0b0b1a]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_40%,rgba(168,85,247,0.15),rgba(59,130,246,0.08)_40%,transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 ring-1 ring-white/10 backdrop-blur">
            Talent Ops Platform • Realtime • AI Insights
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-sky-200 to-amber-200">
            Orchestrate your workforce with clarity
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300/80 max-w-2xl mx-auto">
            Dashboards for Executives, Team Leads, and Employees. Analytics, attendance, tasks, timesheets, payroll, ATS, resume parsing, performance, announcements, tickets, and more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#dashboards" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-white transition shadow-lg shadow-violet-500/20">
              Explore Dashboards
            </a>
            <a href="#assistant" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition ring-1 ring-white/15">
              Executive AI Assistant
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-[420px] md:h-[520px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  )
}
