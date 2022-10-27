import { useCallback, useState } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  PieLabel,
  Legend,
} from 'recharts'
import styled from 'styled-components'
import { PresencesSubject } from '../../interfaces/presencesSubjectInterface'

type PresenceForSubjectProps = {
  className?: string;
  room?: string;
  percentValue?: number;
  color?: string;
  data: any;
};



const RADIAN = Math.PI / 180
const renderCustomizedLabel: PieLabel<any> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}


const PresenceForSubject = ({
  className,
  data
}: PresenceForSubjectProps) => {
  const COLORS: Array<string> = data.map((item: any) => item.codigo_cor)
  return (
    <div className={className}>
      <div className="title-div">
        <span>Presença por matéria</span>
      </div>
      <p>Matéria destaque em presenças concluídas</p>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <PieChart>
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={5}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={115}
              dataKey="value"
            >
              {data.map((index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default styled(PresenceForSubject)`
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  padding: 20px;
  .content {
    width: 100%;
    height: 100%;
    > h4 {
      font-size: 18px;
      font-family: "Poppins";
    }
    > .students {
      font-size: 16px;
      padding: 0;
    }
    > .variation {
      font-size: 16px;
      padding: 0px;
    }
  }

  .title-div {
    min-width: 100%;
    height: auto;
    font-size: 18px;
    font-weight: 500;
  }
`
