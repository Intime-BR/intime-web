import { Button, Select, Spin } from "antd";

import { DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import DataTable from "../../components/DataTable/dataTable";
import SearchSelect from "../../components/SeachSelect/searchSelect";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { Aluno } from "../../interfaces/interfaces";
import {
  findByFilter,
  getAllClass,
  getAllDiscipline,
  getAllEnrollment,
} from "../../services/activeRoomService";
import "./activeRoom.css";
import { Matriculas } from "../../interfaces/matriculasInterface";
import { Disciplinas } from "../../interfaces/disciplinasInterface";
import { ClassInterface } from "../../interfaces/classInterface";

type ActiveRoomProps = {
  className?: string;
};

const ActiveRoom = ({ className }: ActiveRoomProps) => {
  const [metrics, setMetrics] = useState<Aluno[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [discipline, setDiscipline] = useState<Disciplinas[]>();
  const [classes, setClasses] = useState<ClassInterface[]>();
  const [enrollment, setEnrollment] = useState<Matriculas[]>();
  const [selectedItemEnrollment, setSelectedItemEnrollment] = useState<string[]>([]);
  const [selectedItemClass, setSelectedItemClass] = useState<string[]>([]);
  const [selectedItemDiscipline, setSelectedItemDiscipline] = useState<string[]>([]);
  const [selectedItemStatus, setSelectedItemStatus] = useState<string[]>([]);

  const status = ["Pendente", "Falta", "Presente"];

  const findStudents = useCallback(async () => {
    const { status, data } = await findByFilter();
    if (status !== 200) throw new Error();
    console.log(data);
    setMetrics(data);
    setLoading(false);
  }, []);

  const getDiscipline = useCallback(async () => {
    await getAllDiscipline().then((res) => {
      setDiscipline(res.data);
    });
  }, [discipline]);

  const getClass = useCallback(async () => {
    await getAllClass().then((res) => {
      setClasses(res.data);
    });
  }, [classes]);

  const getEnrollment = useCallback(async () => {
    await getAllEnrollment().then((res) => {
      setEnrollment(res.data);
    });
  }, [enrollment]);

  useEffect(() => {
    findStudents();
    getDiscipline();
    getEnrollment();
    getClass();
  }, [findStudents]);

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

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
          <div className="media align-items-center m-b-5">
            <div className="media-body m-l-15">
              <h5 className="mb-0 title-header">Análise de presenças</h5>
              <span className="text-gray description">
                Visualize e gerencie os dados de cada turma, filtrando seus
                alunos e corrigindo pendências justificadas.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              type="default"
              className="filter-button d-flex justify-content-center align-items-center"
            >
              <Link
                to={"/dashboard"}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DashboardOutlined />
                <span style={{ marginLeft: "5px" }}>Dashboard</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <BaseContainer
        className="container-fluid justify-self-center mt-3 mb-3"
        color="#ffff"
      >
        <div className="row p-3">
          <div className="col-sm-12 col-lg-3 col-md-6 mt-3 mb-3">
            <Select
              showSearch
              placeholder="Selecione a Matrícula"
              value={selectedItemEnrollment}
              onChange={setSelectedItemEnrollment}
              style={{ width: "100%" }}
            >
              {enrollment?.map((item) => (
                <Select.Option value={item.matricula}>
                  {item.matricula}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <Select
              showSearch
              placeholder="Selecione o Status"
              value={selectedItemStatus}
              onChange={setSelectedItemStatus}
              style={{ width: "100%" }}
            >
              {status?.map((item) => (
                <Select.Option value={item}>{item}</Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <Select
              showSearch
              placeholder="Selecione a Turma"
              value={selectedItemClass}
              onChange={setSelectedItemClass}
              style={{ width: "100%" }}
            >
              {classes?.map((item) => (
                <Select.Option value={item.nome}>{item.nome}</Select.Option>
              ))}
            </Select>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <Select
              showSearch
              placeholder="Selecione a Disciplina"
              value={selectedItemDiscipline}
              onChange={setSelectedItemDiscipline}
              style={{ width: "100%" }}
            >
              {discipline?.map((item) => (
                <Select.Option value={item.nome}>{item.nome}</Select.Option>
              ))}
            </Select>
          </div>
        </div>
        {!loading ? (
          <DataTable data={metrics} />
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <Spin />
          </div>
        )}
      </BaseContainer>
    </div>
  );
};

export default styled(ActiveRoom)`
  width: 100%;
  height: 100%;
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
    padding: 0px;
  }
  .to-dash-button {
    background: transparent;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.textGray};
    padding: 20px 30px;
  }
  .container-fluid {
    color: ${(props) => props.theme.colors.white};
  }
  .filter-button {
    background-color: transparent;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.textGray};
    padding: 20px 30px;
  }
`;
