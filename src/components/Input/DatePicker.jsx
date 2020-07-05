import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import classNames from 'classnames';
import Label from './Label';
import locale from 'antd/es/date-picker/locale/pt_BR';
import './DatePicker.scss';

const DatePicker = ({ label, color, onChange = () => { }, required, name, ...otherProps }) => (
  <div key={label} className={classNames('date-picker-container', { [color]: color })}>
    <Label name={label} required={required} />
    <AntDatePicker
      locale={locale}
      placeholder=""
      format="DD/MM/YYYY"
      onChange={onChange}
      name={name}
      {...otherProps}
    />
  </div>
);

export default DatePicker;
