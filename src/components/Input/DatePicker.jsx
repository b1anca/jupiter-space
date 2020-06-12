import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import Label from './Label';
import locale from 'antd/es/date-picker/locale/pt_BR';
import './DatePicker.scss';

const DatePicker = ({ label, color, onChange, required }) => (
  <div key={label} className={`date-picker-container ${color}`}>
    <Label name={label} required={required} />
    <AntDatePicker
      locale={locale}
      placeholder=""
      format="L"
      onChange={onChange}
    />
  </div>
);

export default DatePicker;
