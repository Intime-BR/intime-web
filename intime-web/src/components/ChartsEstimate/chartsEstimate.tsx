import { Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./charts-estimate.css";
import styled from "styled-components";

// export function ChartsEstimate() {
//   return (
//     <div
//       className="d-flex justify-content-between flex-wrap p-0"
//       style={{ margin: "15px" }}
//     >
//       <Card
//         style={{
//           width: 340,
//           margin: 10,
//           borderRadius: "8px",
//           boxShadow: "3px 1px 5px gray",
//         }}
//       >
//         <div className="w-100">
//           <div>
//             <h4 style={{ fontSize: "18px", fontFamily: "Poppins" }}>
//               Presentes
//             </h4>
//           </div>

//           <div
//             className="d-flex justify-content-between align-items-center mt-4"
//             style={{
//               fontFamily: "Poppins",
//             }}
//           >
//             <span style={{ fontSize: "16px", padding: 0 }}>451 alunos</span>
//             <span
//               style={{ fontSize: "16px", padding: 0, color: "#4A9231" }}
//               className="d-flex align-items-center justify-content-between"
//             >
//               +0,7
//               <ArrowUpOutlined />
//             </span>
//           </div>
//         </div>
//       </Card>

//       <Card
//         style={{
//           width: 340,
//           margin: 10,
//           borderRadius: "8px",
//           boxShadow: "3px 1px 5px gray",
//         }}
//       >
//         <div className="w-100">
//           <div>
//             <h4 style={{ fontSize: "18px", fontFamily: "Poppins" }}>Faltas</h4>
//           </div>

//           <div
//             className="d-flex justify-content-between align-items-center mt-4"
//             style={{
//               fontFamily: "Poppins",
//             }}
//           >
//             <span style={{ fontSize: "16px", padding: 0 }}>451 alunos</span>
//             <span
//               style={{ fontSize: "16px", padding: 0, color: "#FF0000" }}
//               className="d-flex align-items-center justify-content-between"
//             >
//               -0,1
//               <ArrowDownOutlined />
//             </span>
//           </div>
//         </div>
//       </Card>

//       <Card
//         style={{
//           width: 340,
//           margin: 10,
//           borderRadius: "8px",
//           boxShadow: "3px 1px 5px gray",
//         }}
//       >
//         <div className="w-100">
//           <div>
//             <h4 style={{ fontSize: "18px", fontFamily: "Poppins" }}>
//               Pendentes
//             </h4>
//           </div>

//           <div
//             className="d-flex justify-content-between align-items-center mt-4"
//             style={{
//               fontFamily: "Poppins",
//             }}
//           >
//             <span style={{ fontSize: "16px", padding: 0 }}>451 alunos</span>
//             <span
//               style={{ fontSize: "16px", padding: 0, color: "#EBAA02" }}
//               className="d-flex align-items-center justify-content-between"
//             >
//               +2,0
//               <ArrowUpOutlined />
//             </span>
//           </div>
//         </div>
//       </Card>

//       <Card
//         style={{
//           width: 340,
//           margin: 10,
//           borderRadius: "8px",
//           boxShadow: "3px 1px 5px gray",
//         }}
//       >
//         <div className="w-100">
//           <div>
//             <h4 style={{ fontSize: "18px", fontFamily: "Poppins" }}>
//               Matéria destaque
//             </h4>
//           </div>

//           <div
//             className="d-flex justify-content-between align-items-center mt-4"
//             style={{
//               fontFamily: "Poppins",
//             }}
//           >
//             <span style={{ fontSize: "16px", padding: 0 }}>451 alunos</span>
//             <span
//               style={{ fontSize: "16px", padding: 0, color: "#2734B6" }}
//               className="d-flex align-items-center justify-content-between"
//             >
//               +0,7
//               <ArrowUpOutlined />
//             </span>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

type ChartEstimateProps = {
  className?: string;
  title?: String;
  content?: String;
  variation?: String;
  up?: Boolean;
};

const ChartEstimate = ({
  className,
  title,
  content,
  variation,
  up,
}: ChartEstimateProps) => {
  return (
    <Card
      style={{
        borderRadius: "16px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      className={className}
    >
      <div className="content">
        <div>
          <h4 style={{ fontSize: "18px", fontFamily: "Poppins" }}>{title}</h4>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mt-4"
          style={{
            fontFamily: "Poppins",
          }}
        >
          <span className="students" style={{ fontSize: "16px", padding: 0 }}>
            {content}
          </span>
          <span
            style={{ fontSize: "16px", padding: 0, color: "#3943ad" }}
            className="d-flex align-items-center justify-content-between variation"
          >
            {variation}
            {up ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default styled(ChartEstimate)`
  width: 100%;
  height: 100%;
  /* margin: 10; */
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
`;
