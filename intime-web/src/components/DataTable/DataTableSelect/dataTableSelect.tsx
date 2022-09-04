import { Select } from 'antd';
import React from 'react';
import './dataTable.css'

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const data: Array<{value: String}> = [
  {
    value: "daniel"
  },
  {
    value: "estevao"
  },
    {
    value: "daniel"
  },
  {
    value: "estevao"
  }
]

const DataSelect: React.FC = () => (
  <Select
    className='select'
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
    }
  >
    {
      data.map((item)=>{
        return (
          <Option value={item.value}>{item.value}</Option>
        )
      })
    }
  </Select>
);

export default DataSelect;