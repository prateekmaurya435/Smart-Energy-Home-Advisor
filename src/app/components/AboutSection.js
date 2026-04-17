'use client'
import { CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react'

export default function AboutSection() {
  const techStack = [
    {
      label: 'Frontend', color: 'blue',
      items: ['React.js / Next.js', 'Recharts (Charts)', 'Tailwind CSS', 'PWA Design']
    },
    {
      label: 'Backend', color: 'green',
      items: ['Node.js + Express', 'REST API', 'JWT Auth', 'Data Validation']
    },
    {
      label: 'ML / Analytics', color: 'orange',
      items: ['Python + Scikit-learn', 'Linear Regression', 'Pandas Processing', '6-Month Trend']
    },
    {
      label: 'Database', color: 'purple',
      items: ['MongoDB / Firebase', 'User Profiles', 'Usage History', 'Real-time Sync']
    },
  ]

  const implementationFlow = [
    { step: '01', title: 'User Inputs', desc: 'Units, Bill, Appliances, Hours' },
    { step: '02', title: 'Calculates', desc: 'Per-appliance cost breakdown' },
    { step: '03', title: 'ML Predicts', desc: '6-month trend → next bill' },
    { step: '04', title: 'AI Detects', desc: 'Top 3 high-drain appliances' },
    { step: '05', title: 'Recommends', desc: '3–5 tips with exact ₹ savings' },
  ]

  const feasibility = [
    'All open-source tech stack — no costly licenses needed',
    'Mobile-first PWA — works on any device without app install',
    'MVP possible within hackathon timeline with manual data entry',
    'Scalable to 28 Cr+ urban Indian households',
  ]

  const challenges = [
    { problem: 'Data accuracy from manual user input', solution: 'Input validation + guided smart form with defaults' },
    { problem: 'ML model cold-start (no historical data)', solution: 'Pre-trained model on public datasets; improves with usage' },
    { problem: 'User adoption in low-tech households', solution: 'Simple UI, vernacular language support planned' },
    { problem: 'Localization for different state tariffs', solution: 'Configurable tariff settings per state/region' },
  ]

  const references = [
    {
      title: 'India Energy Outlook 2021 — IEA',
      url: 'https://www.iea.org/reports/india-energy-outlook-2021',
      desc: 'Statistics on Indian household energy consumption patterns & inefficiency estimates'
    },
    {
      title: 'Bureau of Energy Efficiency (BEE) — India',
      url: 'https://beeindia.gov.in/',
      desc: 'Appliance star ratings, energy efficiency norms & household consumption data'
    },
    {
      title: 'Scikit-learn: Machine Learning in Python',
      url: 'https://scikit-learn.org/stable/',
      desc: 'Linear Regression model used for 6-month bill prediction'
    },
    {
      title: 'React.js Documentation',
      url: 'https://react.dev/',
      desc: 'Frontend framework used for mobile-first PWA design'
    },
    {
      title: 'NITI Aayog — Residential Energy Consumption Survey',
      url: 'https://www.niti.gov.in/',
      desc: 'Data on ₹50,000 Cr annual avoidable energy waste in Indian households'
    },
    {
      title: 'MongoDB Documentation',
      url: 'https://www.mongodb.com/docs/',
      desc: 'Database for storing user profiles, appliance data and usage history'
    },
  ]

  const colorMap = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="flex gap-3 mb-3 flex-wrap">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Problem Statement: PS-AO7</span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Team: Nextech · RR-41</span>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Innovathon 2026 · HACKLANCE</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">Smart Household Energy Advisor</h2>
        <p className="text-slate-300 text-sm max-w-2xl">
          Combines ML-based bill prediction (Linear Regression, 6-month trend) + rule-based high-drain detection + personalized ₹ savings optimizer — all in one mobile-first PWA with zero external API dependency.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">🛠 Technical Approach</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {techStack.map((t, i) => (
            <div key={i} className={`rounded-xl p-4 border ${colorMap[t.color]}`}>
              <p className="font-bold text-sm mb-2">{t.label}</p>
              <ul className="space-y-1">
                {t.items.map((item, j) => (
                  <li key={j} className="text-xs opacity-90">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Implementation Flow */}
        <h4 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Implementation Flow</h4>
        <div className="flex flex-wrap gap-2 items-center">
          {implementationFlow.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center min-w-[110px] shadow-sm">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center justify-center mx-auto mb-2">{f.step}</div>
                <p className="font-semibold text-slate-700 text-xs">{f.title}</p>
                <p className="text-slate-400 text-xs mt-1">{f.desc}</p>
              </div>
              {i < implementationFlow.length - 1 && (
                <div className="text-slate-300 font-bold text-xl hidden md:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Feasibility */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">✅ Feasibility & Viability</h3>
        <div className="card mb-4">
          <ul className="space-y-3">
            {feasibility.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
              <AlertTriangle size={14} className="text-orange-500" /> Potential Challenges
            </h4>
            <div className="space-y-2">
              {challenges.map((c, i) => (
                <div key={i} className="bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-xs text-red-700">{c.problem}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
              <CheckCircle size={14} className="text-green-500" /> Strategies to Overcome
            </h4>
            <div className="space-y-2">
              {challenges.map((c, i) => (
                <div key={i} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs text-green-700">{c.solution}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* References */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-4">📚 Research & References</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {references.map((r, i) => (
            <div key={i} className="card hover:shadow-md transition-shadow">
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-blue-600 font-semibold text-sm hover:underline mb-1">
                {r.title} <ExternalLink size={12} className="mt-0.5 shrink-0" />
              </a>
              <p className="text-xs text-slate-400 italic mb-1">{r.url}</p>
              <p className="text-xs text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Innovation */}
      <div className="card border-l-4 border-blue-500 bg-blue-50">
        <h3 className="font-bold text-blue-800 mb-2">🚀 Innovation & Uniqueness</h3>
        <p className="text-blue-700 text-sm">
          Combines <strong>ML-based bill prediction</strong> (Linear Regression, 6-month trend) + <strong>rule-based high-drain detection</strong> + <strong>personalized ₹ savings optimizer</strong> — all in one mobile-first PWA with <strong>zero external API dependency</strong>.
        </p>
      </div>
    </div>
  )
}
