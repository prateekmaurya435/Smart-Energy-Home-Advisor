'use client'
import { Zap } from 'lucide-react'

export default function Navbar({ tab, setTab }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'analyze', label: 'Analyze' },
    { id: 'results', label: 'Results' },
    { id: 'about', label: 'About' },
  ]

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Zap size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm leading-none">Smart Energy Advisor</p>
            <p className="text-xs text-slate-400">Team Nextech · PS-AO7</p>
          </div>
        </div>
        <div className="flex gap-1">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => setTab(l.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === l.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
