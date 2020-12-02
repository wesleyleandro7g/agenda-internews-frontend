import React from 'react'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const data = [
  {
    name: 'Ativos',
    quantidade: 65
  },
  {
    name: 'Parceiros',
    quantidade: 2
  },
  {
    name: 'Inadimplentens',
    quantidade: 7
  },
  {
    name: 'Protesto',
    quantidade: 2
  },
  {
    name: 'Congelados',
    quantidade: 5
  }
]

const BarVerticalChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={210}
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
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey="quantidade" barSize={10} fill="#413ea0" />
    </ComposedChart>
  )
}

export default BarVerticalChart
