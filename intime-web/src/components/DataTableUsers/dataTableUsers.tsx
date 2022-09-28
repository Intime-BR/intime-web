import styled from "styled-components";
import { Aluno, Metrics, User } from "../../interfaces/interfaces";
import {
  DeleteOutlined,
  EditFilled,
  ExclamationCircleOutlined,
  FileDoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Empty, Form, Input, Space, Table, Tabs, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Avatar } from "antd";
import { Badge } from "antd";
import { useCallback, useEffect, useState } from "react";
import { modalVisibility } from "../../utils/exports";
import DataTableUsersModal from "./dataTableUsersModal";
import CommomText from "../CommomText/commomText";
import { RequiredMark } from "antd/lib/form/Form";
import StudentMetric from "../StudentMetric/studentMetric";
import { findByFilter } from "../../services/activeRoomService";
import { updateUser } from "../../services/registerUserService";

type DataTableUsersProps = {
  className?: string;
  data?: User[];
};

const DataTableUsers = ({ className, data }: DataTableUsersProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [metrics, setMetrics] = useState<{ students: User }>();

  const [inputValue, setInputValue] = useState<{
    nome?: string;
    email?: string;
    senha?: string;
    data?: Date;
  }>();

  const handleEmail = (email: string) => {
    setUser({
      nome: user?.nome,
      email: email,
    });
    setInputValue({
      nome: inputValue?.nome,
      email: email,
      senha: inputValue?.senha,
    });
  };

  const updateUsers = useCallback(async () => {
    setInputValue({
      senha: inputValue?.senha,
      email: inputValue?.email,
      nome: inputValue?.nome,
      data: new Date(),
    });

    const { status, data } = await updateUser({
      nome: inputValue?.nome,
      email: inputValue?.email,
      senha: inputValue?.senha,
      criado_em: inputValue?.data,
    });
    if (status !== 200) throw new Error();
  }, [inputValue]);

  const handleUser = (nome: string) => {
    setUser({
      nome: nome,
      email: user?.email,
    });
    setInputValue({
      nome: nome,
      email: inputValue?.email,
      senha: inputValue?.senha,
    });
  };

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const handleCurrentUser = (data: User) => {
    setIsVisible(modalVisibility(isVisible));
    setUser(data);
  };

  const columns: ColumnsType<User> = [
    {
      title: "Usuário",
      dataIndex: "nome",
      key: "student",
      render: (text) => (
        <div className="d-flex align-items-center">
          <Avatar
            style={{
              backgroundColor: "rgba(39,52,182, 0.6)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="avatar"
            icon={<UserOutlined />}
          />
          <span className="text-nowrap" style={{ marginLeft: "8px" }}>
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "enrollment",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Data de Cadastro",
      dataIndex: "criado_em",
      key: "classroom",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditFilled onClick={() => handleCurrentUser(record)} />
          </a>
          <a>
            <DeleteOutlined onClick={() => console.log("INFO BUTTON")} />
          </a>
        </Space>
      ),
    },
  ];

  const handleTagColor = (tag: String) => {
    switch (tag) {
      case "presente":
        return "#2EB73C";
      case "pendente":
        return "#EBAA02";
      case "ausente":
        return "rgba(255, 0, 0, 0.66)";
    }
  };

  return (
    <div className={className}>
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={data}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Não há dados"
            />
          ),
        }}
      />
      <DataTableUsersModal
        title="Editar Dados"
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={updateUsers}
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
              <Form.Item htmlFor="usuario" label="Usuário" required>
                <Input
                  id="usuario"
                  onChange={(e) => handleUser(e.target.value)}
                  value={user?.nome}
                />
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item htmlFor="email" label="E-mail" required>
                <Input
                  id="email"
                  onChange={(e) => handleEmail(e.target.value)}
                  value={user?.email}
                />
              </Form.Item>
            </div>

            {/* <div className="col-12">
              <Form.Item label="Senha" required>
                <Input value={user?.senha?.toString()} />
              </Form.Item>
            </div>  */}
            {/* 
            <div className="col-12">
              <Form.Item label="Data de Cadastro" required>
                <Input value={user?.criado_em?.toString()} />
              </Form.Item>
            </div> */}
          </div>
        </Form>
      </DataTableUsersModal>
    </div>
  );
};
export default styled(DataTableUsers)`
  width: 100%;
  height: 100%;
`;
