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
        return <Option value={item.id}>{item.student}</Option>;
      })}
    </Select>
  </div>
);

export default styled(DataSelect)`
  width: 100%;
  height: auto;
  .select {
    width: 100%;
    height: 100%;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    position: relative;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    height: 40px;
    padding: 5px 11px;
  }
  
`;
