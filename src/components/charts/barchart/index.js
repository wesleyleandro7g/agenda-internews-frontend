import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={12}
        fontSize={12}
        style={{ textTransform: 'uppercase' }}
      >
        <XAxis dataKey="nome" scale="auto" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.85)',
            color: '#fff',
            textTransform: 'uppercase'
          }}
        />
        <CartesianGrid strokeDasharray="2 2" />
        <Bar
          dataKey="quantidade"
          fill="#006699" // 8884d8
          background={{ fill: '#eee' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
