import styled from 'styled-components'
import { PieChart, Pie, Cell, Label, Legend } from 'recharts'
import { DailyAbsenceChart } from '../../interfaces/interfaces'
import { useCallback, useEffect, useState } from 'react'

type DailyAbsenceProps = {
  className?: string;
  room?: string;
  percentValue?: number;
  color?: string;
  data: DailyAbsenceChart[] | undefined;
};

const DailyAbsence = ({
  className,
  room,
  percentValue,
  color,
  data
}: DailyAbsenceProps) => {

  const [percent, setPercent] = useState<string>()

  const handlePercent = useCallback(() => {
    setPercent((((data![1].value * 100)) / data![0].value).toFixed(2))
  }, [data])

  useEffect(() => {
    handlePercent()
  },[data, handlePercent])

  return (
    <div className={className}>
      <div className="title-div d-flex justify-content-between">
        <span>Ausência diária</span>
        <span style={{ color: '#9E7BE9' }}>{percent}%</span>
      </div>
      <p>Média geral da escola</p>
      <div className="d-flex justify-content-center">
        <PieChart width={300} height={280}>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconSize={5}
          />
          <Pie
            data={data}
            innerRadius={90}
            outerRadius={115}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Label className="value-label" value={`${ (((data![1].value * 100)) / data![0].value).toFixed(2) }%`} position="center" />
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default styled(DailyAbsence)`
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

  .value-label {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
  }
`
