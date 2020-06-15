import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import Label from './Label';
import './TextField.scss';

const TextField = ({ name, label, onChange = () => {}, color, required, error }) => (
  <div key="label" className={classNames('text-field-container', name, { 'error': error })}>
    <div className={classNames('input-container', { [color]: color })}>
      <Label name={label} required={required} />
      <Input onChange={onChange} name={name} />
    </div>
    {error && (<span className="error-msg">{error}</span>)}
  </div>
);

export default TextField;
