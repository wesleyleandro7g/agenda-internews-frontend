import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="14"
      fontWeight="bold"
    >
      {percent > 0 && `${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const PieChartComponent = ({ data, COLORS }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx={'50%'}
          cy={'50%'}
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={'65%'}
          outerRadius={'100%'}
          fill="#8884d8"
          dataKey="quantidade"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent
