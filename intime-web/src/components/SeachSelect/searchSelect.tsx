import { Select } from "antd";
import styled from "styled-components";
import { Aluno } from "../../interfaces/interfaces";

const { Option } = Select;

// const data: Array<Aluno> = [
//   {
//     id: 1,
//     name: "ISTEVO",
//   },
//   {
//     id: 2,
//     name: "NICOLLI",
//   },
//   {
//     id: 3,
//     name: "BIG BIG",
//   },
//   {
//     id: 4,
//     name: "QUEIJO",
//   },
// ];

type DataSelectProps = {
  className?: String;
  onChange?: (value: any, option: any) => void;
  onSearch?: (value: String) => void;
  data?: Array<any>;
};

const DataSelect = ({
  className,
  onChange,
  onSearch,
  data,
}: DataSelectProps) => (
  <Select
    className="select"
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input: any, option: any) =>
      option.children?.toString().toLowerCase().includes(input.toLowerCase())
    }
  >
    {data?.map((item: Aluno) => {
      return <Option value={item.id}>{item.name}</Option>;
    })}
  </Select>
);

export default styled(DataSelect)``;
