import React from 'react';
import './Label.scss';

const Label = ({ name, required }) => (
  <label className={required && 'required'}>{name}</label>
)

export default Label;
