import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { ChartsEstimate } from "../../components/ChartsEstimate/chartsEstimate";
import DynamicLineChart from "../../components/MiddleContent/lineChart";
import DynamicSuggestionsCard from "../../components/MiddleContent/suggestionsCard";
import SuggestionCardContent from "../../components/MiddleContent/suggestionCardContent";
import image from "../../assets/others/user_face_template.svg";
import { PresenceForSubject } from "../../components/BottomCharts/ChartPresenceForSubject";
import { ProgressBarElementor } from "../../components/BottomCharts/ChartProgressBar";
import { DailyAbsence } from "../../components/BottomCharts/ChartDailyAbsence";
import BaseContainer from "../../components/BaseContainer/baseContainer";

export function Dashboard() {
  return (
    <div>
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
              type="primary"
              className="d-flex justify-content-center align-items-center"
            >
              <FilterOutlined />
              <span>Filtros</span>
            </Button>
          </div>
        </div>
      </div>

      <ChartsEstimate />
      <BaseContainer
        color="transparent"
        border="none"
        className="row m-4"
        shadow="none"
      >
        <div className="col-md-6">
          <DynamicLineChart />
        </div>
        <div className="col-md-6">
          <DynamicSuggestionsCard>
            <SuggestionCardContent
              image={image}
              name={"Estevao Boaventura"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. "
              }
              status={"Pendente"}
              date={"24 de maio, 2022"}
            />
            <SuggestionCardContent
              image={image}
              name={"Estevao Boaventura"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum dictum tristique. Nunc accumsan tempus ex vel bibendum. "
              }
              status={"Pendente"}
              date={"24 de maio, 2022"}
            />
            <SuggestionCardContent
              image={image}
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

      <div className="row" style={{ margin: "15px" }}>
        <ProgressBarElementor />
        <PresenceForSubject />
        <DailyAbsence />
      </div>
    </div>
  );
}
