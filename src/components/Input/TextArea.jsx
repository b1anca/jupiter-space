import React from 'react';
import { Input } from 'antd';
import Label from './Label';
import './TextArea.scss';

const TextArea = ({ label, onChange, color, rows = 2, required }) => (
  <div key={label} className={`text-area-container ${color}`}>
    <Label name={label} required={required} />
    <Input.TextArea rows={rows} onChange={onChange} />
  </div>
);

export default TextArea;
