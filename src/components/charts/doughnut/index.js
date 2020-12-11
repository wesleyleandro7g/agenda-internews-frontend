import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#00C49F', '#e6fffa']

const renderCustomizedLabel = ({ name, percent }) => {
  return (
    <text
      x={'37%'}
      y={'40%'}
      fill="#00C49F"
      dominantBaseline="central"
      fontSize="35"
    >
      {name === 'atendidos' && `${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const Doughnut = ({ data, percentage }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx={'50%'}
          cy={'40%'}
          startAngle={90}
          endAngle={-360}
          innerRadius={'70%'}
          outerRadius={'80%'}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Doughnut
