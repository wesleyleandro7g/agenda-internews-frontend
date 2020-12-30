import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

// const data = [
//   { name: 'Supermercado', value: 12 },
//   { name: 'Farmácia', value: 15 },
//   { name: 'Vidraçaria', value: 4 },
//   { name: 'Contrução', value: 6 }
// ]

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={4} textAnchor="middle" fill={fill} fontSize={14}>
        {payload.nome}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontSize={12}
      >{`Total ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
        fontSize={10}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  )
}
const ActiveShapePieChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (data, index) => {
    setActiveIndex(index)
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={'50%'}
          cy={'40%'}
          innerRadius={'50%'}
          outerRadius={'60%'}
          fill="#8884d8"
          dataKey="quantidade"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default ActiveShapePieChart
