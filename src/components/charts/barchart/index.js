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
        barSize={10}
        fontSize={10}
      >
        <XAxis dataKey="nome" scale="auto" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="quantidade"
          fill="#8884d8"
          background={{ fill: '#eee' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
