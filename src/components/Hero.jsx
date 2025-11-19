import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 app-bg" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_40%,rgba(168,85,247,0.18),rgba(59,130,246,0.1)_40%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 ring-1 ring-white/10 backdrop-blur">
            Talent Ops Platform • Realtime • AI Insights
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
            Orchestrate your workforce with clarity
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Dashboards for Executives, Team Leads, and Employees. Analytics, attendance, tasks, timesheets, payroll, ATS, resume parsing, performance, announcements, tickets, and more.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#dashboards" className="btn-primary focus-ring">Explore Dashboards</a>
            <a href="#assistant" className="btn-ghost focus-ring">Executive AI Assistant</a>
          </div>
        </div>
      </div>

      <div className="relative h-[420px] md:h-[520px]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  )
}
