import styled from "styled-components";
import { Aluno } from "../../interfaces/interfaces";
import {
  EditFilled,
  ExclamationCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Avatar } from "antd";
import { Badge } from "antd";
import { useEffect, useState } from "react";
import { modalVisibility } from "../../utils/exports";
import DataTableModal from "./dataTableModal";

type DataTableProps = {
  data?: Aluno[];
};

const DataTable = ({ data }: DataTableProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [aluno, setAluno] = useState<Aluno>();

  const handleCurrentAluno = (data: Aluno) => {
    setIsVisible(modalVisibility(isVisible));
    setAluno(data);
  };

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

  const handleData = (data: Aluno) => {};

  return (
    <div>
      <Table scroll={{ x: true }} columns={columns} dataSource={data} />
      <DataTableModal
        title="Editar Dados"
        isVisible={isVisible}
        onCancel={() => setIsVisible(modalVisibility(isVisible))}
        onOk={() => setIsVisible(modalVisibility(isVisible))}
        okButtonText="Salvar"
        width={1000}
      >
        <p>{aluno?.student}</p>
      </DataTableModal>
    </div>
  );
};
export default styled(DataTable)``;
