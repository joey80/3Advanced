import React from 'react';
import Logos from './Logo/Logo';
import Swatch from './Swatch/Swatch';
import Typography from './Typography/Typography';

const StyleGuide = () => {
  const Colors = () => {
    return Array.from(Array(5), (_, i) => <Swatch scale={i + 1} />);
  };

  const FlexWrapper = ({ children }) => <div style={{ display: 'flex' }}>{children}</div>;

  const Heading = ({ children }) => (
    <h2 style={{ color: '#7b8ba4', marginTop: '100px' }}>{children}</h2>
  );

  return (
    <div style={{ padding: '30px' }}>
      <h1>StyleGuide</h1>
      <Heading>Colors</Heading>
      <FlexWrapper>
        <Colors />
      </FlexWrapper>
      <Heading>Typography</Heading>
      <Typography />
      <Heading>Identity</Heading>
      <Logos />
    </div>
  );
};

export default StyleGuide;
