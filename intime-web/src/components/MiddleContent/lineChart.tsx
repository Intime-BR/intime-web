import react, { PureComponent } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Segunda',
    Faltas: 2400,
  },
  {
    name: 'Terça',
    Faltas: 1398,
  },
  {
    name: 'Quarta',
    Faltas: 1398,
  },
  {
    name: 'Quinta',
    Faltas: 1398,
  },
  {
    name: 'Sexta',
    Faltas: 1398,
  },
  {
    name: 'Sabado',
    Faltas: 1398,
  },
];

type DynamicLineChartProps = {
  className?: string;
};

const DynamicLineChart = ({ className }: DynamicLineChartProps) => {
  return (
    <div className={`${className} col-md-6 col-sm-12`}>
      <ResponsiveContainer className="chart-container" width="100%" height="100%">
        <BarChart
          className="bar-chart"
          width={400}
          height={200}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Faltas" fill="#8884d8" radius={[5, 5, 0, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default styled(DynamicLineChart)`
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  max-height: 400px;
  padding-bottom: 1%;
  background: #fafafa;
  .chart-container {
    width: 100%;
    height: 100%;
    margin: 2%;
  }
`;
