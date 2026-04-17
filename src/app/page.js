'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import InputForm from './components/InputForm'
import Results from './components/Results'
import AboutSection from './components/AboutSection'

export default function Home() {
  const [tab, setTab] = useState('home')
  const [energyData, setEnergyData] = useState(null)

  const handleFormSubmit = (data) => {
    setEnergyData(data)
    setTab('results')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar tab={tab} setTab={setTab} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {tab === 'home' && <Dashboard setTab={setTab} />}
        {tab === 'analyze' && <InputForm onSubmit={handleFormSubmit} />}
        {tab === 'results' && <Results data={energyData} setTab={setTab} />}
        {tab === 'about' && <AboutSection />}
      </main>
    </div>
  )
}
