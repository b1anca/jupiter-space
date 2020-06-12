import React from 'react';
import { Select } from 'antd';
import Label from './Label';
import './SelectField.scss';

const SelectField = ({ onChange, label, color, options, required }) => (
  <div key={label} className={`select-field-container ${color}`}>
    <Label name={label} required={required} />
    <Select onChange={onChange}>
      {options.map((option) => (
        <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
      ))}
    </Select>
  </div>
);

export default SelectField;
