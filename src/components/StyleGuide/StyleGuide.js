import React from 'react';
import Swatch from './Swatch/Swatch';

const StyleGuide = () => {
  const Colors = () => {
    return Array.from(Array(5), (_, i) => <Swatch scale={i + 1} />);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>StyleGuide</h1>
      <h2>Colors</h2>
      <div style={{ display: 'flex' }}>
        <Colors />
      </div>
      <h2>Typography</h2>
    </div>
  );
};

export default StyleGuide;
