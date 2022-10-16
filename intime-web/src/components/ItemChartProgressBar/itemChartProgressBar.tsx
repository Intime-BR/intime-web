import { Progress } from "antd";
import styled from "styled-components";

type ItemChartProgressBar = {
  className?: string;
  room?: string;
  percentValue?: number;
  color?: string;
};

const ItemChartProgressBar = ({
  className,
  room,
  percentValue,
  color,
}: ItemChartProgressBar) => {
  return (
    <div className="col-md-6" style={{ margin: "20px 0px" }}>
      <div className="d-flex justify-content-between">
        <span>{room}</span>
        <span>{percentValue}%</span>
      </div>

      <div>
        <Progress
          percent={percentValue}
          strokeColor={color}
          style={{ backgroundColor: "rgba(253, 253, 255, 0.18)" }}
          showInfo={false}
        />
      </div>
    </div>
  );
};

export default styled(ItemChartProgressBar)`
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
