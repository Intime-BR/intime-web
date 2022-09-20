import styled from "styled-components";
import { Aluno, Metrics } from "../../interfaces/interfaces";
import {
  EditFilled,
  ExclamationCircleOutlined,
  FileDoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, Input, Space, Table, Tabs, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Avatar } from "antd";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import { modalVisibility } from "../../utils/exports";
import DataTableModal from "./dataTableModal";
import CommomText from "../CommomText/commomText";
import { RequiredMark } from "antd/lib/form/Form";
import StudentMetric from "../StudentMetric/studentMetric";

type DataTableProps = {
  className?: string;
  data?: Aluno[];
};

const DataTable = ({ className, data }: DataTableProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [aluno, setAluno] = useState<Aluno>();


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

  const metrics: Metrics[] = [
    {
      subject: "Matemática",
      availableClasses: 40,
      presences: 22,
      absences: 10,
      pendences: 8,
      percent: 35,
      status:"normal"
    },

    {
      subject: "Português",
      availableClasses: 40,
      presences: 8,
      absences: 13,
      pendences: 19,
      percent: 12,
      status:'exception'
    },

    {
      subject: "DevWeb",
      availableClasses: 40,
      presences: 37,
      absences: 3,
      pendences: 0,
      percent: 100,
      status:"success"
    },

    {
      subject: "Framework",
      availableClasses: 40,
      presences: 22,
      absences: 10,
      pendences: 8,
      percent: 70,
      status:"normal"
    },

    {
      subject: "Framework",
      availableClasses: 40,
      presences: 22,
      absences: 10,
      pendences: 8,
      percent: 70,
      status:"normal"
    },

    {
      subject: "Framework",
      availableClasses: 40,
      presences: 22,
      absences: 10,
      pendences: 8,
      percent: 70,
      status:"normal"
    },

    {
      subject: "Framework",
      availableClasses: 40,
      presences: 22,
      absences: 10,
      pendences: 8,
      percent: 70,
      status:"normal"
    },
  ]

  const columns: ColumnsType<Aluno> = [
    {
      title: "Aluno",
      dataIndex: "student",
      key: "student",
      render: (text) => (
        <div className="d-flex align-items-center">
          <Avatar
            style={{
              backgroundColor: "rgba(39, 52, 182, 0.8)",
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
      title: "Matrícula",
      dataIndex: "enrollment",
      key: "enrollment",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status?.map((tag) => {
            return (
              <Tag
                className="rounded"
                style={{ padding: "2px 10px", fontSize: "13px" }}
                color={handleTagColor(tag)}
                key={tag}
              >
                <Badge status="default" />
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Sala",
      dataIndex: "classroom",
      key: "classroom",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Matéria",
      dataIndex: "subject",
      key: "subject",
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
            <ExclamationCircleOutlined
              onClick={() => console.log("INFO BUTTON")}
            />
          </a>
        </Space>
      ),
    },
  ];

  const handleTagColor = (tag: String) => {
    switch (tag) {
      case "Presente":
        return "#2EB73C";
      case "Pendente":
        return "#EBAA02";
      case "Ausente":
        return "rgba(255, 0, 0, 0.66)";
    }
  };

  return (
    <div className={className}>
      <Table scroll={{ x: true }} columns={columns} dataSource={data} />
      <DataTableModal
        title="Editar Dados"
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={() => setIsVisible(modalVisibility(isVisible))}
        okButtonText="Salvar"
        width={1200}
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
              <p className="m-0" style={{ fontSize: "12px" }}>
                Visualize o relatório da aluno(a) {aluno?.student}.
              </p>
              <p className="m-0" style={{ fontSize: "12px" }}>
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
                Matricula: {aluno?.enrollment}
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
                {
                  metrics.map((item) => {
                    return(
                      <StudentMetric 
                      metrics={item}
                      />
                    )
                  })
                }
              
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Pendentes" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
            <Tabs.TabPane tab="Feedbacks" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </div>
      </DataTableModal>
    </div>
  );
};
export default styled(DataTable)`
  width: 100%;
  height: 100%;
`;
