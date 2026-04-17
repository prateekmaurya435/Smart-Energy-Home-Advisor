'use client'
import { Zap, TrendingDown, IndianRupee, Leaf, ArrowRight, Users, AlertTriangle, CheckCircle } from 'lucide-react'

export default function Dashboard({ setTab }) {
  const stats = [
    { label: 'Urban Households Can Benefit', value: '28 Cr+', icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Avg Annual Savings / Home', value: '₹5,000', icon: IndianRupee, color: 'bg-green-50 text-green-600' },
    { label: 'Average Bill Reduction Target', value: '40%', icon: TrendingDown, color: 'bg-orange-50 text-orange-600' },
  ]

  const topSavings = [
    { action: 'Reduce AC by 2 hrs/day', saving: '₹320/month', icon: '❄️' },
    { action: 'Add water heater timer', saving: '₹180/month', icon: '🚿' },
    { action: 'Star-rated refrigerator', saving: '₹140/month', icon: '🧊' },
  ]

  const benefits = [
    { title: 'Social', items: ['Empowers households with energy literacy', 'Simple enough for non-tech users', 'Bridges digital divide in energy mgmt'], icon: Users, color: 'blue' },
    { title: 'Economic', items: ['Save ₹680/month avg per household', '₹50,000 Cr waste reduction potential', 'No subscription fees — free to use'], icon: IndianRupee, color: 'green' },
    { title: 'Environmental', items: ['Reduce needless electricity consumption', 'Lower carbon footprint per home', 'Supports national energy efficiency goals'], icon: Leaf, color: 'emerald' },
  ]

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Innovathon 2026 · PS-AO7</span>
          <span className="bg-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full">Team Nextech · RR-41</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">Smart Household Energy Advisor</h1>
        <p className="text-blue-100 text-base mb-2 max-w-2xl">
          An AI-powered web app that analyzes household energy usage, predicts next month's bill, and gives actionable savings recommendations — from any phone or browser.
        </p>
        <p className="text-blue-200 text-sm mb-6">
          75% of Indian households don't understand their bills. We fix that with transparent per-appliance cost breakdowns, high-drain detection, and exact ₹ savings per action.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => setTab('analyze')} className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all">
            Analyze My Energy <ArrowRight size={16} />
          </button>
          <button onClick={() => setTab('about')} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
            Learn More
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card flex items-center gap-4">
            <div className={`p-3 rounded-xl ${s.color}`}>
              <s.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{s.value}</p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Problem Highlight */}
      <div className="card border-l-4 border-orange-400 bg-orange-50">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="text-orange-500 mt-1 shrink-0" size={20} />
          <div>
            <h3 className="font-semibold text-orange-800 mb-1">The Problem</h3>
            <p className="text-orange-700 text-sm">
              75% of Indian households don't understand their electricity bills. The app addresses this by providing transparent per-appliance cost breakdowns, identifying high-drain devices, and offering exact ₹ savings per action.
            </p>
          </div>
        </div>
      </div>

      {/* Top Savings Actions */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">⚡ Top Savings Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topSavings.map((s, i) => (
            <div key={i} className="card hover:shadow-md transition-shadow">
              <p className="text-3xl mb-3">{s.icon}</p>
              <p className="font-semibold text-slate-700 text-sm mb-2">{s.action}</p>
              <p className="text-green-600 font-bold text-lg">Save {s.saving}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3 text-green-700 font-semibold text-sm">
          💰 Total Potential Savings: <span className="text-green-800 text-base">₹640/month</span>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">🌟 Impact & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="card">
              <h3 className={`font-bold text-${b.color}-600 mb-3 flex items-center gap-2`}>
                <b.icon size={16} /> {b.title} Benefits
              </h3>
              <ul className="space-y-2">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Top Energy Consumers */}
      <div className="card">
        <h2 className="text-lg font-bold text-slate-800 mb-4">🔌 Top Energy Consumers in Indian Homes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'AC (1.5T)', pct: 48, color: 'bg-blue-500' },
            { name: 'Water Heater', pct: 22, color: 'bg-orange-500' },
            { name: 'Refrigerator', pct: 15, color: 'bg-green-500' },
            { name: 'Washing Machine', pct: 9, color: 'bg-purple-500' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3"
                    strokeDasharray={`${item.pct} ${100 - item.pct}`}
                    className={item.color.replace('bg-', 'text-')}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700">{item.pct}%</span>
              </div>
              <p className="text-xs font-medium text-slate-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
