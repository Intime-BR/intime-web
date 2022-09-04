import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import { Chart } from "react-google-charts";
import './ChartDailyAbsence.css';
 
export const data = [
  ["Ausência diária", "Faltas por dia"],
  ["Ausência diária", 4],
  ["Ainda não bateram", 2],
  ["Presença", 10],
];
 
export const options = {
  title: "",
  pieHole: 0.6,
  is3D: false,
  colors: ['#fd7273', '#eeb930','#6aa556'],
 
};
 
export function DailyAbsence() {
  return (
    <div className="col-md-3">
      <div className="ausencia">
        <div>
          <h4>Ausênsia diária</h4>
          <label style={{color: "gray"}}>Média geral da escola</label>
        </div>
        <div>
          <span style={{fontSize: '16px', padding:0, color:'#6470E8'}} className='d-flex align-items-center justify-content-between'>
              +0,7
              <ArrowUpOutlined  />
          </span>
        </div>
      </div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

