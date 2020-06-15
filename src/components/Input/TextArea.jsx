import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import Label from './Label';
import './TextArea.scss';

const TextArea = ({ label, color, rows = 2, required, name, onChange = () => { } }) => (
  <div key={label} className={classNames('text-area-container', { [color]: color })}>
    <Label name={label} required={required} />
    <Input.TextArea rows={rows} name={name} onChange={onChange} />
  </div>
);

export default TextArea;
