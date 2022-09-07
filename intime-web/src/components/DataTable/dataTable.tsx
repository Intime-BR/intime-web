import { EditFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Aluno } from "../../interfaces/interfaces";

type DataTableProps = {
  className?: String;
  data?: Array<{}>;
};

const DataTable = () => {
  const data: Aluno[] = [
    {
      id: 1,
      name: "Estevão",
      enrollment: 12000604,
      classroom: "3B1",
      subject: "Matemática",
      tags: ["Presente"],
    },
    {
      id: 2,
      name: "Nicolle",
      enrollment: 12002097,
      classroom: "3B1",
      subject: "Portugues",
      tags: ["Ausente"],
    },
    {
      id: 3,
      name: "Derick",
      enrollment: 12000522,
      classroom: "3B1",
      subject: "Portugues",
      tags: ["Pendente"],
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Matrícula",
      dataIndex: "enrollment",
      key: "enrollment",
      render: (text) => <a>{text}</a>,
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
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            return (
              <Tag color={handleTagColor(tag)} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
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
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default DataTable;
