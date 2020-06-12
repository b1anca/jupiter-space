import React from 'react';
import { Input } from 'antd';
import Label from './Label';
import './TextField.scss';

const TextField = ({ label, onChange, color, required }) => (
  <div key="label" className={`text-field-container ${label} ${color}`}>
    <Label name={label} required={required} />
    <Input onChange={onChange} />
  </div>
);

export default TextField;
