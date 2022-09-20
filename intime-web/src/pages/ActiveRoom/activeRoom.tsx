import { Button } from "antd";

import { DashboardOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import DataTable from "../../components/DataTable/dataTable";
import SearchSelect from "../../components/SeachSelect/searchSelect";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import styled from "styled-components";

const ActiveRoom = () => {
  const handleData = () => {
    return [
      {
        id: 1,
        student: "Estevão Boaventura",
        enrollment: 12000604,
        classroom: "3B1",
        subject: "Matemática",
        status: ["Presente"],
        financialResponsable: "Sirleia Gomes de Souza",
        pedagogicalResponsable: "Geraldo Fernando Gomes",
        phoneNumber: "31999999999",
        homePhoneNumber: "31999999999",
        address: {
          cep: "30575180",
          logradouro: "Modestinda de Souza",
          complementos: "120",
          bairro: "Industrial",
          localidade: "Contagem",
          numero: "56",
        },
      },
      {
        id: 2,
        student: "Nicolle",
        enrollment: 12002097,
        classroom: "3B1",
        subject: "Portugues",
        status: ["Ausente"],
        financialResponsable: "Sirleia Gomes de Souza",
        pedagogicalResponsable: "Geraldo Fernando Gomes",
        phoneNumber: "31999999999",
        homePhoneNumber: "31999999999",
        address: {
          cep: "30575180",
          logradouro: "Modestinda de Souza",
          complementos: "120",
          bairro: "Industrial",
          numero: "56",
          localidade: "Contagem",
        },
      },
      {
        id: 3,
        student: "Derick",
        enrollment: 12000522,
        classroom: "3B1",
        subject: "Portugues",
        status: ["Pendente"],
        financialResponsable: "Sirleia Gomes de Souza",
        pedagogicalResponsable: "Geraldo Fernando Gomes",
        phoneNumber: "31999999999",
        homePhoneNumber: "31999999999",
        address: {
          cep: "30575180",
          logradouro: "Modestinda de Souza",
          complementos: "120",
          bairro: "Industrial",
          numero: "56",
          localidade: "Contagem",
        },
      },
    ];
  };

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
          <div className="media align-items-center m-b-5">
            <div className="media-body m-l-15">
              <h5 className="mb-0">Análise de presenças</h5>
              <span className="text-gray font-size-13">
                Visualize e gerencie os dados de cada turma, filtrando seus
                alunos e corrigindo pendências justificadas.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              type="default"
              className="to-dash-button d-flex justify-content-center align-items-center"
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
            <SearchSelect placeHolder="Selecione a Matrícula" />
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <SearchSelect placeHolder="Selecione o Status" />
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <SearchSelect placeHolder="Selecione a Turma" />
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6  mt-3 mb-3">
            <SearchSelect placeHolder="Selecione a Disciplina" />
          </div>
        </div>
        <DataTable data={handleData()} />
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
  .description {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }
  .header-content{
    padding: 0px;
  }
  .to-dash-button{
    background: transparent;
    border-radius: 8px;
    color: ${(props)=> props.theme.colors.textGray};
    padding: 20px 30px;
  }
  .container-fluid{
    color: ${(props)=> props.theme.colors.white}
  }
`;
