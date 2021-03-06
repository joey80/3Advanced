import React, { Fragment } from 'react';
import Audio from './Audio/Audio';
import Logos from './Logo/Logo';
import Swatch from './Swatch/Swatch';
import Typography from './Typography/Typography';

const StyleGuide = () => {
  const Colors = () => {
    return Array.from(Array(5), (_, index) => <Swatch scale={index + 1} key={index} />);
  };

  const FlexWrapper = ({ children }) => (
    <div style={{ alignItems: 'flex-start', display: 'flex' }}>{children}</div>
  );

  const Heading = ({ children }) => (
    <h2 style={{ color: '#7b8ba4', marginTop: '100px' }}>{children}</h2>
  );

  const Images = () => {
    const fileNames = ['background', 'splash-enter', 'splash-logo', 'splash-logoextend'];
    return fileNames.map((elm, index) => (
      <img src={require(`../../assets/images/${elm}.gif`)} key={index} alt={`${elm} example`} />
    ));
  };

  const Section = ({ children, title }) => {
    return (
      <Fragment>
        <Heading>{title}</Heading>
        {children}
      </Fragment>
    );
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>StyleGuide</h1>
      <Section title='Colors'>
        <FlexWrapper>
          <Colors />
        </FlexWrapper>
      </Section>
      <Section title='Audio'>
        <Audio />
      </Section>
      <Section title='Typography'>
        <Typography />
      </Section>
      <Section title='Image Reference'>
        <FlexWrapper>
          <Images />
        </FlexWrapper>
      </Section>
      <Section title='Identity'>
        <Logos />
      </Section>
    </div>
  );
};

export default StyleGuide;
