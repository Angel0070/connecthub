'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { day: 'Mon', connections: 12, messages: 8 },
  { day: 'Tue', connections: 19, messages: 15 },
  { day: 'Wed', connections: 15, messages: 12 },
  { day: 'Thu', connections: 27, messages: 22 },
  { day: 'Fri', connections: 34, messages: 28 },
  { day: 'Sat', connections: 42, messages: 35 },
  { day: 'Sun', connections: 38, messages: 30 },
]

export function ActivityChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
        📊 Активность за неделю
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: 8 }}
            labelStyle={{ color: '#fff' }}
          />
          <Line type="monotone" dataKey="connections" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="messages" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-center text-gray-400 mt-2">
        Новые связи (синий) и сообщения (зеленый)
      </p>
    </div>
  )
}