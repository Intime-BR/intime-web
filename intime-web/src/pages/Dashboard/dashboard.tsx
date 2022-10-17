import { Button, DatePicker, Drawer, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import DynamicLineChart from "../../components/MiddleContent/lineChart";
import DynamicSuggestionsCard from "../../components/MiddleContent/suggestionsCard";
import SuggestionCardContent from "../../components/MiddleContent/suggestionCardContent";
import PresenceForSubject from "../../components/BottomCharts/ChartPresenceForSubject";
import DailyAbsence from "../../components/BottomCharts/ChartDailyAbsence";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import ChartsEstimate from "../../components/ChartsEstimate/chartsEstimate";
import styled from "styled-components";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { useCallback, useEffect, useState } from "react";
import SearchSelect from "../../components/SeachSelect/searchSelect";
import CommomText from "../../components/CommomText/commomText";
import "./dashboard.css";
import { modalVisibility } from "../../utils/exports";
import { Class } from "../../interfaces/interfaces";
import { getAllClasses, getAllFaults, getAllPendences, getAllPresents, getMostDiscipline } from "../../services/dashboardService";
import { Card } from "../../interfaces/cardInterface";

type DashBoardProps = {
  className?: string;
};

const Dashboard = ({ className }: DashBoardProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [classes, setClasses] = useState<Class[]>();
  const [presents, setPresents] = useState<Card[]>();
  const [pendences, setPendences] = useState<Card[]>();
  const [faults, setFaults] = useState<Card[]>();
  const [discipline, setDiscipline] = useState<Card[]>();

  const fetchAllClasses = useCallback(async () => {
    await getAllClasses().then((res) => {
      setClasses(res.data);
    });
  }, [classes]);

  const getPresents = useCallback(async () => {
    await getAllPresents().then((res) => {
      setPresents(res.data)
    })
  }, [presents])


  const getPendences = useCallback(async () => {
    await getAllPendences().then((res) => {
      setPendences(res.data)
    })
  }, [pendences])

  const getFaults = useCallback(async () => {
    await getAllFaults().then((res) => {
      setFaults(res.data)
    })
  }, [faults])

  const getMostOnlyDiscipline = useCallback(async () => {
    await getMostDiscipline().then((res) => {
      setDiscipline(res.data)
    })
  }, [faults])

  const handleDateChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  

  useEffect(() => {
    fetchAllClasses();
    getFaults();
    getPendences();
    getPresents();
    getMostOnlyDiscipline();
  }, [classes]);

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
            <div className="media-body header-content">
              <h5 className="mb-0 title-header">Dados Gerais</h5>
              <span className="text-gray description">
                Consulte os dados de todas as turmas em tempo real, analise as
                estatísticas e melhore o desempenho escolar.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              className="filter-button d-flex justify-content-center align-items-center"
              onClick={() => setIsVisible(modalVisibility(isVisible))}
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
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3 chartEstimate">
          <ChartsEstimate
            title={"Presentes"}
            content={`${presents} alunos`}
            variation={"0.7"}
            up={true}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Faltas"}
            content={`${faults} alunos`}
            variation={"-0.1"}
            up={false}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Pendentes"}
            content={`${pendences} alunos`}
            variation={"-0.7"}
          />
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 mt-3">
          <ChartsEstimate
            title={"Matéria Destaque"}
            content={discipline?.nome}
            variation={discipline?.qnt_presencas}
          />
        </div>
      </BaseContainer>
      <BaseContainer
        color="transparent"
        border="none"
        className="row justify-content-center middle-charts-container"
        shadow="none"
      >
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3">
          <DynamicLineChart data={classes} />
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12 col-sm-12 mt-3">
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
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3 mb-3">
          <DailyAbsence />
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12 mt-3 mb-3">
          <PresenceForSubject />
        </div>
      </BaseContainer>
      <Drawer
        title="Filtros"
        visible={isVisible}
        onClose={() => setIsVisible(modalVisibility(isVisible))}
      >
        <CommomText>
          Utilize os filtros para encontrar dados específicos.
        </CommomText>
        <div className="row mb-3">
          <div className="col-md-12">
            <SearchSelect placeHolder={"Selecione a turma"} />
          </div>
        </div>
        <CommomText>Selecione um período</CommomText>
        <div className="row">
          <div className="col-md-12">
            <DatePicker
              placeholder="Selecione o período"
              className="w-100"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </Drawer>
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
  .title {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  .title-header {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
  }
  .description {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
  .header-content {
    padding: 0px 12px;
  }

  .filter-button {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: white;
    padding: 20px 30px;
  }
`;
