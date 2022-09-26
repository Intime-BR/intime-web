import { DashboardOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import DataTable from "../../components/DataTable/dataTable";
import SearchSelect from "../../components/SeachSelect/searchSelect";
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import DataTableUsers from "../../components/DataTableUsers/dataTableUsers";

type RegisterUsersProps = {
  className?: string;
};

const RegisterUsers = ({ className }: RegisterUsersProps) => {

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
              <h5 className="mb-0">Cadastre novos usuários</h5>
              <span className="text-gray font-size-13">
                Aqui você pode cadastrar mais colaboradores para gerenciar as
                informações e fazerem ajustes no sistema.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              type="default"
              className="filter-button d-flex justify-content-center align-items-center"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlusOutlined />
              <span style={{ marginLeft: "5px" }}>Novo Usuário</span>
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
            <SearchSelect placeHolder="Selecione o E-mail" />
          </div>
        </div>
        <DataTableUsers />
      </BaseContainer>
    </div>
  );
};

export default styled(RegisterUsers)`
  width: 100%;
  height: 100%;
  .filter-button {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    padding: 20px 30px;
  }
`;
