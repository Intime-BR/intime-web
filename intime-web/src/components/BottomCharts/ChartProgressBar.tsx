import Card from "antd/lib/card/Card";
import styled from "styled-components";
import ItemChartProgressBar from "../ItemChartProgressBar/itemChartProgressBar";

type ProgressBarElementorProps = {
  className?: string;
  title?: String;
  content?: String;
  variation?: String;
  up?: Boolean;
};

const ProgressBarElementor = ({
  className,
}: ProgressBarElementorProps) => {
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
        <ItemChartProgressBar
          room="1A1"
          percentValue={45}
          color="#ebaa02"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={20}
          color="#FF0000"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={80}
          color="#4A9231"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={33}
          color="#ebaa02"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={40}
          color="#ebaa02"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={95}
          color="#4A9231"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={95}
          color="#4A9231"
        ></ItemChartProgressBar>
        <ItemChartProgressBar
          room="1A1"
          percentValue={95}
          color="#4A9231"
        ></ItemChartProgressBar>
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
