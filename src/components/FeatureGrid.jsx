import React from 'react'
import { BarChart3, NotebookPen, Clock4, Users, Briefcase, FileText, Gauge, Megaphone, Ticket, Bot, Wallet } from 'lucide-react'

const features = [
  { icon: Gauge, title: 'Workforce Analytics', desc: 'Headcount, utilization, capacity planning, trends.' },
  { icon: NotebookPen, title: 'Attendance & Leave', desc: 'Smart check-in/out, leave requests, approvals.' },
  { icon: Clock4, title: 'Tasks & Timesheets', desc: 'Assignments, sprints, time tracking, summaries.' },
  { icon: Wallet, title: 'Payroll', desc: 'Payroll runs, slips, compliance-ready exports.' },
  { icon: Briefcase, title: 'Hiring ATS', desc: 'Jobs, applications, pipelines, collaborative review.' },
  { icon: FileText, title: 'AI Resume Parser', desc: 'Instant key info extraction and scoring.' },
  { icon: Users, title: 'Performance', desc: 'Goals, reviews, 1:1s, feedback loops.' },
  { icon: Megaphone, title: 'Announcements', desc: 'Targeted broadcasts with priority and expiry.' },
  { icon: Ticket, title: 'Support Tickets', desc: 'Issue intake, assignment, SLAs, resolution.' },
  { icon: Bot, title: 'Executive AI Assistant', desc: 'Narratives and actions from live org data.' },
]

export default function FeatureGrid() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card p-5 group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500/30 to-amber-500/30 text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
