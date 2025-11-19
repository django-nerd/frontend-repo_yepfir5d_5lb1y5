import React, { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

function Stat({ label, value, suffix }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-slate-300/80 text-sm">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}{suffix || ''}</div>
    </div>
  )
}

export default function Dashboards() {
  const [insights, setInsights] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${backend}/api/analytics/insights`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ horizon_days: 30 }) })
        const data = await res.json()
        setInsights(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const s = insights?.summary

  return (
    <section id="dashboards" className="py-16 bg-gradient-to-b from-black/20 to-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Dashboards</h2>
        <p className="text-slate-300/80 mt-2">Tailored overviews for Executives, Team Leads, and Employees.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Executive */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="px-5 py-3 border-b border-white/10 text-white/90 font-medium">Executive</div>
            <div className="p-5 grid grid-cols-2 gap-4">
              <Stat label="Workforce Size" value={s?.workforce_size ?? '–'} />
              <Stat label="Completion" value={s ? s.task_completion_rate : '–'} suffix="%" />
              <Stat label="Utilization" value={s ? s.utilization_pct : '–'} suffix="%" />
              <Stat label="Open Roles" value={s?.open_roles ?? '–'} />
              <Stat label="Active Tickets" value={s?.tickets_open ?? '–'} />
            </div>
          </div>

          {/* Team Lead */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="px-5 py-3 border-b border-white/10 text-white/90 font-medium">Team Lead</div>
            <div className="p-5 grid grid-cols-2 gap-4">
              <Stat label="Completion" value={s ? s.task_completion_rate : '–'} suffix="%" />
              <Stat label="Tickets" value={s?.tickets_open ?? '–'} />
              <Stat label="Utilization" value={s ? s.utilization_pct : '–'} suffix="%" />
              <Stat label="Time Horizon" value={s?.time_horizon_days ?? '–'} />
            </div>
          </div>

          {/* Employee */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="px-5 py-3 border-b border-white/10 text-white/90 font-medium">Employee</div>
            <div className="p-5 space-y-3 text-slate-300/90 text-sm">
              <div>• One-click check-in/out</div>
              <div>• Submit leave requests</div>
              <div>• Log timesheets</div>
              <div>• View announcements</div>
            </div>
          </div>
        </div>

        <div id="assistant" className="mt-8 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-amber-500/10 p-5">
          <div className="text-white/90 font-medium">Executive AI Assistant</div>
          <p className="text-slate-300/80 text-sm mt-1">Actionable insights from your live data.</p>
          <div className="mt-4 text-slate-200 text-sm leading-relaxed min-h-[64px]">
            {loading && 'Loading insights...'}
            {!loading && insights?.narrative}
          </div>
        </div>
      </div>
    </section>
  )
}
