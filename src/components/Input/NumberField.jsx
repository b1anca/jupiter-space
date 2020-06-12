import React from 'react';
import { InputNumber } from 'antd';
import Label from './Label';
import './NumberField.scss';

const NumberField = ({ label, onChange, color, required }) => (
  <div key={label} className={`number-field-container ${color}`}>
    <Label name={label} required={required} />
    <InputNumber onChange={onChange} />
  </div>
);

export default NumberField;
