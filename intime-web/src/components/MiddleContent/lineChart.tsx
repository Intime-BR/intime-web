import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Class } from "../../interfaces/interfaces";

type DynamicLineChartProps = {
  className?: string;
  data?: Class[];
};

const DynamicLineChart = ({ className, data }: DynamicLineChartProps) => {
  return (
    <div className={`${className}`}>
      <ResponsiveContainer
        className="chart-container"
        width="100%"
        height="100%"
      >
        <BarChart
          className="bar-chart"
          width={400}
          height={200}
          data={data}
          margin={{
            top: 30,
            right: 45,
            left: 0,
            bottom: 12,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="qnt_presencas"
            name="Presentes"
            fill="#AAB1ED"
            radius={[5, 5, 0, 0]}
            barSize={24}
          />
          <Bar
            dataKey="qnt_pendencias"
            name="Pendentes"
            fill="#6470E8"
            radius={[5, 5, 0, 0]}
            barSize={24}
          />
          <Bar
            dataKey="qnt_faltas"
            name="Ausentes"
            fill="#2e325d"
            radius={[5, 5, 0, 0]}
            barSize={24}
          />
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
  width: 100%;
  height: 100%;
  .chart-container {
    width: 100%;
    height: 100%;
    margin: 2%;
  }
`;
