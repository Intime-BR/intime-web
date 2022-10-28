import styled from 'styled-components'
import { Card, Progress, Tag } from 'antd'
import { Metrics } from '../../interfaces/interfaces'

type StudentMetricProps = {
  className?: string;
  metrics?: Metrics;
};

const StudentMetric = ({ className, metrics }: StudentMetricProps) => {
  return (
    <div className={`${className} col-lg-4 col-md-6 col-sm-12`}>
      <Card className="rounded mt-5">
        <h6 className="text-center">{metrics?.nome_materia}</h6>
        <p className="classes">Aulas totais: {metrics?.qnt_aulas}</p>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex flex-wrap">
            <div className=" mt-3 align-items-center">
              <Tag
                className="rounded text-center"
                style={{ fontSize: '12px', width: '112px' }}
                color="#4A9231"
                key="Presença"
              >
                Presente:
                <span style={{ marginLeft: '4px' }}>{metrics?.qnt_presencas}</span>
              </Tag>
            </div>

            <div className=" mt-3 d-flex  align-items-center">
              <Tag
                className=" rounded text-center"
                style={{ fontSize: '12px', width: '112px' }}
                color="#D1CC44"
                key="Pendentes"
              >
                Pendentes:
                <span style={{ marginLeft: '4px' }}>{metrics?.qnt_pendencias}</span>
              </Tag>
            </div>

            <div className=" mt-3 align-items-center">
              <Tag
                className="rounded text-center"
                style={{ fontSize: '12px', width: '112px' }}
                color="#db3232"
                key="Faltas"
              >
                Faltas:
                <span style={{ marginLeft: '4px' }}>{metrics?.qnt_faltas}</span>
              </Tag>
            </div>
          </div>

          <div className="mt-3 w-100">
            <div className="d-flex justify-content-between">
              <span>Índice de reprovaçao</span>
              <span>{metrics?.porcentagem_faltas}%</span>
            </div>
            <Progress percent={metrics?.porcentagem_faltas} showInfo={false} />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default styled(StudentMetric)`
  height: auto;

  .classes {
    font-size: 12px;
  }
  /* margin: 0 auto;
 
  border-radius: 6px; */
`
