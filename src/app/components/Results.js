'use client'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, AlertTriangle, CheckCircle, ArrowLeft, IndianRupee } from 'lucide-react'

const COLORS = ['#1a56db', '#f97316', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b']
const MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Predicted']

export default function Results({ data, setTab }) {
  if (!data) return (
    <div className="text-center py-20">
      <p className="text-slate-500">No data yet. Please fill the analysis form first.</p>
      <button onClick={() => setTab('analyze')} className="btn-primary mt-4">Go to Analyze</button>
    </div>
  )

  const { appliances, state, members, tariff, totalUnits, calculatedBill, lastBill, predicted, trend, recommendations } = data

  const trendData = trend.map((v, i) => ({ month: MONTHS[i], bill: Math.round(v) }))

  const pieData = appliances.slice(0, 5).map(a => ({ name: a.name, value: Math.round(a.cost) }))

  const totalSavings = recommendations.reduce((s, r) => s + r.saving, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => setTab('analyze')} className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-600">
          <ArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Your Energy Report</h2>
          <p className="text-slate-500 text-sm">{state} · {members} members · ₹{tariff}/unit</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Units Used', value: `${totalUnits} kWh`, color: 'blue', icon: '⚡' },
          { label: 'Estimated Bill', value: `₹${calculatedBill}`, color: 'orange', icon: '📄' },
          { label: 'Predicted Next Month', value: `₹${predicted}`, color: 'red', icon: '📈' },
          { label: 'Potential Savings', value: `₹${totalSavings}/mo`, color: 'green', icon: '💰' },
        ].map((s, i) => (
          <div key={i} className={`card border-t-4 border-${s.color}-500`}>
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-xl font-bold text-slate-800">{s.value}</p>
            <p className="text-xs text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Bill Trend (ML Prediction) */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-blue-600" />
          <h3 className="font-semibold text-slate-700">6-Month Bill Trend + ML Prediction</h3>
          <span className="ml-auto bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">Linear Regression</span>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(v) => [`₹${v}`, 'Bill']} />
            <Line type="monotone" dataKey="bill" stroke="#1a56db" strokeWidth={2.5}
              dot={(props) => {
                const { cx, cy, index } = props
                return index === 6
                  ? <circle key={index} cx={cx} cy={cy} r={6} fill="#f97316" stroke="white" strokeWidth={2} />
                  : <circle key={index} cx={cx} cy={cy} r={4} fill="#1a56db" />
              }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-400 mt-2">🟠 Orange dot = ML predicted next month bill</p>
      </div>

      {/* Per Appliance Cost Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold text-slate-700 mb-4">🔌 Cost Per Appliance (₹/month)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={appliances.slice(0, 6).map(a => ({ name: a.name.split(' ')[0], cost: Math.round(a.cost) }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v) => [`₹${v}`, 'Cost']} />
              <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                {appliances.slice(0, 6).map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="font-semibold text-slate-700 mb-4">📊 Energy Share by Appliance</h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={70} dataKey="value" label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`} labelLine={false} fontSize={10}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v) => [`₹${v}`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* High Drain Detection */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-orange-500" />
          <h3 className="font-semibold text-slate-700">🔴 AI-Detected High-Drain Appliances (Top 3)</h3>
        </div>
        <div className="space-y-3">
          {appliances.slice(0, 3).map((a, i) => (
            <div key={i} className="flex items-center gap-4 bg-orange-50 rounded-xl px-4 py-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${i === 0 ? 'bg-red-500' : i === 1 ? 'bg-orange-500' : 'bg-yellow-500'}`}>
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-700 text-sm">{a.name}</p>
                <p className="text-xs text-slate-500">{a.watts}W · {a.hours} hrs/day · {Math.round(a.units)} kWh/month</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-orange-600">₹{Math.round(a.cost)}/mo</p>
                <p className="text-xs text-slate-400">{Math.round((a.cost / calculatedBill) * 100)}% of bill</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={18} className="text-green-500" />
          <h3 className="font-semibold text-slate-700">💡 AI Savings Recommendations</h3>
        </div>
        <div className="space-y-3">
          {recommendations.map((r, i) => (
            <div key={i} className="flex items-center gap-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
              <span className="text-2xl">{r.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-slate-700 text-sm">{r.tip}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">Save ₹{r.saving}/mo</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-green-600 text-white rounded-xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IndianRupee size={18} />
            <span className="font-semibold">Total Potential Monthly Savings</span>
          </div>
          <span className="text-2xl font-bold">₹{totalSavings}/mo</span>
        </div>
      </div>

      {/* Full Appliance Table */}
      <div className="card">
        <h3 className="font-semibold text-slate-700 mb-4">📋 Complete Appliance Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 uppercase border-b border-slate-100">
                <th className="text-left py-2 pr-4">Appliance</th>
                <th className="text-right py-2 pr-4">Watts</th>
                <th className="text-right py-2 pr-4">Hrs/Day</th>
                <th className="text-right py-2 pr-4">Units/Month</th>
                <th className="text-right py-2">Cost/Month</th>
              </tr>
            </thead>
            <tbody>
              {appliances.map((a, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-2 pr-4 font-medium text-slate-700">{a.name}</td>
                  <td className="text-right py-2 pr-4 text-slate-500">{a.watts}W</td>
                  <td className="text-right py-2 pr-4 text-slate-500">{a.hours}h</td>
                  <td className="text-right py-2 pr-4 text-slate-500">{Math.round(a.units)} kWh</td>
                  <td className="text-right py-2 font-semibold text-slate-700">₹{Math.round(a.cost)}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold">
                <td className="py-2 pr-4 text-blue-700">TOTAL</td>
                <td className="py-2 pr-4"></td>
                <td className="py-2 pr-4"></td>
                <td className="text-right py-2 pr-4 text-blue-700">{totalUnits} kWh</td>
                <td className="text-right py-2 text-blue-700">₹{calculatedBill}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
