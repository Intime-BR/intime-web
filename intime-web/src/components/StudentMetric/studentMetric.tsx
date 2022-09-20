import React from "react";
import styled from "styled-components";
import { Badge, Card, Progress, Tag } from "antd";
import { Metrics } from "../../interfaces/interfaces";

type StudentMetricProps = {
  className?: string;
  metrics?: Metrics;
};

const StudentMetric = ({ className, metrics }: StudentMetricProps) => {
  return (
    <div className={`${className} col-md-3`}>
      <Card className="rounded mt-3">
        <h6 className="text-center">{metrics?.subject}</h6>
        <p className="classes">Aulas totais: {metrics?.availableClasses}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="row">
            <div className="col-md-12 mt-3 align-items-center">
              <Tag
                className="rounded"
                style={{ fontSize: "12px" }}
                color="#4A9231"
                key="Presença"
              >
                <Badge status="default" />
                Presente
              </Tag>

              <span>{metrics?.presences}</span>
            </div>

            <div className="col-md-12 mt-3 d-flex  align-items-center">
              <Tag
                className=" rounded"
                style={{ fontSize: "12px" }}
                color="#D1CC44"
                key="Pendentes"
              >
                <Badge status="default" />
                Pendentes
              </Tag>

              <span>{metrics?.pendences}</span>
            </div>

            <div className="col-md-12 mt-3 align-items-center">
              <Tag
                className="rounded"
                style={{ fontSize: "12px" }}
                color="#db3232"
                key="Faltas"
              >
                <Badge status="default" />
                Faltas
              </Tag>
              <span>{metrics?.absences}</span>
            </div>
          </div>

          <div className="mt-3">
            <Progress
              type="circle"
              percent={metrics?.percent}
              width={90}
              status={metrics?.status}
            />
          </div>
        </div>

        {/* <div className="mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <span>Índice de reprovação</span>
            <span>{metrics?.percent} %</span>
          </div>
          <Progress percent={100} showInfo={false} />
        </div> */}
      </Card>
    </div>
  );
};

export default styled(StudentMetric)`
  height: auto;

  .classes {
    font-size: 12px;
  }
  /* margin: 0 auto;
 
  border-radius: 6px; */
`;
