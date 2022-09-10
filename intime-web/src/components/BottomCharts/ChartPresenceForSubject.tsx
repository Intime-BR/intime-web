import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Group A', value: 400, color:"#8884d8"},
  { name: 'Group B', value: 300 , color:"#17192E" },
];

type PresenceForSubject = {
  className?: string;
  room?: string;
  percentValue?: number;
  color?: string;
};


const COLORS = ['#17192E','#8884d8'];


const PresenceForSubject = ({
  className,
  room,
  percentValue,
  color,
}: PresenceForSubject) => {
  return (
    <div className={className}>
        <div className="title-div">
          <span>Presença por matéria</span> 
        </div>
        <p>
        Matéria destaque em presenças concluídas
        </p>
        <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <PieChart>
          {data.map((entry, index) => (
            <Pie dataKey="value" data={data} fill={COLORS[index % COLORS.length]} label />
            ))}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

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
`;
