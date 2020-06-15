import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import Label from './Label';
import './TextField.scss';

const TextField = ({ name, label, onChange = () => { }, color, required }) => (
  <div key="label" className={classNames('text-field-container', name)}>
    <div className={classNames('input-container', { [color]: color })}>
      <Label name={label} required={required} />
      <Input onChange={onChange} name={name} />
    </div>
  </div>
);

export default TextField;
