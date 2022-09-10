import { Card, Progress } from "antd";
import styled from "styled-components";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

type DailyAbsence = {
    className?: string;
    room?: string;
    percentValue?: number;
    color?: string;
  };
  
  const DailyAbsence = ({
    className,
    room,
    percentValue,
    color
  }: DailyAbsence) => {
    return (
      <div className={className}>
        <div className="title-div d-flex justify-content-between">
          <span>Ausência diária</span> 
          <span style={{color:"#9E7BE9"}}>12,5%</span> 
        </div>
        <p>
        Média geral da escola 
        </p>
        <PieChart width={300} height={280} >
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
    </div>
    );
  };
  
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
  `;
  

