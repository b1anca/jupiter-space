import React from 'react';
import { InputNumber } from 'antd';
import classNames from 'classnames';
import Label from './Label';
import './NumberField.scss';

const NumberField = ({ label, onChange = () => { }, color, required, name }) => (
  <div key={label} className={classNames('number-field-container', { [color]: color })}>
    <Label name={label} required={required} />
    <InputNumber onChange={onChange} name={name} />
  </div>
);

export default NumberField;
