import React, { Fragment } from 'react';
import { Data } from './Data';
import './styles.scss';

const BlockOfCopy = ({ name }) => {
  return (
    <Fragment>
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: Data }} className={`font ${name}`} />
    </Fragment>
  );
};

export default BlockOfCopy;
