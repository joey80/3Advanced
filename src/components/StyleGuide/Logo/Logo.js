import React, { Fragment } from 'react';
import { ReactComponent as Identity } from '../../../assets/svgs/identity.svg';
import { ReactComponent as Logo } from '../../../assets/svgs/logo.svg';
import Overview from '../../../assets/images/overview.jpg';

const Logos = () => {
  return (
    <Fragment>
      <img src={Overview} alt='overview' />
      <Identity />
      <Logo />
    </Fragment>
  );
};

export default Logos;
