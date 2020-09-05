import React from 'react';
import BlockOfCopy from './BlockOfCopy';
import { Names } from './Data';

const Typography = () => {
  return Names.map((elm, index) => <BlockOfCopy key={index} name={elm} />);
};

export default Typography;
