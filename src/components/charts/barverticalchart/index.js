import React from 'react'
import {
  ComposedChart,
  Bar,
  // XAxis,
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
          left: 20
        }}
        fontSize={10}
      >
        <CartesianGrid stroke="#f5f5f5" />
        {/* <XAxis type="number" /> */}
        <YAxis dataKey="nome" type="category" />
        <Tooltip />
        <Bar dataKey="quantidade" barSize={10} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default BarVerticalChart
