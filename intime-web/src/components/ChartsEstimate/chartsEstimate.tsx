import { Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import "./charts-estimate.css";
import styled from "styled-components";

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
            style={{
              fontSize: "16px",
              padding: 0,
              color: Number(variation) > 0 ? "#4A9231" : "#FF0000",
            }}
            className="d-flex align-items-center justify-content-between variation"
          >
            {`${variation}%`}
            {Number(variation) > 0 ? (
              <ArrowUpOutlined />
            ) : (
              <ArrowDownOutlined />
            )}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default styled(ChartEstimate)`
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
`;
