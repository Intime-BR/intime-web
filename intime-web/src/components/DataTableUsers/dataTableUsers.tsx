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

type DataTableUsersProps = {
  className?: string;
  data?: User[];
};

const DataTableUsers = ({ className, data }: DataTableUsersProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [metrics, setMetrics] = useState<{ students: User }>();

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
            <EditFilled />
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
      </DataTableUsersModal>
    </div>
  );
};
export default styled(DataTableUsers)`
  width: 100%;
  height: 100%;
`;
