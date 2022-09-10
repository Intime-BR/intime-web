import { EditFilled, ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import { Aluno } from "../../interfaces/interfaces";
import { Avatar } from 'antd';
import { Badge } from 'antd';

type DataTableProps = {
  className?: String;
  data?: Array<{}>;
};

const DataTable = ({ className }: DataTableProps) => {
  const data: Aluno[] = [
    {
      id: 1,
      student: "Estevão Boaventura",
      enrollment: 12000604,
      classroom: "3B1",
      subject: "Matemática",
      status: ["Presente"],
    },
    {
      id: 2,
      student: "Nicolle",
      enrollment: 12002097,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Ausente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
    },
    {
      id: 3,
      student: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      status: ["Pendente"],
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

  const columns: ColumnsType<Aluno> = [
    {
      title: "Aluno",
      dataIndex: "student",
      key: "student",
      render: (text) => <div className="d-flex align-items-center">
        <Avatar style={{ backgroundColor: 'rgba(39, 52, 182, 0.8)', color:"white", display:"flex", justifyContent:"center", alignItems:"center" }} icon={<UserOutlined />} />
              <span style={{marginLeft:'8px'}}>{text}</span>
        </div>,
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
              <Tag className="rounded" color={handleTagColor(tag)} key={tag}>
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
            <EditFilled />
          </a>
          <a>
            <ExclamationCircleOutlined />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default styled(DataTable)``;
