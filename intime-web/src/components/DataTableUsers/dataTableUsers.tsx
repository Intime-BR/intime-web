import styled from "styled-components";
import { Aluno, Metrics } from "../../interfaces/interfaces";
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

type DataTableUsersProps = {
  className?: string;
  data?: Aluno[];
};

const DataTableUsers = ({ className, data }: DataTableUsersProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [aluno, setAluno] = useState<Aluno>();
  const [metrics, setMetrics] = useState<{ students: Aluno }>();

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

  const handleCurrentAluno = (data: Aluno) => {
    setIsVisible(modalVisibility(isVisible));
    setAluno(data);
  };

  const columns: ColumnsType<Aluno> = [
    {
      title: "Usuário",
      dataIndex: "student",
      key: "student",
      render: (text) => (
        <div className="d-flex align-items-center">
          <Avatar
            style={{
              backgroundColor: "rgba(134, 139, 189, 0.8)",
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
      dataIndex: "enrollment",
      key: "enrollment",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Data de Cadastro",
      dataIndex: "classroom",
      key: "classroom",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditFilled onClick={() => handleCurrentAluno(record)} />
          </a>
          <a>
            <DeleteOutlined
              onClick={() => console.log("INFO BUTTON")}
            />
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
      <Table scroll={{ x: true }} columns={columns} dataSource={data} locale={{ emptyText: (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Não há dados" />)
       }} />
      <DataTableUsersModal
        title="Editar Dados"
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={() => setIsVisible(modalVisibility(isVisible))}
        okButtonText="Salvar"
        width="70%"
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <FileDoneOutlined
              style={{
                fontSize: "24px",
                color: "white",
                background: "rgba(235, 170, 2, 1)",
                width: "32px",
                height: "32px",
                padding: "4px",
                borderRadius: "6px",
                marginRight: "6px",
              }}
            />
            <div className="">
              <p className="m-0" style={{ fontSize: "14px" }}>
                Visualize o relatório da aluno(a) {aluno?.student}.
              </p>
              <p className="m-0" style={{ fontSize: "14px" }}>
                Aqui você encontra dados específicos de cada matéria.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img
              style={{
                width: "100px",
                objectFit: "cover",
                padding: "6px",
                marginBottom: "8px",
              }}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt=""
            />
            <div className="d-flex flex-column">
              <CommomText
                style={{ fontSize: "16px", margin: "0", padding: "0" }}
              >
                Aluno: {aluno?.student}
              </CommomText>
              <CommomText
                style={{ fontSize: "16px", margin: "0", padding: "0" }}
              >
                Matrícula: {aluno?.enrollment}
              </CommomText>
              <CommomText
                style={{ fontSize: "16px", margin: "0", padding: "0" }}
              >
                Turma: {aluno?.classroom}
              </CommomText>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Dados Matrícula" key="1">
              <Form
                form={form}
                layout="vertical"
                initialValues={{ requiredMarkValue: requiredMark }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <div className="row">
                  <div className="col-4">
                    <Form.Item label="Nome" required>
                      <Input disabled value={aluno?.student.toString()} />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Matrícula" required>
                      <Input disabled value={aluno?.enrollment.toString()} />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Turma" required>
                      <Input disabled value={aluno?.classroom?.toString()} />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item label="Responsável Fianceiro" required>
                      <Input
                        disabled
                        value={aluno?.financialResponsable?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Responsável Pedagógico" required>
                      <Input
                        disabled
                        value={aluno?.pedagogicalResponsable?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Telefone" required>
                      <Input disabled value={aluno?.phoneNumber?.toString()} />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item label="Telefone Fixo" required>
                      <Input
                        disabled
                        value={aluno?.homePhoneNumber?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="CEP" required>
                      <Input disabled value={aluno?.address?.cep?.toString()} />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Rua" required>
                      <Input
                        disabled
                        value={aluno?.address?.logradouro?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Item label="Número" required>
                      <Input
                        disabled
                        value={aluno?.address?.numero?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Bairro" required>
                      <Input
                        disabled
                        value={aluno?.address?.bairro?.toString()}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-4">
                    <Form.Item label="Cidade" required>
                      <Input
                        disabled
                        value={aluno?.address?.localidade?.toString()}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Métricas" key="2">
              <div className="row">
                {/* {metrics?.map((item) => {
                  return <StudentMetric metrics={item} />;
                })} */}
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </DataTableUsersModal>
    </div>
  );
};
export default styled(DataTableUsers)`
  width: 100%;
  height: 100%;
`;
