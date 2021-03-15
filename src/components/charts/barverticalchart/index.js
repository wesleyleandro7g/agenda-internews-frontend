import React from 'react'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const BarVerticalChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        data={data}
        margin={{
          top: 0,
          right: 20,
          bottom: 20,
          left: 50
        }}
        fontSize={10}
        style={{
          textTransform: 'uppercase'
        }}
      >
        <CartesianGrid strokeDasharray="2 2" horizontal={false} />
        <XAxis type="number" />
        <YAxis dataKey="nome" type="category" />
        <Tooltip
          contentStyle={{
            background: 'rgba(0, 0, 0, 0.9)',
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: 12,
            height: 80
          }}
        />
        <Bar dataKey="quantidade" barSize={100} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default BarVerticalChart
