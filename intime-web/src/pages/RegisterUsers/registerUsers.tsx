import { DashboardOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BaseContainer from "../../components/BaseContainer/baseContainer";
import DataTable from "../../components/DataTable/dataTable";
import SearchSelect from "../../components/SeachSelect/searchSelect";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import DataTableUsers from "../../components/DataTableUsers/dataTableUsers";
import { useCallback, useEffect, useState } from "react";
import { modalVisibility } from "../../utils/exports";
import { Empty, Form, Input, Space, Table, Tabs, Tag } from "antd";
import { RequiredMark } from "antd/lib/form/Form";
import { User } from "../../interfaces/interfaces";
import { createUser, findByFilter } from "../../services/registerUserService";

type RegisterUsersProps = {
  className?: string;
};

type DataTableModalProps = {
  className?: String;
  isVisible?: boolean;
  title?: String;
  onCancel?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  okButtonText?: String;
  children?: JSX.Element | JSX.Element[];
  width?: string | number;
  height?: string | number;
  centered: boolean;
};

const RegisterUsers = ({ className }: RegisterUsersProps) => {
  const [inputValue, setInputValue] = useState<{
    nome?: string;
    email?: string;
    senha?: string;
    data?: Date;
  }>();

  const handleEmail = (email: string) => {
    setInputValue({
      nome: inputValue?.nome,
      email: email,
      senha: inputValue?.senha,
    });
    console.log(inputValue?.email);
  };

  const handleNome = (nome: string) => {
    setInputValue({
      nome: nome,
      email: inputValue?.email,
      senha: inputValue?.senha,
    });
    // console.log(inputValue?.nome);
  };

  const handleSenha = (senha: string) => {
    setInputValue({
      senha: senha,
      email: inputValue?.email,
      nome: inputValue?.nome,
    });
  };

  const createUsers = useCallback(async () => {
    setInputValue({
      senha: inputValue?.senha,
      email: inputValue?.email,
      nome: inputValue?.nome,
      data: new Date(),
    });
    const { status, data } = await createUser({
      nome: inputValue?.nome,
      email: inputValue?.email,
      senha: inputValue?.senha,
      criado_em: inputValue?.data,
    });
    if (status !== 200) throw new Error();
  }, [inputValue]);

  const [listUsers, setlistUsers] = useState<User[]>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const findUsers = useCallback(async () => {
    const { status, data } = await findByFilter();
    if (status !== 200) throw new Error();
    setlistUsers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    findUsers();
  }, [findUsers]);

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleUser = () => {
    setIsVisible(modalVisibility(isVisible));
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
              <h5 className="mb-0 title-header">Cadastre novos usuários</h5>
              <span className="text-gray description">
                Aqui você pode cadastrar mais colaboradores para gerenciar as
                informações e fazerem ajustes no sistema.
              </span>
            </div>
          </div>
          <div className="m-b-5">
            <Button
              onClick={() => handleUser()}
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
        <DataTableUsers data={listUsers} />
      </BaseContainer>

      <DataTableModal
        title="Adicionar Usuário"
        centered
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={createUsers}
        okButtonText="Salvar"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <div className="row">
            <div className="col-12">
              <Form.Item label="Usuário" required>
                <Input
                  className="w-100"
                  onChange={(e) => handleNome(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "Digite um e-mail válido",
                  },
                  {
                    required: true,
                    message: "Por favor, informe seu E-mail",
                  },
                ]}
                required
              >
                <Input
                  className="w-100"
                  onChange={(e) => handleEmail(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item
                label="Senha"
                rules={[
                  {
                    required: true,
                    message: "Por favor, informe sua senha",
                  },
                ]}
                required
              >
                <Input
                  className="w-100"
                  onChange={(e) => handleSenha(e.target.value)}
                />
              </Form.Item>
            </div>
          </div>
        </Form>
      </DataTableModal>
    </div>
  );
};

const DataTableModal = ({
  className,
  isVisible,
  title,
  onOk,
  onCancel,
  okButtonText,
  children,
  width,
}: DataTableModalProps) => {
  return (
    <Modal
      title={title}
      centered
      onOk={onOk}
      visible={isVisible}
      onCancel={onCancel}
      cancelText={"Cancelar"}
      okText={okButtonText}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default styled(RegisterUsers)`
  width: 100%;
  height: 100%;

  .title-header {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
  }

  .description {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }

  .filter-button {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    padding: 20px 30px;
  }
`;
