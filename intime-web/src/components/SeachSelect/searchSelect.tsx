import { Select } from "antd";
import styled from "styled-components";
import { Aluno } from "../../interfaces/interfaces";

const { Option } = Select;

type DataSelectProps = {
  className?: string;
  onChange?: (value: any, option: any) => void;
  onSearch?: (value: String) => void;
  data?: Array<any>;
  placeHolder?: String;
};

const DataSelect = ({
  className,
  onChange,
  onSearch,
  data,
  placeHolder,
}: DataSelectProps) => (
  <div className={`${className}`}>
    <Select
      className="select"
      showSearch
      placeholder={placeHolder}
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
  </div>
);

export default styled(DataSelect)`
  width: 100%;
  height: 100%;
  .select {
    width: 100%;
    height: 100%;
  }
`;
