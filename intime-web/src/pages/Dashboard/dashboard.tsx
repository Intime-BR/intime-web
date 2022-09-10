import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import DynamicLineChart from "../../components/MiddleContent/lineChart";
import DynamicSuggestionsCard from "../../components/MiddleContent/suggestionsCard";
import SuggestionCardContent from "../../components/MiddleContent/suggestionCardContent";
import image from "../../assets/others/user_face_template.svg";
import PresenceForSubject  from "../../components/BottomCharts/ChartPresenceForSubject";
import ProgressBarElementor from "../../components/BottomCharts/ChartProgressBar";
import DailyAbsence  from "../../components/BottomCharts/ChartDailyAbsence";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import ChartsEstimate from "../../components/ChartsEstimate/chartsEstimate";
import styled from "styled-components";

type DashBoardProps = {
  className?: string;
};

const Dashboard = ({ className }: DashBoardProps) => {
  return (
    <div className={className}>
      <div
        className="page-header border"
        style={{
          margin: "0px",
          padding: 24,
          height: "auto",
        }}
      >
        <div className="d-sm-flex m-b-5 align-items-center justify-content-between">
          <div className="media align-items-center m-b-6">
            <div className="media-body m-l-15">
              <h5 className="mb-0">Dados Gerais</h5>
              <span className="text-gray font-size-13">
                Consulte os dados de todas as turmas em tempo real, analise as
                estatísticas e melhore o desempenho escolar.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
            style={{background:'#6470E8', borderRadius: '8px', color:"white", padding:'20px 30px'}}
              className="d-flex justify-content-center align-items-center"
            >
              <FilterOutlined />
              <span>Filtros</span>
            </Button>
          </div>
        </div>
      </div>
      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center estimate-chart-container"
        shadow="none"
      >
        <div className="col-md-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Presentes"}
            content={"451 alunos"}
            variation={"0.7"}
            up={true}
          />
        </div>
        <div className="col-md-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Faltas"}
            content={"451 alunos"}
            variation={"-0.1"}
            up={false}
          />
        </div>
        <div className="col-md-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Pendentes"}
            content={"451 alunos"}
            variation={"-0.7"}
          />
        </div>
        <div className="col-md-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Matéria Destaque"}
            content={"451 alunos"}
            variation={"0.7"}
          />
        </div>
      </BaseContainer>
      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center middle-charts-container"
        shadow="none"
      >
        <div className="col-md-6 col-sm-12 mt-3">
          <DynamicLineChart />
        </div>
        <div className="col-md-6 col-sm-12 mt-3">
          <DynamicSuggestionsCard>
            <SuggestionCardContent
              image="https://joeschmoe.io/api/v1/random"
              name={"Estevao Boaventura"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. "
              }
              status={"Pendente"}
              date={"24 de maio, 2022"}
            />
            <SuggestionCardContent
              image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              name={"Estevao Boaventura"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. "
              }
              status={"Pendente"}
              date={"24 de maio, 2022"}
            />
            <SuggestionCardContent
              image="https://joeschmoe.io/api/v1/random"
              name={"Estevao Boaventura"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. "
              }
              status={"Pendente"}
              date={"24 de maio, 2022"}
            />
          </DynamicSuggestionsCard>
        </div>
      </BaseContainer>

      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center middle-charts-container"
        shadow="none"
      
      >
        <div className="col-md-6 col-sm-12 mt-3 mb-3" >
        <ProgressBarElementor />
        </div>
        <div className="col-md-3 col-sm-6 mt-3 mb-3">
        <DailyAbsence />
        </div>
        <div className="col-md-3 col-sm-6 mt-3 mb-3">
        <PresenceForSubject />
        </div>
      </BaseContainer>
    </div>
  );
};

export default styled(Dashboard)`
  width: 100%;
  height: 100%;
  .estimate-chart-container {
    margin: 0 auto;
  }
  .middle-charts-container {
    margin: 0 auto;
  }
`;
