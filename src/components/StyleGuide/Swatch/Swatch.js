import React from 'react';
import './Swatch.scss';

const Swatch = ({ scale }) => {
  return <div className={`swatch color${scale}`}></div>;
};

export default Swatch;
