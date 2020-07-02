import React from 'react';
import { Select } from 'antd';
import Label from './Label';
import './SelectField.scss';

const SelectField = ({ onChange = () => { }, label, color, options, required, name }) => (
  <div key={label} className={`select-field-container ${color}`}>
    <Label name={label} required={required} />
    <Select onChange={onChange} name={name}>
      {options.map((option, index) => (
        <Select.Option key={index} value={option.value}>{option.label}</Select.Option>
      ))}
    </Select>
  </div>
);

export default SelectField;
