import { Progress } from "antd";
import "./ChartProgress.css";
import { SearchOutlined } from "@ant-design/icons";
import Card from "antd/lib/card/Card";
import styled from "styled-components";
import ItemChartProgressBar from "../ItemChartProgressBar/itemChartProgressBar";

// export function ProgressBarElementor (){
//     return(
//         // <div className='col-md-6'>
//         // <div className="information">
//         //     <div>
//         //         <h4>Índice de reprovação</h4>
//         //     </div>
//         //     <div className="search">
//         //         <input type="string"></input>
//         //         <SearchOutlined color="#eb2f96"/>
//         //     </div>
//         // </div>
//         // <div className="ChartProgress">
//         //     <div>
//         //         <div className="divProgress">
//         //             <label className="label">1A1</label>
//         //             <Progress percent={40} strokeColor="#ebaa02" trailColor="rgba(253, 253, 255, 0.18);"/>
//         //         </div>
//         //         <div>
//         //             <label className="label">2A1</label>
//         //             <Progress percent={38} strokeColor="#FF0000"/>
//         //         </div>
//         //         <div>
//         //             <label className="label">3A1</label>
//         //             <Progress percent={88} strokeColor="#6470e8" />
//         //         </div>
//         //     </div>
//         //     <div className="divProgress">
//         //         <div>
//         //             <label className="label">1A2</label>
//         //             <Progress percent={40} strokeColor="#4A9231"/>
//         //         </div>
//         //         <div>
//         //             <label className="label">2A2</label>
//         //             <Progress percent={38} strokeColor="#6470E8"/>
//         //         </div>
//         //         <div>
//         //             <label className="label">3A2</label>
//         //             <Progress percent={88} strokeColor="#6470E8" />
//         //         </div>
//         //     </div>
//         // </div>
//         // </div>

//    // )
// }

type ProgressBarElementor = {
  className?: string;
  title?: String;
  content?: String;
  variation?: String;
  up?: Boolean;
};

const ProgressBarElementor = ({
  className,
  title,
  content,
  variation,
  up,
}: ProgressBarElementor) => {
  return (
    <Card
      style={{
        borderRadius: "16px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className={className}
    >
        <div className="title-div">Índices de Presença por sala</div>

        <div className="row">
            <ItemChartProgressBar room="1A1" percentValue={45} color="#ebaa02"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={20} color="#FF0000"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={80} color="#4A9231"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={33} color="#ebaa02"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={40} color="#ebaa02"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={95} color="#4A9231"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={95} color="#4A9231"></ItemChartProgressBar>
            <ItemChartProgressBar room="1A1" percentValue={95} color="#4A9231"></ItemChartProgressBar>
            
        </div>
    </Card>
  );
};

export default styled(ProgressBarElementor)`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
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
