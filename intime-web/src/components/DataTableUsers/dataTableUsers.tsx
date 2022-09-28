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
import { Avatar, Modal } from "antd";
import { Badge } from "antd";
import { useCallback, useEffect, useState } from "react";
import { modalVisibility } from "../../utils/exports";
import DataTableUsersModal from "./dataTableUsersModal";
import CommomText from "../CommomText/commomText";
import { RequiredMark } from "antd/lib/form/Form";
import StudentMetric from "../StudentMetric/studentMetric";
import { findByFilter } from "../../services/activeRoomService";
import { deleteUser, updateUser } from "../../services/registerUserService";
import { ToastContainer, toast } from "react-toastify";
import './dataTable.css'

type DataTableUsersProps = {
  className?: string;
  data?: User[];
};

const DataTableUsers = ({ className, data }: DataTableUsersProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [currentHash, setCurrentHash] = useState<any>();
  const [currentPassword, setCurrentPassword] = useState<any>();
  const [metrics, setMetrics] = useState<{ students: User }>();

  // useEffect(() => {
  //   findUser();
  // }, [findStudents]);

  // const showToastMessage = () => {
  //   console.log("oii");
  //   toast.success("Parabéns! O item foi deletado com sucesso!", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  // };

  const [inputValue, setInputValue] = useState<{
    nome?: string;
    email?: string;
    senha?: string;
    data?: Date;
  }>();

  const handleSenha = (senha: string) => {
    setUser({
      nome: user?.nome,
      email: user?.email,
      senha: senha,
    });
    setInputValue({
      nome: inputValue?.nome,
      email: inputValue?.email,
      senha: senha,
    });
  };

  const handleEmail = (email: string) => {
    setUser({
      nome: user?.nome,
      email: email,
      senha: user?.senha,
    });
    setInputValue({
      nome: inputValue?.nome,
      email: email,
      senha: inputValue?.senha,
    });
  };

  const updateUsers = useCallback(async () => {
    setInputValue({
      email: inputValue?.email,
      nome: inputValue?.nome,
      senha: inputValue?.senha,
      data: new Date(),
    });
    await updateUser(
      {
        nome: inputValue?.nome,
        email: inputValue?.email,
        criado_em: inputValue?.data,
        senha: inputValue?.senha,
      },
      currentHash
    );

    setIsVisible(false);
    toast.success("Parabéns! Usuário atualizado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    console.log(data);
  }, [inputValue, currentPassword]);

  const handleUser = (nome: string) => {
    setUser({
      nome: nome,
      email: user?.email,
      senha: user?.senha,
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
    console.log("data", data);
    setCurrentHash(data.hash_id);
    setCurrentPassword(data.senha);
    setIsVisible(modalVisibility(isVisible));
    setUser(data);
  };

  const confirm = (user: User) => {
    setCurrentHash(user.hash_id);
    Modal.confirm({
      title: "Deseja realmente excluir?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Atenção ao excluir o dado, você não poderá mais utilizá-lo dentro do sistema.",
      okText: "Confirmar",
      cancelText: "Cancelar",

      onOk() {
        deleteUsers(user);
        setIsVisible(false);
      },
    });
  };

  const deleteUsers = useCallback(
    async (user: User) => {
      console.log(user.hash_id);
      await deleteUser(user.hash_id);
      toast.success("Parabéns! Usuário deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    [inputValue, currentPassword]
  );

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
            <DeleteOutlined onClick={() => confirm(record)} />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div className={className}>
      <ToastContainer />
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
            {/* 
            <div className="col-12">
              <Form.Item label="Senha" required>
                <Input
                  onChange={(e) => handleSenha(e.target.value)}
                  value={user?.senha?.toString()}
                />
              </Form.Item>
            </div> */}
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
